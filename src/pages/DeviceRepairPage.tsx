import { Truck, Shield, Clock, ThumbsUp, MessageCircle, Wrench, CheckCircle, Lock } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';

export default function DeviceRepairPage() {
  return (
    <ServicePageLayout
      label="Device Repair"
      headline="We fix your tech."
      headlineAccent="You get your time back."
      subheadline="On-site repair for laptops, phones, consoles and other devices — at your home or office. No queues, no drop-offs, no waiting."
      heroImage="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1000&dpr=1"
      heroLayout="right"
      trustItems={[
        { icon: <Truck size={16} />, label: 'We come to you', sub: 'Home or office' },
        { icon: <Shield size={16} />, label: 'Warranty on work', sub: 'Parts & labour' },
        { icon: <Clock size={16} />, label: 'Same-day visits', sub: 'Fast response' },
        { icon: <ThumbsUp size={16} />, label: 'Honest pricing', sub: 'No hidden fees' },
      ]}
      whatWeOfferTitle="Devices We Work With"
      whatWeOfferItems={[
        { label: 'Laptops', sub: 'All brands & models', img: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
        { label: 'Desktops', sub: 'PC & Workstations', img: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
        { label: 'iPhones', sub: 'All generations', img: 'https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
        { label: 'Android Phones', sub: 'Samsung, Google & more', img: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
        { label: 'Consoles', sub: 'PlayStation, Xbox', img: 'https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
        { label: 'MacBooks', sub: 'macOS hardware', img: 'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
      ]}
      commonProblemsTitle="Common problems we solve"
      commonProblems={[
        "Device won't turn on",
        'Slow performance & overheating',
        'Broken or cracked screen',
        'Liquid damage recovery',
        'Wi-Fi or connection issues',
        'Battery problems & replacement',
        'Blue screen / system errors',
        'Virus & malware removal',
      ]}
      commonProblemsImage="https://images.pexels.com/photos/5082581/pexels-photo-5082581.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1"
      commonProblemsCTA={{
        text: 'Not sure what\'s wrong?',
        sub: 'We run a full check and find the best solution. Diagnostics from €25.',
        link: '#request',
        linkText: 'Book a diagnostics',
      }}
      processTitle="How it works"
      processSteps={[
        { number: '1', title: 'You contact us', description: 'Tell us what\'s wrong. We respond within minutes.', icon: <MessageCircle size={16} /> },
        { number: '2', title: 'We come to you', description: 'We arrive at your location fully equipped.', icon: <Truck size={16} /> },
        { number: '3', title: 'We fix the problem', description: 'Professional repair on the spot.', icon: <Wrench size={16} /> },
        { number: '4', title: 'You enjoy your device', description: 'Everything tested. Written warranty on every repair.', icon: <CheckCircle size={16} /> },
      ]}
      pricing={[
        { title: 'Diagnostics', from: '€25', description: 'Full check & problem detection', icon: <Lock size={15} />, sameDay: true },
        { title: 'Screen Replacement', from: '€60', description: 'Phones, tablets and laptops', icon: <Shield size={15} />, popular: true, sameDay: true },
        { title: 'SSD Upgrade', from: '€75', description: 'Speed up your laptop instantly', icon: <ThumbsUp size={15} /> },
        { title: 'OS Reinstall', from: '€50', description: 'Windows or macOS setup & config', icon: <Clock size={15} />, sameDay: true },
        { title: 'Data Backup', from: '€50', description: 'Secure backup & transfer', icon: <Truck size={15} />, note: 'Includes visit' },
      ]}
      showWorkshop
      formTitle="Request a Repair"
      formHeadline="We fix it at your door."
      formSub="Most repairs completed in a single visit. Warranty on all work."
      formSidebarImage="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"
      formTrustPoints={['Warranty on all work', 'Professional tools & quality parts', 'Clear pricing before we start', 'Data handled with full care']}
      formServiceOptions={['Laptop repair', 'Desktop repair', 'Phone repair', 'Tablet repair', 'Console repair', 'MacBook repair', 'Other']}
      formPlaceholder="Device type, brand, model, and what's happening..."
      qualityPoints={[
        'Warranty on all work performed',
        'Professional tools & quality parts',
        'Clear pricing before we start',
        '10+ years of hands-on experience',
      ]}
      showReview={{
        text: 'My laptop was completely dead. They arrived in 2 hours and fixed it on the spot. Absolutely brilliant service.',
        author: 'Mikael P.',
        location: 'Turku',
      }}
      relatedServices={[
        { label: 'Laptop & PC Repair', href: '/services/laptop-repair' },
        { label: 'Phone Repair', href: '/services/phone-repair' },
        { label: 'Data Recovery', href: '/services/data-recovery' },
        { label: 'Diagnostics', href: '/services/diagnostics' },
      ]}
    />
  );
}
