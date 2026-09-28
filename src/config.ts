// Single source of truth for clinic + booking details.
// All data here is fictional demo data (Dental_Final_Demo_3_Client_Brief.pdf).
export const CLINIC = {
  name: "Lumina Dental & Implant Studio",
  shortName: "Lumina Dental",
  tagline: "Modern Dentistry. Exceptional Care.",
  address: "1st Floor, Aurora Plaza, 42 Residency Road, Bengaluru, Karnataka – 560025, India",
  addressShort: "1st Floor, Aurora Plaza, 42 Residency Road, Bengaluru",
  city: "Bengaluru, Karnataka",
  phone: "+91 80 4587 2196",
  phoneHref: "+918045872196",
  whatsappLink:
    "https://wa.me/918045872196?text=Hi%20Lumina%20Dental%2C%20I%27d%20like%20to%20book%20an%20appointment.",
  email: "hello@luminadental.example",
  established: 2011,
  hours: [
    { day: "Mon – Fri", time: "9:00 AM – 8:00 PM" },
    { day: "Saturday", time: "9:00 AM – 6:00 PM" },
    { day: "Sunday", time: "10:00 AM – 2:00 PM" },
  ],
  dentists: [
    {
      initials: "NR",
      name: "Dr. Nisha Rao",
      qual: "BDS, MDS",
      specialty: "Prosthodontist & Implantologist",
      experience: "15+ years",
      patients: "11,000+",
      blurb:
        "Leads the implant programme, placing and restoring implants end-to-end with a focus on full-mouth rehabilitation.",
    },
    {
      initials: "AM",
      name: "Dr. Arjun Menon",
      qual: "BDS, MDS",
      specialty: "Endodontist",
      experience: "12+ years",
      patients: "8,000+",
      blurb:
        "Calm, microscope-assisted root canals that aim to save the natural tooth — often in a single visit.",
    },
    {
      initials: "TM",
      name: "Dr. Tara Mehta",
      qual: "BDS",
      specialty: "Cosmetic & General Dentist",
      experience: "8+ years",
      patients: "5,000+",
      blurb:
        "Cosmetic makeovers, veneers and whitening — plus gentle everyday dentistry for families.",
    },
  ],
  services: [
    {
      num: "01",
      title: "Preventive & General",
      blurb: "Routine care that stops small issues from becoming big ones.",
      items: ["Dental Check-ups", "Cleaning", "Fillings", "Gum Care", "Tooth Extraction"],
    },
    {
      num: "02",
      title: "Root Canal & Restorative",
      blurb: "Saving natural teeth with precise, calm endodontic care.",
      items: ["Root Canal", "Crowns", "Bridges", "Dentures", "Re-treatment"],
    },
    {
      num: "03",
      title: "Implant Dentistry",
      blurb: "Replace missing teeth with permanent, natural-feeling implants.",
      items: ["Dental Implants", "Implant Crowns", "Full-Mouth Rehabilitation"],
    },
    {
      num: "04",
      title: "Cosmetic Dentistry",
      blurb: "Targeted refinements that change how your smile reads.",
      items: ["Veneers", "Teeth Whitening", "Smile Makeovers", "Composite Bonding"],
    },
    {
      num: "05",
      title: "Orthodontics",
      blurb: "Straighten teeth — discreetly, with clear aligners.",
      items: ["Clear Aligners", "Braces Consultation", "Retainers"],
    },
    {
      num: "06",
      title: "Emergency & Family",
      blurb: "Urgent care when it hurts, and gentle care for the whole family.",
      items: ["Emergency Dentistry", "Wisdom Tooth Removal", "Pediatric Dentistry"],
    },
  ],
  stats: [
    { value: "15+", label: "Years of care" },
    { value: "24,000+", label: "Patients treated" },
    { value: "30,000+", label: "Procedures completed" },
    { value: "4.9/5", label: "Average rating" },
    { value: "3", label: "Specialists in-house" },
  ],
  reviews: [
    {
      text: "The team made my treatment comfortable and explained every step clearly.",
      name: "Riya S.",
      treatment: "Root canal",
    },
    {
      text: "Booking was simple and the clinic followed up quickly.",
      name: "Karan M.",
      treatment: "Implants consultation",
    },
    {
      text: "Very professional clinic and the treatment options were explained well.",
      name: "Neha P.",
      treatment: "Teeth whitening",
    },
  ],
  gallery: [
    { label: "Reception", src: "reception" },
    { label: "Treatment rooms", src: "clinicRoom" },
    { label: "In-house equipment", src: "equipment" },
    { label: "Smiles, up close", src: "smileClose" },
  ],
  faqs: [
    {
      q: "How do I book an appointment?",
      a: "Tap Book an Appointment, pick your dentist, treatment and a time that suits you, and we'll confirm by phone or WhatsApp.",
    },
    {
      q: "Do you handle dental emergencies?",
      a: "Yes. Call our emergency line and we'll see you the same day wherever possible — severe pain, swelling, trauma or a broken tooth.",
    },
    {
      q: "What does a treatment cost?",
      a: "Cost varies with the case, so we don't quote flat prices. Use the Cost Enquiry form and we'll call you with an estimate after a quick assessment.",
    },
    {
      q: "Are the dentists qualified?",
      a: "All three specialists are BDS / MDS qualified with 8–15+ years of experience, and our implant and root-canal work is done in-house.",
    },
    {
      q: "Do you take children?",
      a: "Yes — we offer pediatric dentistry in a calm, friendly setting, and the whole family can be seen at one visit.",
    },
  ],
  beforeAfter: [
    { title: "Porcelain veneers", result: "Full smile makeover", months: "3 weeks" },
    { title: "Teeth whitening", result: "Brightness lift", months: "1 visit" },
    { title: "Dental implants", result: "Replaced missing tooth", months: "3 months" },
    { title: "Smile makeover", result: "Composite + veneer combo", months: "6 weeks" },
  ],
  // Cal.com event-type link (username/event-slug). While empty, booking buttons
  // show a "coming soon" panel instead of the calendar.
  calLink: "envoyc/demo-dental",
  // Verified Unsplash photo IDs (checked HTTP 200 before shipping).
  images: {
    hero: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1600&q=80",
    clinicRoom:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    smileWoman:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80",
    reception:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    dentistNisha:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
    dentistArjun:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
    dentistTara:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80",
    smileClose:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=1200&q=80",
    teethBright:
      "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=1200&q=80",
    modelDentures:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1200&q=80",
    equipment:
      "https://images.unsplash.com/photo-1580881647059-923632b8fd75?auto=format&fit=crop&w=1200&q=80",
    brightSmile:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
  },
};

export const CONTACT_EMAIL = CLINIC.email;
export const EMERGENCY_PHONE = CLINIC.phone;
export const EMERGENCY_PHONE_HREF = CLINIC.phoneHref;