import { Truck, Shield, Clock, Headphones, MessageCircle, CheckCircle, Settings, Wifi, Monitor, Printer, Cloud, Database, Lock } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';

export default function ITSupportPage() {
  return (
    <ServicePageLayout
      label="IT Support"
      headline="IT Support."
      headlineAccent="Fast. Reliable. Local."
      subheadline="We solve technical problems so you can focus on what matters. For homes, remote workers and small businesses."
      heroImage="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1000&dpr=1"
      heroLayout="right"
      trustItems={[
        { icon: <Clock size={16} />, label: 'Fast response', sub: 'Quick help when you need it' },
        { icon: <Shield size={16} />, label: 'Reliable solutions', sub: 'We fix it right the first time' },
        { icon: <Monitor size={16} />, label: 'For home & office', sub: 'Support tailored to your setup' },
        { icon: <Lock size={16} />, label: 'Secure & trusted', sub: 'Your data and privacy matter' },
      ]}
      whatWeOfferTitle="What we help with"
      whatWeOfferItems={[
        { label: 'Wi-Fi & Networking', sub: 'Wi-Fi problems, routers, dead zones, network setup and optimization', img: 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
        { label: 'Devices & Performance', sub: 'Slow computers, system cleanup, updates and performance tuning', img: 'https://images.pexels.com/photos/5082581/pexels-photo-5082581.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
        { label: 'Printers & Peripherals', sub: 'Printer setup, scanning, drivers, and device connection issues', img: 'https://images.pexels.com/photos/4050287/pexels-photo-4050287.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
        { label: 'Software Support', sub: 'Software installation, errors, configuration and troubleshooting', img: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
        { label: 'Data & Backup', sub: 'Backups, data recovery, file management and cloud setup', img: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
        { label: 'Workplace Setup', sub: 'New office setup, equipment installation and workspace optimization', img: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
      ]}
      commonProblemsTitle="Common problems we solve"
      commonProblems={[
        'Computer running very slowly',
        'Wi-Fi not working or dropping',
        'Printer won\'t connect or print',
        'Software errors and crashes',
        'Lost or deleted important files',
        'Email not working correctly',
        'Virus or malware infection',
        'Setting up new device or computer',
      ]}
      commonProblemsImage="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1"
      commonProblemsCTA={{
        text: 'Remote or Onsite Support',
        sub: 'Some issues can be solved remotely in minutes. For everything else — we come to you.',
        link: '#request',
        linkText: 'Request support',
      }}
      processTitle="How we work"
      processSteps={[
        { number: '1', title: 'You reach out', description: 'Tell us what\'s happening.', icon: <MessageCircle size={16} /> },
        { number: '2', title: 'We diagnose', description: 'We find the issue fast.', icon: <Settings size={16} /> },
        { number: '3', title: 'We fix it', description: 'Onsite or remotely — you choose.', icon: <Headphones size={16} /> },
        { number: '4', title: 'You\'re good', description: 'Everything works smoothly.', icon: <CheckCircle size={16} /> },
      ]}
      pricing={[
        { title: 'Hourly Support', from: '€65', description: 'On-site or remote assistance', icon: <Headphones size={15} />, sameDay: true },
        { title: 'Workstation Setup', from: '€80', description: 'Device, accounts & apps', icon: <Monitor size={15} />, sameDay: true },
        { title: 'Network Setup', from: '€120', description: 'Business-grade infrastructure', icon: <Wifi size={15} />, popular: true },
        { title: 'Monthly Retainer', from: '€200', description: '4 h/month priority support', icon: <Cloud size={15} />, note: '3 month minimum' },
        { title: 'IT Infrastructure Audit', from: '€150', description: 'Full review & report', icon: <Database size={15} /> },
      ]}
      whyChooseItems={[
        { icon: <Truck size={15} />, label: '10+ years of experience', sub: '' },
        { icon: <Shield size={15} />, label: 'High quality components', sub: '' },
        { icon: <Printer size={15} />, label: 'Clean & neat installation', sub: '' },
        { icon: <Clock size={15} />, label: 'Support after installation', sub: '' },
        { icon: <Monitor size={15} />, label: 'Local service in Turku area', sub: '' },
      ]}
      formTitle="Need IT help? We're here."
      formHeadline="Need IT help? We're here."
      formSub="Fast response, clear communication and solutions that last."
      formSidebarImage="https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"
      formTrustPoints={['No fix — no charge*', 'Transparent pricing', 'Local service in Turku area']}
      formServiceOptions={['Immediate IT issue', 'Workstation setup', 'Network infrastructure', 'Cloud & backup', 'Cybersecurity', 'Monthly support plan', 'Other']}
      formPlaceholder="Describe the problem, devices, error messages or anything that helps..."
      qualityPoints={[
        'Rapid response to business-critical issues',
        'Proactive maintenance reduces downtime',
        'Security-first approach to every setup',
        'Flexible retainer or ad-hoc support',
      ]}
      showReview={{
        text: 'Our office network was a mess. They restructured everything and set up proper security. Best IT investment we\'ve made.',
        author: 'Mikael P.',
        location: 'Turku',
      }}
      relatedServices={[
        { label: 'Wi-Fi & Network', href: '/services/wifi-network' },
        { label: 'Security Cameras', href: '/services/security-cameras' },
        { label: 'Laptop & PC Repair', href: '/services/laptop-repair' },
        { label: 'Data Recovery', href: '/services/data-recovery' },
      ]}
      bottomTrust={[
        { icon: <Truck size={15} />, label: 'Local service in Turku area', sub: 'We come to you' },
        { icon: <Lock size={15} />, label: 'Transparent pricing', sub: 'No hidden costs' },
        { icon: <Shield size={15} />, label: 'Professional equipment', sub: 'Safe & efficient tools' },
        { icon: <MessageCircle size={15} />, label: 'Customer support', sub: 'We are here to help' },
      ]}
    />
  );
}
