export interface BenefitItem {
  title: string;
  sub: string;
}

export interface StatItem {
  val: string;
  label: string;
}

export interface ServiceItem {
  title: string;
  desc: string;
}

export interface StepItem {
  num: string;
  title: string;
  sub: string;
}

export interface BulletItem {
  title: string;
  sub: string;
}

export interface FeatureItem {
  title: string;
  desc: string;
}

export interface ReviewItem {
  name: string;
  location: string;
  text: string;
  service: string;
}

export interface ContactItem {
  label: string;
  val: string;
  sub: string;
}

export interface CaseItem {
  title: string;
  tag: string;
  before: string;
  after: string;
}

export interface GuaranteeItem {
  title: string;
  desc: string;
}

export interface Translations {
  nav: {
    services: string;
    forBusiness: string;
    reviews: string;
    contact: string;
    cta: string;
    serviceItems: {
      deviceRepair: string;
      laptopRepair: string;
      phoneRepair: string;
      wifi: string;
      smartHome: string;
      cameras: string;
      itSupport: string;
      dataRecovery: string;
      diagnostics: string;
      warranty: string;
      recycling: string;
    };
  };
  hero: {
    badge: string;
    headline1: string;
    headline2: string;
    headlineAccent: string;
    sub: string;
    ctaWhatsapp: string;
    ctaVideo: string;
    reviews: string;
    availableToday: string;
    availableSub: string;
    benefits: BenefitItem[];
  };
  services: {
    label: string;
    headline: string;
    headlineAccent: string;
    headlineMid: string;
    sub: string;
    stats: StatItem[];
    learnMore: string;
    ctaCard: {
      headline: string;
      sub: string;
      btn: string;
    };
    items: ServiceItem[];
  };
  howItWorks: {
    label: string;
    headline: string;
    headlineAccent: string;
    sub: string;
    bullets: BulletItem[];
    ctaWhatsapp: string;
    ctaVideo: string;
    steps: StepItem[];
  };
  whyUs: {
    label: string;
    headline: string;
    headlineAccent: string;
    sub: string;
    features: FeatureItem[];
    stats: StatItem[];
    reviewQuote: string;
    reviewAuthor: string;
  };
  reviews: {
    label: string;
    headline: string;
    sub: string;
    items: ReviewItem[];
  };
  coverage: {
    label: string;
    headline: string;
    headlineAccent: string;
    sub: string;
    areas: string[];
    hoursLabel: string;
    hoursVal: string;
    responseLabel: string;
    responseVal: string;
    mapLabel: string;
  };
  cta: {
    badge: string;
    headline: string;
    headlineAccent: string;
    sub: string;
    ctaWhatsapp: string;
    ctaCall: string;
    contacts: ContactItem[];
  };
  forBusiness: {
    label: string;
    headline: string;
    headlineAccent: string;
    sub: string;
    home: {
      tag: string;
      headline: string;
      sub: string;
      features: string[];
      btn: string;
    };
    business: {
      tag: string;
      headline: string;
      sub: string;
      features: string[];
      btn: string;
    };
  };
  beforeAfter: {
    label: string;
    headline: string;
    headlineAccent: string;
    sub: string;
    beforeLabel: string;
    afterLabel: string;
    cases: CaseItem[];
  };
  guarantee: {
    items: GuaranteeItem[];
  };
  footer: {
    tagline: string;
    sections: {
      services: string;
      company: string;
      contact: string;
    };
    companyLinks: string[];
    contactInfo: {
      area: string;
      areaSub: string;
      hours: string;
      replyLabel: string;
      whatsapp: string;
    };
    legal: {
      rights: string;
      privacy: string;
      terms: string;
    };
  };
  common: {
    contactForm: {
      title: string;
      namePlaceholder: string;
      phonePlaceholder: string;
      messagePlaceholder: string;
      submit: string;
      sending: string;
      successTitle: string;
      successSub: string;
    };
    trustBar: {
      sameDay: string;
      sameDaySub: string;
      warranty: string;
      warrantySub: string;
      fairPrices: string;
      fairPricesSub: string;
      experience: string;
      experienceSub: string;
    };
  };
}
