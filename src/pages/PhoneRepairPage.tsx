import { Truck, Shield, Clock, ThumbsUp, MessageCircle, Wrench, CheckCircle, Lock, Smartphone } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';

export default function PhoneRepairPage() {
  return (
    <ServicePageLayout
      label="Phone Repair"
      headline="Screen cracked?"
      headlineAccent="Fixed today, at your door."
      subheadline="Professional smartphone repair on-site. iPhone, Samsung, Google Pixel and more — no need to leave home or wait days at a store."
      heroImage="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1000&dpr=1"
      heroLayout="right"
      trustItems={[
        { icon: <Clock size={16} />, label: 'Often under 1 hour', sub: 'Fast repair on-site' },
        { icon: <Shield size={16} />, label: 'Warranty on parts', sub: 'OEM quality' },
        { icon: <Truck size={16} />, label: 'No shop visit needed', sub: 'We come to you' },
        { icon: <ThumbsUp size={16} />, label: 'Price confirmed upfront', sub: 'No surprises' },
      ]}
      whatWeOfferTitle="Phone Brands We Repair"
      whatWeOfferItems={[
        { label: 'iPhone', sub: 'All models incl. Pro Max', img: 'https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
        { label: 'Samsung', sub: 'Galaxy S, A, Z series', img: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
        { label: 'Google Pixel', sub: 'All Pixel models', img: 'https://images.pexels.com/photos/1440722/pexels-photo-1440722.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
        { label: 'Huawei', sub: 'P & Mate series', img: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
        { label: 'OnePlus', sub: 'All OnePlus models', img: 'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
        { label: 'Nokia & Sony', sub: '+ other Android brands', img: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
      ]}
      commonProblemsTitle="Common problems we solve"
      commonProblems={[
        'Cracked or shattered screen',
        'Battery draining too fast',
        'Charging port not working',
        'Rear glass cracked',
        'Camera not working properly',
        'Water damage',
        'Speaker or microphone issues',
        'Software issues & factory reset',
      ]}
      commonProblemsImage="https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1"
      commonProblemsCTA={{
        text: 'Not sure if it can be fixed?',
        sub: 'Contact us and we\'ll assess the damage. Free initial consultation.',
        link: '#request',
        linkText: 'Get a free quote',
      }}
      processTitle="How it works"
      processSteps={[
        { number: '1', title: 'Tell us the problem', description: 'Phone model and what\'s broken. We confirm parts availability.', icon: <MessageCircle size={16} /> },
        { number: '2', title: 'We arrive ready', description: 'We bring the right replacement parts to your location.', icon: <Truck size={16} /> },
        { number: '3', title: 'Repaired on the spot', description: 'Most screen and battery jobs are done in under an hour.', icon: <Wrench size={16} /> },
        { number: '4', title: 'Phone as good as new', description: 'Full function test before we leave. Parts warranty included.', icon: <CheckCircle size={16} /> },
      ]}
      pricing={[
        { title: 'Screen Replacement', from: '€60', description: 'iPhone & Android displays', icon: <Smartphone size={15} />, popular: true, sameDay: true },
        { title: 'Battery Replacement', from: '€40', description: 'All brands, OEM quality', icon: <Shield size={15} />, sameDay: true },
        { title: 'Charging Port', from: '€45', description: 'USB-C, Lightning & micro-USB', icon: <Lock size={15} />, sameDay: true },
        { title: 'Back Glass', from: '€50', description: 'iPhone & Samsung models', icon: <ThumbsUp size={15} /> },
        { title: 'Water Damage', from: '€55', description: 'Diagnostics + ultrasonic clean', icon: <Clock size={15} />, note: 'Includes visit' },
      ]}
      formTitle="Book a Phone Repair"
      formHeadline="Fast repair. At your door."
      formSub="Most repairs completed in under 1 hour on-site. OEM quality parts with warranty."
      formSidebarImage="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"
      formTrustPoints={['OEM-quality replacement parts', 'Warranty on screen & battery', 'No personal data accessed', 'Same-day repair in most cases']}
      formServiceOptions={['Screen replacement', 'Battery replacement', 'Charging port', 'Water damage', 'Camera repair', 'Software issue', 'Other']}
      formPlaceholder="Phone brand, model, and what's wrong with it..."
      qualityPoints={[
        'OEM-quality replacement parts used',
        'Warranty on screen & battery replacements',
        'No personal data accessed',
        'Same-day repair in most cases',
      ]}
      showReview={{
        text: 'iPhone screen replaced at my home in under an hour. Quality is identical to the original. Brilliant service.',
        author: 'Sofia V.',
        location: 'Kaarina',
      }}
      relatedServices={[
        { label: 'Device Repair', href: '/services/device-repair' },
        { label: 'Data Recovery & Transfer', href: '/services/data-recovery' },
        { label: 'Diagnostics', href: '/services/diagnostics' },
      ]}
    />
  );
}
