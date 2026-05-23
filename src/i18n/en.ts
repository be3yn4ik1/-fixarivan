import type { Translations } from './types';

export const en: Translations = {
  nav: {
    services: 'Services',
    forBusiness: 'For Business',
    reviews: 'Reviews',
    contact: 'Contact',
    cta: 'Chat on WhatsApp',
    serviceItems: {
      deviceRepair: 'Device Repair',
      laptopRepair: 'Laptop & PC Repair',
      phoneRepair: 'Phone Repair',
      wifi: 'Wi-Fi & Network',
      smartHome: 'Smart Home Setup',
      cameras: 'Security Cameras',
      itSupport: 'IT Support',
      dataRecovery: 'Data Recovery',
      diagnostics: 'Diagnostics',
      warranty: 'Warranty Support',
      recycling: 'Electronics Recycling',
    },
  },

  hero: {
    badge: 'We Come. We Fix. We Save You Time.',
    headline1: 'Technology',
    headline2: 'works',
    headlineAccent: 'for you',
    sub: 'Mobile tech service for home and business. We solve problems fast, professionally and with a warranty — right at your door.',
    ctaWhatsapp: 'Chat on WhatsApp',
    ctaVideo: 'Watch Video',
    reviews: 'based on 100+ Google reviews',
    availableToday: 'Available Today',
    availableSub: 'Same-day visits in Turku & area',
    benefits: [
      { title: 'We come to you', sub: 'Home, office or anywhere' },
      { title: 'Professional & reliable', sub: '10+ years of experience' },
      { title: 'Fast solutions', sub: 'Most issues fixed in one visit' },
      { title: 'Transparent pricing', sub: 'No hidden fees, ever' },
      { title: 'Responsible & sustainable', sub: 'We care about the environment' },
    ],
  },

  services: {
    label: 'Our Services',
    headline: 'Solving technical problems',
    headlineAccent: 'any level',
    headlineMid: 'at',
    sub: 'A wide range of services for home and business. From Wi-Fi setup to complex tech repairs.',
    stats: [
      { val: '8+', label: 'Years of experience' },
      { val: '1500+', label: 'Happy clients' },
      { val: '5.0', label: 'Average rating' },
    ],
    learnMore: 'Learn more',
    ctaCard: {
      headline: "Don't see what you need?",
      sub: "Write to us and we'll find the best solution for your situation.",
      btn: 'Chat on WhatsApp',
    },
    items: [
      { title: 'Device Repair', desc: 'Laptops, computers, phones, consoles & more' },
      { title: 'Wi-Fi & Network', desc: 'Network setup, signal boost, problem solving' },
      { title: 'Smart Home Setup', desc: 'Installation & setup of smart devices' },
      { title: 'Security Cameras', desc: 'CCTV installation & configuration' },
      { title: 'IT Support', desc: 'Business IT support & problem solving' },
      { title: 'Data Recovery', desc: 'Move your data to a new device without loss' },
      { title: 'Diagnostics', desc: 'Find the root cause & suggest the best solution' },
      { title: 'Warranty Support', desc: 'We assist with warranty cases & service centers' },
      { title: 'Electronics Recycling', desc: 'We accept old devices & recycle them responsibly' },
    ],
  },

  howItWorks: {
    label: 'How We Work',
    headline: 'Simple. Convenient.',
    headlineAccent: 'Reliable.',
    sub: "We've made the process as simple as possible so you save time and get the best result.",
    bullets: [
      { title: 'Fast response', sub: 'We arrive at a convenient time, work without delays.' },
      { title: 'Professional approach', sub: 'Experience, equipment and attention to detail.' },
      { title: 'Convenience for you', sub: 'We solve problems on site, without queues and extra trips.' },
    ],
    ctaWhatsapp: 'Chat on WhatsApp',
    ctaVideo: 'Watch video',
    steps: [
      { num: '01', title: 'Contact us', sub: 'Write on WhatsApp or leave a request on the site.' },
      { num: '02', title: 'We come to you', sub: 'We arrive at a convenient time in Turku and surrounding areas.' },
      { num: '03', title: 'We solve the problem', sub: 'Diagnostics and quality solution on site.' },
      { num: '04', title: 'You are satisfied', sub: 'We check the result and give a warranty on the work.' },
    ],
  },

  whyUs: {
    label: 'Why Choose FixariVan',
    headline: 'Experience. Quality.',
    headlineAccent: 'Trust.',
    sub: 'We combine professionalism, modern equipment and an honest approach to every client.',
    features: [
      { title: 'Experience & Expertise', desc: 'Over 8 years solving tech problems of any complexity — from cracked screens to full network infrastructure.' },
      { title: 'Professional Equipment', desc: 'Our mobile workshop carries the same tools as a professional repair lab.' },
      { title: 'Honest & Transparent', desc: 'Fair prices, plain-language explanations, no hidden charges. Ever.' },
      { title: 'Environmental Care', desc: "We accept and responsibly recycle old electronics so they don't end up in landfill." },
    ],
    stats: [
      { val: '8+', label: 'Years of experience' },
      { val: '1500+', label: 'Happy clients' },
      { val: '5.0', label: 'Average rating' },
      { val: 'Turku', label: '& surrounding regions' },
    ],
    reviewQuote: '"Arrived quickly, explained everything clearly and fixed it."',
    reviewAuthor: 'Alex, Turku',
  },

  reviews: {
    label: 'Client Reviews',
    headline: 'What our clients say',
    sub: 'Real reviews from real people.',
    items: [
      { name: 'Alex T.', location: 'Turku', text: 'Arrived within the hour, diagnosed the problem instantly and fixed my laptop on the spot. Honest pricing, zero surprises. Highly recommend!', service: 'Device Repair' },
      { name: 'Maria K.', location: 'Turku', text: 'Had terrible Wi-Fi in our new apartment. They came, set up a mesh system and now we have perfect signal everywhere. Super professional.', service: 'Wi-Fi & Network' },
      { name: 'Jukka H.', location: 'Raisio', text: 'Set up our entire smart home system including cameras and automations. Very thorough, explained everything clearly. Will definitely use again.', service: 'Smart Home + Cameras' },
      { name: 'Anna L.', location: 'Kaarina', text: 'Needed help with warranty claim for my phone. They handled all communication with the service center and kept me updated. Stress-free experience.', service: 'Warranty Support' },
      { name: 'Mikael P.', location: 'Turku', text: 'IT support for our small office — fast, reliable, and they clearly know what they\'re doing. Been our go-to tech team for 2 years now.', service: 'IT Support' },
      { name: 'Sofia V.', location: 'Naantali', text: 'Transferred all my data from old phone to new one without losing a single photo or contact. Quick, careful and very friendly service.', service: 'Data Transfer' },
    ],
  },

  coverage: {
    label: 'Service Area',
    headline: 'We cover',
    headlineAccent: 'your area',
    sub: "Based in Turku, we serve the entire surrounding region. If you're not sure if we cover your location — just ask.",
    areas: ['Turku (Åbo)', 'Raisio', 'Kaarina', 'Naantali', 'Lieto', 'Masku', 'Nousiainen', 'Rusko', 'Paimio', 'Sauvo'],
    hoursLabel: 'Working Hours',
    hoursVal: 'Mon–Fri: 8:00–20:00\nSat–Sun: 9:00–18:00',
    responseLabel: 'Quick Response',
    responseVal: 'We reply within minutes via WhatsApp',
    mapLabel: 'Turku Region',
  },

  cta: {
    badge: 'Available Today',
    headline: 'Ready to solve',
    headlineAccent: 'your tech problems?',
    sub: "Contact us now — we'll find the best solution for your situation and come to you at a convenient time.",
    ctaWhatsapp: 'Chat on WhatsApp',
    ctaCall: 'Call Us',
    contacts: [
      { label: 'Phone', val: '+358 000 000 000', sub: 'Mon–Sun, 8:00–20:00' },
      { label: 'Email', val: 'hello@fixarivan.fi', sub: 'We reply within 1 hour' },
      { label: 'Area', val: 'Turku & surroundings', sub: 'We come to you' },
    ],
  },

  forBusiness: {
    label: 'For Everyone',
    headline: 'For Home &',
    headlineAccent: 'Business',
    sub: "Whether you're a homeowner or a business — we have a solution for you.",
    home: {
      tag: 'For Homeowners',
      headline: 'Tech support at home',
      sub: 'No need to bring your devices anywhere. We come to you, solve the problem and leave everything working.',
      features: ['Device repair at home', 'Wi-Fi setup & optimization', 'Smart home installation', 'Security camera setup', 'Data transfer & backup', 'Electronics recycling pickup'],
      btn: 'Book for Home',
    },
    business: {
      tag: 'For Business',
      headline: 'IT solutions for business',
      sub: 'Keep your business running smoothly. We handle the tech so you can focus on what matters.',
      features: ['IT infrastructure support', 'Network setup & maintenance', 'Security camera systems', 'Workstation setup & repair', 'On-call technical support', 'Warranty assistance'],
      btn: 'Contact for Business',
    },
  },

  beforeAfter: {
    label: 'Real Results',
    headline: 'Before &',
    headlineAccent: 'After',
    sub: 'Real cases from our clients — problems solved, lives simplified.',
    beforeLabel: 'Before',
    afterLabel: 'After',
    cases: [
      {
        title: 'Slow laptop brought back to life',
        tag: 'Device Repair',
        before: 'Client had a 5-year-old laptop that took 10 minutes to boot and froze constantly during work.',
        after: 'Upgraded RAM, replaced HDD with SSD, cleaned the system. Boot time: under 20 seconds.',
      },
      {
        title: 'Dead Wi-Fi zones eliminated',
        tag: 'Wi-Fi & Network',
        before: 'Large apartment with zero signal in bedrooms and kitchen — constant dropouts during video calls.',
        after: 'Installed a mesh Wi-Fi system. Full coverage everywhere, stable 500 Mbps throughout the flat.',
      },
      {
        title: 'Smart home set up from scratch',
        tag: 'Smart Home',
        before: 'Client had 6 smart devices from different brands — none of them worked together.',
        after: 'Integrated everything into one ecosystem: voice control, automations and mobile app.',
      },
    ],
  },

  guarantee: {
    items: [
      { title: 'Warranty on every job', desc: 'All repairs and installations come with a written warranty. If anything goes wrong, we come back at no cost.' },
      { title: 'Same-day in most cases', desc: 'We keep common parts in stock. Most repairs and setups are completed in a single visit.' },
      { title: 'Transparent before we start', desc: "You'll know the exact cost before any work begins. No surprise invoices." },
      { title: 'We stay in touch', desc: 'Questions after the visit? Contact us anytime via WhatsApp — fast, personal responses.' },
    ],
  },

  footer: {
    tagline: 'Premium mobile tech service for home and business in Turku and surrounding regions.',
    sections: {
      services: 'Services',
      company: 'Company',
      contact: 'Contact',
    },
    companyLinks: ['How It Works', 'For Business', 'Reviews', 'Contact'],
    contactInfo: {
      area: 'Turku & surrounding regions',
      areaSub: 'We come to you',
      hours: 'Mon–Sun, 8:00–20:00',
      replyLabel: 'Quick reply via:',
      whatsapp: 'WhatsApp',
    },
    legal: {
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
  },

  common: {
    contactForm: {
      title: 'Request a Visit',
      namePlaceholder: 'Your name',
      phonePlaceholder: 'Phone number',
      messagePlaceholder: 'Describe your issue...',
      submit: 'Send Request',
      sending: 'Sending...',
      successTitle: 'Request sent!',
      successSub: "We'll contact you shortly.",
    },
    trustBar: {
      sameDay: 'Same day service',
      sameDaySub: 'In most cases',
      warranty: 'Warranty on work',
      warrantySub: 'Quality and confidence',
      fairPrices: 'Fair prices',
      fairPricesSub: 'No hidden fees',
      experience: '16+ years of experience',
      experienceSub: '100+ happy clients',
    },
  },
};
