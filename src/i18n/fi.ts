import type { Translations } from './types';

export const fi: Translations = {
  nav: {
    services: 'Palvelut',
    forBusiness: 'Yrityksille',
    reviews: 'Arvostelut',
    contact: 'Yhteystiedot',
    cta: 'WhatsApp-chat',
    serviceItems: {
      deviceRepair: 'Laitekorjaus',
      laptopRepair: 'Kannettavat & PC',
      phoneRepair: 'Puhelinkorjaus',
      wifi: 'Wi-Fi & Verkko',
      smartHome: 'Älykoti-asennus',
      cameras: 'Turvakamerat',
      itSupport: 'IT-tuki',
      dataRecovery: 'Tietojen palautus',
      diagnostics: 'Diagnoosi',
      warranty: 'Takuutuki',
      recycling: 'Elektroniikan kierrätys',
    },
  },

  hero: {
    badge: 'Tulemme. Korjaamme. Säästämme aikaasi.',
    headline1: 'Teknologia',
    headline2: 'toimii',
    headlineAccent: 'sinulle',
    sub: 'Mobiili teknologiapalvelu kotiin ja yrityksille. Ratkaisemme ongelmat nopeasti, ammattimaisesti ja takuulla — suoraan ovellesi.',
    ctaWhatsapp: 'Chatti WhatsAppissa',
    ctaVideo: 'Katso video',
    reviews: 'yli 100+ Google-arvostelua',
    availableToday: 'Saatavilla tänään',
    availableSub: 'Saman päivän käynnit Turussa',
    benefits: [
      { title: 'Tulemme luoksesi', sub: 'Kotiin, toimistoon tai muualle' },
      { title: 'Ammattimainen & luotettava', sub: 'Yli 10 vuoden kokemus' },
      { title: 'Nopeat ratkaisut', sub: 'Useimmat ongelmat ratkaistaan yhdellä käynnillä' },
      { title: 'Läpinäkyvä hinnoittelu', sub: 'Ei piilomaksuja, koskaan' },
      { title: 'Vastuullinen & kestävä', sub: 'Välitämme ympäristöstä' },
    ],
  },

  services: {
    label: 'Palvelumme',
    headline: 'Ratkaisemme tekniset ongelmat',
    headlineAccent: 'tasolla',
    headlineMid: 'kaikilla',
    sub: 'Laaja valikoima palveluja kotiin ja yrityksille. Wi-Fi-asennuksesta monimutkaisiin korjauksiin.',
    stats: [
      { val: '8+', label: 'Vuoden kokemus' },
      { val: '1500+', label: 'Tyytyväistä asiakasta' },
      { val: '5.0', label: 'Keskiarvosana' },
    ],
    learnMore: 'Lue lisää',
    ctaCard: {
      headline: 'Etkö löydä tarvitsemaasi?',
      sub: 'Kirjoita meille — löydämme parhaan ratkaisun tilanteeseesi.',
      btn: 'WhatsApp-chat',
    },
    items: [
      { title: 'Laitekorjaus', desc: 'Kannettavat, tietokoneet, puhelimet, konsolit ja muut' },
      { title: 'Wi-Fi & Verkko', desc: 'Verkkoasennus, signaalin vahvistus, ongelmanratkaisu' },
      { title: 'Älykoti-asennus', desc: 'Älylaitteiden asennus ja käyttöönotto' },
      { title: 'Turvakamerat', desc: 'CCTV-asennus ja konfigurointi' },
      { title: 'IT-tuki', desc: 'Yrityksen IT-tuki ja ongelmanratkaisu' },
      { title: 'Tietojen siirto', desc: 'Siirrä tietosi uuteen laitteeseen ilman häviötä' },
      { title: 'Diagnoosi', desc: 'Selvitämme ongelman juuren ja ehdotamme parhaan ratkaisun' },
      { title: 'Takuutuki', desc: 'Autamme takuutapauksissa ja huoltokeskuksissa' },
      { title: 'Elektroniikkakierrätys', desc: 'Otamme vanhat laitteet ja kierrätämme ne vastuullisesti' },
    ],
  },

  howItWorks: {
    label: 'Näin toimimme',
    headline: 'Yksinkertaista. Kätevää.',
    headlineAccent: 'Luotettavaa.',
    sub: 'Olemme tehneet prosessista mahdollisimman yksinkertaisen, jotta säästät aikaa ja saat parhaan tuloksen.',
    bullets: [
      { title: 'Nopea reagointi', sub: 'Saavumme sopivaan aikaan, työskentelemme ilman viivytyksiä.' },
      { title: 'Ammattimainen lähestymistapa', sub: 'Kokemus, välineet ja tarkkuus yksityiskohdissa.' },
      { title: 'Mukavuus sinulle', sub: 'Ratkaisemme ongelmat paikan päällä, ilman jonoja ja ylimääräisiä matkoja.' },
    ],
    ctaWhatsapp: 'WhatsApp-chat',
    ctaVideo: 'Katso video',
    steps: [
      { num: '01', title: 'Ota yhteyttä', sub: 'Kirjoita WhatsAppissa tai jätä pyyntö sivustolla.' },
      { num: '02', title: 'Tulemme luoksesi', sub: 'Saavumme sopivaan aikaan Turussa ja lähialueilla.' },
      { num: '03', title: 'Ratkaisemme ongelman', sub: 'Diagnoosi ja laadukas ratkaisu paikan päällä.' },
      { num: '04', title: 'Olet tyytyväinen', sub: 'Tarkistamme tuloksen ja annamme takuun työstä.' },
    ],
  },

  whyUs: {
    label: 'Miksi valita FixariVan',
    headline: 'Kokemus. Laatu.',
    headlineAccent: 'Luottamus.',
    sub: 'Yhdistämme ammattitaidon, modernit laitteet ja rehellisen lähestymistavan jokaiseen asiakkaaseen.',
    features: [
      { title: 'Kokemus & asiantuntemus', desc: 'Yli 8 vuotta teknisten ongelmien ratkaisemista — särötyneistä näytöistä kokonaiseen verkkoinfrastruktuuriin.' },
      { title: 'Ammattilaiskalusto', desc: 'Mobiilityöpajallamme on samat välineet kuin ammattilaiskorjaamolla.' },
      { title: 'Rehellinen & läpinäkyvä', desc: 'Reilut hinnat, selkeät selitykset, ei piilomaksuja. Koskaan.' },
      { title: 'Ympäristövastuu', desc: 'Otamme vanhat elektroniikkalaitteet ja kierrätämme ne vastuullisesti, jotta ne eivät päädy kaatopaikalle.' },
    ],
    stats: [
      { val: '8+', label: 'Vuoden kokemus' },
      { val: '1500+', label: 'Tyytyväistä asiakasta' },
      { val: '5.0', label: 'Keskiarvosana' },
      { val: 'Turku', label: 'ja lähialueet' },
    ],
    reviewQuote: '"Saapui nopeasti, selitti kaiken selkeästi ja korjasi sen."',
    reviewAuthor: 'Alex, Turku',
  },

  reviews: {
    label: 'Asiakasarvostelut',
    headline: 'Mitä asiakkaamme sanovat',
    sub: 'Oikeita arvosteluja oikeilta ihmisiltä.',
    items: [
      { name: 'Alex T.', location: 'Turku', text: 'Saapui tunnin sisällä, diagnosoi ongelman heti ja korjasi kannettavani paikan päällä. Rehellinen hinnoittelu, ei yllätyksiä. Suosittelen lämpimästi!', service: 'Laitekorjaus' },
      { name: 'Maria K.', location: 'Turku', text: 'Wi-Fi oli kamala uudessa asunnossa. He tulivat, asensivat mesh-järjestelmän ja nyt signaali on täydellinen kaikkialla. Todella ammattimaista.', service: 'Wi-Fi & Verkko' },
      { name: 'Jukka H.', location: 'Raisio', text: 'Asensivat koko älykotijärjestelmän kameroista automaatioihin. Erittäin perusteellinen, selitti kaiken selkeästi. Käytän varmasti uudelleen.', service: 'Älykoti + Kamerat' },
      { name: 'Anna L.', location: 'Kaarina', text: 'Tarvitsin apua puhelimen takuuvaatimuksessa. He hoitivat kaiken viestinnän huoltokeskuksen kanssa ja pitivät minut ajan tasalla. Stressitön kokemus.', service: 'Takuutuki' },
      { name: 'Mikael P.', location: 'Turku', text: 'IT-tukea pienelle toimistollemme — nopeaa, luotettavaa, ja he selvästi tietävät mitä tekevät. Olleet tekninen tiimimme jo 2 vuotta.', service: 'IT-tuki' },
      { name: 'Sofia V.', location: 'Naantali', text: 'Siirsi kaikki tietoni vanhasta puhelimesta uuteen menettämättä yhtään kuvaa tai yhteystietoa. Nopea, huolellinen ja erittäin ystävällinen palvelu.', service: 'Tiedonsiirto' },
    ],
  },

  coverage: {
    label: 'Palvelualue',
    headline: 'Palvelemme',
    headlineAccent: 'alueellasi',
    sub: 'Perustamme Turussa, palvelemme koko ympäröivää aluetta. Jos et ole varma, katammeko sijaintisi — kysy vain.',
    areas: ['Turku (Åbo)', 'Raisio', 'Kaarina', 'Naantali', 'Lieto', 'Masku', 'Nousiainen', 'Rusko', 'Paimio', 'Sauvo'],
    hoursLabel: 'Aukioloajat',
    hoursVal: 'Ma–Pe: 8:00–20:00\nLa–Su: 9:00–18:00',
    responseLabel: 'Nopea vastaus',
    responseVal: 'Vastaamme minuuteissa WhatsAppin kautta',
    mapLabel: 'Turun alue',
  },

  cta: {
    badge: 'Saatavilla tänään',
    headline: 'Valmis ratkaisemaan',
    headlineAccent: 'tekniset ongelmasi?',
    sub: 'Ota yhteyttä nyt — löydämme parhaan ratkaisun tilanteeseesi ja tulemme luoksesi sopivana aikana.',
    ctaWhatsapp: 'WhatsApp-chat',
    ctaCall: 'Soita meille',
    contacts: [
      { label: 'Puhelin', val: '+358 000 000 000', sub: 'Ma–Su, 8:00–20:00' },
      { label: 'Sähköposti', val: 'hello@fixarivan.fi', sub: 'Vastaamme tunnin sisällä' },
      { label: 'Alue', val: 'Turku ja ympäristö', sub: 'Tulemme luoksesi' },
    ],
  },

  forBusiness: {
    label: 'Kaikille',
    headline: 'Kotiin &',
    headlineAccent: 'yritykselle',
    sub: 'Oletpa kotitalouskäyttäjä tai yritys — meillä on ratkaisu sinulle.',
    home: {
      tag: 'Kotitalouksille',
      headline: 'Tekninen tuki kotiin',
      sub: 'Sinun ei tarvitse tuoda laitteitasi minnekään. Tulemme luoksesi, ratkaisemme ongelman ja jätämme kaiken toimivaksi.',
      features: ['Laitekorjaus kotona', 'Wi-Fi-asennus & optimointi', 'Älykoti-asennus', 'Turvakamerojen asennus', 'Tiedonsiirto & varmuuskopiointi', 'Elektroniikkakierrätyshaku'],
      btn: 'Varaa kotikäynti',
    },
    business: {
      tag: 'Yrityksille',
      headline: 'IT-ratkaisut yritykselle',
      sub: 'Pidä yrityksesi toiminnassa sujuvasti. Me hoidamme tekniikan, jotta sinä voit keskittyä tärkeimpään.',
      features: ['IT-infrastruktuurin tuki', 'Verkkoasennus & ylläpito', 'Turvakamerajärjestelmät', 'Työasemien asennus & korjaus', 'Puhelinpäivystys tekninen tuki', 'Takuuavustus'],
      btn: 'Ota yhteyttä',
    },
  },

  beforeAfter: {
    label: 'Todelliset tulokset',
    headline: 'Ennen &',
    headlineAccent: 'Jälkeen',
    sub: 'Oikeita tapauksia asiakkailtamme — ongelmia ratkaistu, elämää yksinkertaistettu.',
    beforeLabel: 'Ennen',
    afterLabel: 'Jälkeen',
    cases: [
      {
        title: 'Hidas kannettava elvytetty',
        tag: 'Laitekorjaus',
        before: 'Asiakkaalla oli 5-vuotias kannettava, jonka käynnistyminen kesti 10 minuuttia ja joka jäätyi jatkuvasti työn aikana.',
        after: 'Päivitimme RAM-muistin, vaihdoimme HDD:n SSD:ksi, siirsimme järjestelmän. Käynnistysaika: alle 20 sekuntia.',
      },
      {
        title: 'Kuolleet Wi-Fi-alueet poistettu',
        tag: 'Wi-Fi & Verkko',
        before: 'Suuri asunto, jossa ei ollut signaalia makuuhuoneissa ja keittiössä — jatkuvat katkokset videoneuvottelujen aikana.',
        after: 'Asensimme mesh-Wi-Fi-järjestelmän. Täydellinen peitto kaikkialla, vakaa 500 Mbps koko asunnossa.',
      },
      {
        title: 'Älykoti rakennettu tyhjästä',
        tag: 'Älykoti',
        before: 'Asiakkaalla oli 6 älylaitetta eri merkeiltä — mikään niistä ei toiminut yhdessä.',
        after: 'Integroimme kaiken yhteen ekosysteemiin: ääniohjausta, automaatioita ja mobiilisovellus.',
      },
    ],
  },

  guarantee: {
    items: [
      { title: 'Takuu jokaisesta työstä', desc: 'Kaikki korjaukset ja asennukset tulevat kirjallisella takuulla. Jos jokin menee pieleen, tulemme takaisin ilmaiseksi.' },
      { title: 'Saman päivän palvelu useimmiten', desc: 'Pidämme yleisimpiä osia varastossa. Useimmat korjaukset ja asennukset valmistuvat yhdellä käynnillä.' },
      { title: 'Läpinäkyvä ennen aloitusta', desc: 'Tiedät tarkan hinnan ennen töiden aloittamista. Ei yllättäviä laskuja.' },
      { title: 'Pysymme yhteydessä', desc: 'Kysymyksiä käynnin jälkeen? Ota yhteyttä milloin tahansa WhatsAppin kautta — nopeita, henkilökohtaisia vastauksia.' },
    ],
  },

  footer: {
    tagline: 'Ensiluokkainen mobiili teknologiapalvelu kotiin ja yrityksille Turussa ja lähialueilla.',
    sections: {
      services: 'Palvelut',
      company: 'Yritys',
      contact: 'Yhteystiedot',
    },
    companyLinks: ['Näin toimimme', 'Yrityksille', 'Arvostelut', 'Yhteystiedot'],
    contactInfo: {
      area: 'Turku ja lähialueet',
      areaSub: 'Tulemme luoksesi',
      hours: 'Ma–Su, 8:00–20:00',
      replyLabel: 'Nopea vastaus:',
      whatsapp: 'WhatsApp',
    },
    legal: {
      rights: 'Kaikki oikeudet pidätetään.',
      privacy: 'Tietosuojakäytäntö',
      terms: 'Käyttöehdot',
    },
  },

  common: {
    contactForm: {
      title: 'Pyydä käyntiä',
      namePlaceholder: 'Nimesi',
      phonePlaceholder: 'Puhelinnumero',
      messagePlaceholder: 'Kuvaile ongelmasi...',
      submit: 'Lähetä pyyntö',
      sending: 'Lähetetään...',
      successTitle: 'Pyyntö lähetetty!',
      successSub: 'Otamme sinuun pian yhteyttä.',
    },
    trustBar: {
      sameDay: 'Saman päivän palvelu',
      sameDaySub: 'Useimmissa tapauksissa',
      warranty: 'Takuu työstä',
      warrantySub: 'Laatu ja luottamus',
      fairPrices: 'Reilut hinnat',
      fairPricesSub: 'Ei piilomaksuja',
      experience: '16+ vuoden kokemus',
      experienceSub: '100+ tyytyväistä asiakasta',
    },
  },
};
