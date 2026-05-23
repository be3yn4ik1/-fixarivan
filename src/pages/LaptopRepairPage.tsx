import { Truck, Shield, Clock, ThumbsUp, MessageCircle, CheckCircle, Activity, Lock, Cpu } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';

export default function LaptopRepairPage() {
  return (
    <ServicePageLayout
      label="Laptop & PC Repair"
      headline="Your computer,"
      headlineAccent="running at full speed."
      subheadline="On-site laptop and desktop repair for any brand. Hardware replacements, software fixes, upgrades — performed at your location with no downtime."
      heroImage="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1000&dpr=1"
      heroLayout="split-dark"
      trustItems={[
        { icon: <Truck size={16} />, label: 'No drop-off needed', sub: 'We come to you' },
        { icon: <Shield size={16} />, label: 'Warranty included', sub: 'Parts & labour' },
        { icon: <Clock size={16} />, label: 'Same-day in most cases', sub: 'Fast turnaround' },
        { icon: <ThumbsUp size={16} />, label: 'Quote before we start', sub: 'Fair pricing' },
      ]}
      whatWeOfferTitle="Brands We Service"
      whatWeOfferItems={[
        { label: 'Apple MacBook', sub: 'Air, Pro, all models', img: 'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
        { label: 'Dell', sub: 'XPS, Inspiron, Vostro', img: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
        { label: 'Lenovo', sub: 'ThinkPad, IdeaPad', img: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
        { label: 'HP', sub: 'EliteBook, Pavilion', img: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
        { label: 'ASUS', sub: 'ZenBook, ROG series', img: 'https://images.pexels.com/photos/3766201/pexels-photo-3766201.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
        { label: 'Other brands', sub: 'Acer, MSI & more', img: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
      ]}
      commonProblemsTitle="Common problems we solve"
      commonProblems={[
        'Slow startup & poor performance',
        'Overheating & fan issues',
        'Broken screen replacement',
        'Keyboard & trackpad issues',
        'Battery replacement',
        'SSD / HDD upgrade',
        'Windows / macOS reinstall',
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
        { number: '1', title: 'Describe the issue', description: 'Tell us what\'s happening — we\'ll prepare the right tools and parts.', icon: <MessageCircle size={16} /> },
        { number: '2', title: 'We arrive equipped', description: 'Our mobile workshop is stocked for most common repairs and upgrades.', icon: <Truck size={16} /> },
        { number: '3', title: 'Diagnose & repair', description: 'We identify the root cause and fix it on the spot, professionally.', icon: <Activity size={16} /> },
        { number: '4', title: 'Verified & working', description: 'We test everything before we leave. Written warranty included.', icon: <CheckCircle size={16} /> },
      ]}
      pricing={[
        { title: 'Diagnostics', from: '€25', description: 'Full hardware & software check', icon: <Activity size={15} />, sameDay: true },
        { title: 'SSD Upgrade', from: '€75', description: 'Install + OS migration', icon: <Cpu size={15} />, popular: true, sameDay: true },
        { title: 'Screen Replacement', from: '€90', description: 'All laptop brands', icon: <Shield size={15} />, sameDay: true },
        { title: 'OS Reinstall', from: '€50', description: 'Windows or macOS setup', icon: <Lock size={15} /> },
        { title: 'Thermal Service', from: '€60', description: 'Deep clean + thermal paste', icon: <Clock size={15} />, note: 'All include visit' },
      ]}
      showWorkshop
      formTitle="Book a Laptop Repair"
      formHeadline="We fix it. You keep your data."
      formSub="Fast on-site repair with warranty on all parts and labour."
      formSidebarImage="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"
      formTrustPoints={['No fix — no charge', 'OEM quality parts', 'Warranty on all repairs', 'Local service in Turku area']}
      formServiceOptions={['Laptop repair', 'Desktop / PC repair', 'MacBook repair', 'SSD / RAM upgrade', 'Screen replacement', 'Virus removal', 'Other']}
      formPlaceholder="Brand, model, and what's happening with the device..."
      qualityPoints={[
        'OEM or equivalent quality parts',
        'Warranty on all repairs',
        'Data safety throughout the process',
        'Transparent pricing before work starts',
      ]}
      showReview={{
        text: 'Replaced the SSD in my MacBook Pro. Fast, clean and half the price of an Apple store. Highly recommend.',
        author: 'Jukka H.',
        location: 'Turku',
      }}
      relatedServices={[
        { label: 'Device Repair', href: '/services/device-repair' },
        { label: 'Data Recovery', href: '/services/data-recovery' },
        { label: 'Diagnostics', href: '/services/diagnostics' },
        { label: 'IT Support', href: '/services/it-support' },
      ]}
    />
  );
}
