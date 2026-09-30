// ponytail: run `node tools/contrast-check.mjs` after editing the OKLCH ramps in
// src/index.css. Parses the real @theme values (no hardcoded duplicates) and
// flags any text/background pair that misses WCAG AA. Upgrade path: swap the
// hand-rolled OKLCH math for culori if the token set grows past what this covers.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const css = readFileSync(join(here, '..', 'src', 'index.css'), 'utf8');

const srgb = (c) => {
  c /= 255;
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
};

function oklchToRgb(L, C, Hdeg) {
  const h = (Hdeg * Math.PI) / 180;
  const a = C * Math.cos(h);
  const b = C * Math.sin(h);
  const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = L - 0.0894841775 * a - 1.291485548 * b;
  const l = l_ ** 3;
  const m = m_ ** 3;
  const s = s_ ** 3;
  const lr = 4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s;
  const lg = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s;
  const lb = -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s;
  const cl = (v) => Math.min(1, Math.max(0, v));
  const enc = (v) => {
    const x = v <= 0.0031308 ? 12.92 * v : 1.055 * Math.pow(cl(v), 1 / 2.4) - 0.055;
    return Math.round(cl(x) * 255);
  };
  return [enc(lr), enc(lg), enc(lb)];
}

const lum = ([r, g, b]) => 0.2126 * srgb(r) + 0.7152 * srgb(g) + 0.0722 * srgb(b);

const ratio = (fg, bg) => {
  const a = lum(oklchToRgb(...fg));
  const b = lum(oklchToRgb(...bg));
  const [hi, lo] = a > b ? [a, b] : [b, a];
  return (hi + 0.05) / (lo + 0.05);
};

// Pull `--color-<name>: oklch(L C H);` straight out of the stylesheet.
const tokens = {};
for (const m of css.matchAll(/--color-([\w-]+):\s*oklch\(\s*([\d.]+)\s+([\d.]+)\s+([\d.]+)\s*\)/g)) {
  tokens[m[1]] = [+m[2], +m[3], +m[4]];
}

const SNOW = ['snow', 4.5]; // value 1,0,0 — defined below as pure white
const WHITE = [1, 0, 0];

// [foreground, background, minimum, note]
const CHECKS = [
  ['wine-950', 'snow', 4.5], ['wine-900', 'snow', 4.5], ['wine-800', 'snow', 4.5],
  ['wine-700', 'snow', 4.5], ['wine-600', 'snow', 4.5], ['wine-500', 'snow', 4.5],
  ['wine-500', 'porcelain', 4.5], ['wine-400', 'snow', 4.5], ['wine-400', 'porcelain', 4.5],
  ['blush-700', 'snow', 4.5], ['blush-600', 'snow', 4.5], ['blush-600', 'porcelain', 4.5],
  ['blush-500', 'snow', 4.5], ['blush-500', 'porcelain', 4.5], ['blush-400', 'porcelain', 4.5],
  ['ink', 'snow', 4.5], ['ink-soft', 'snow', 4.5],
  // light-on-dark: kickers and footer labels sit on wine-950
  ['blush-200', 'wine-950', 4.5], ['blush-300', 'wine-950', 4.5],
  // gold is surface-only — it must carry wine-950 text, never white
  ['wine-950', 'gold-400', 4.5], ['wine-950', 'gold-300', 4.5],
];

// white-on-color surfaces (button backgrounds)
const SURFACES = [
  ['snow', 'wine-800'], ['snow', 'wine-900'], ['snow', 'wine-950'],
  ['snow', 'wine-600'], ['snow', 'blush-700'], ['snow', 'blush-600'],
];

let failed = 0;
const line = (label, r, need) => {
  const ok = r >= need;
  if (!ok) failed++;
  console.log(`${label.padEnd(30)}${r.toFixed(2).padStart(6)}  need ${String(need).padEnd(4)} ${ok ? 'PASS' : 'FAIL'}`);
};

console.log('--- text on light surfaces ---');
for (const [fg, bg, need] of CHECKS) {
  if (!tokens[fg] || (bg !== 'snow' && !tokens[bg])) {
    console.log(`${(fg + ' on ' + bg).padEnd(30)}   SKIP (token missing)`);
    failed++;
    continue;
  }
  const bgv = bg === 'snow' ? WHITE : tokens[bg];
  line(`${fg} on ${bg}`, ratio(tokens[fg], bgv), need);
}

console.log('\n--- white text on button surfaces ---');
for (const [fgName, bgName] of SURFACES) {
  if (!tokens[bgName]) { console.log(`snow on ${bgName}  SKIP (token missing)`); failed++; continue; }
  const r = (() => {
    const a = lum([255, 255, 255]);
    const b = lum(oklchToRgb(...tokens[bgName]));
    const [hi, lo] = a > b ? [a, b] : [b, a];
    return (hi + 0.05) / (lo + 0.05);
  })();
  line(`snow on ${bgName}`, r, 4.5);
}

console.log(`\n${failed} failing`);
process.exitCode = failed ? 1 : 0;