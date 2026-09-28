import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// ponytail: mirror of main.tsx — GitHub Pages has no SPA fallback, so a deep
// link like /treatments serves 404.html and boots this same app, letting the
// router render the matching route (or the NotFound page).
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);