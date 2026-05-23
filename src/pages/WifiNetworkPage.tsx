import { Truck, Shield, Clock, Wifi, MessageCircle, CheckCircle, Settings, Signal, Lock, Cpu } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';

export default function WifiNetworkPage() {
  return (
    <ServicePageLayout
      label="Internet & Wi-Fi"
      headline="Internet & Wi-Fi"
      headlineAccent="that just works."
      subheadline="We set up fast, stable and secure networks for your home or business."
      heroImage="https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1000&dpr=1"
      heroLayout="right"
      trustItems={[
        { icon: <Wifi size={16} />, label: 'Better coverage everywhere', sub: '' },
        { icon: <Signal size={16} />, label: 'Faster & more reliable internet', sub: '' },
        { icon: <Shield size={16} />, label: 'Secure network setup', sub: '' },
        { icon: <Cpu size={16} />, label: 'Professional installation', sub: '' },
      ]}
      whatWeOfferTitle="What we do"
      whatWeOfferItems={[
        { label: 'Wi-Fi Setup & Optimization', sub: 'Improve coverage and signal strength', img: 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
        { label: 'Access Point Installation', sub: 'Perfect Wi-Fi in every room', img: 'https://images.pexels.com/photos/4218883/pexels-photo-4218883.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
        { label: 'Mesh Wi-Fi Systems', sub: 'Seamless Wi-Fi throughout your home', img: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
        { label: 'Wired Network Setup', sub: 'Stable and fast connections for work or gaming', img: 'https://images.pexels.com/photos/2225616/pexels-photo-2225616.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
        { label: 'Network Security', sub: 'Protect your network and devices', img: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
        { label: 'Business Networks', sub: 'Scalable office infrastructure', img: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
      ]}
      commonProblemsTitle="Common problems we solve"
      commonProblems={[
        'Weak Wi-Fi signal',
        'Router not configured properly',
        'Dead zones in the home',
        'Wi-Fi not reaching all rooms',
        'Slow internet speed',
        'Internet drops or disconnects',
      ]}
      commonProblemsImage="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1"
      commonProblemsCTA={{
        text: 'Not sure what\'s wrong?',
        sub: 'We\'ll run a full check and find the best solution for your home or business.',
        link: '#request',
        linkText: 'Book a diagnostics',
      }}
      processTitle="How it works"
      processSteps={[
        { number: '1', title: 'You contact us', description: 'Tell us about your internet issue.', icon: <MessageCircle size={16} /> },
        { number: '2', title: 'We analyze', description: 'We check your setup and find the problem.', icon: <Wifi size={16} /> },
        { number: '3', title: 'We set it up', description: 'We install and configure the best solution.', icon: <Settings size={16} /> },
        { number: '4', title: 'You enjoy', description: 'Strong, stable and fast connection everywhere.', icon: <CheckCircle size={16} /> },
      ]}
      pricing={[
        { title: 'Wi-Fi Optimization', from: '€60', description: 'Better coverage and signal strength', icon: <Wifi size={15} />, sameDay: true },
        { title: 'Access Point Install', from: '€90', description: 'Professional installation and configuration', icon: <Signal size={15} />, popular: true },
        { title: 'Mesh Wi-Fi System', from: '€150', description: 'Setup and optimization of mesh networks', icon: <Cpu size={15} /> },
        { title: 'Wired Network Setup', from: '€80', description: 'LAN setup for home or business', icon: <Shield size={15} /> },
        { title: 'Internet Troubleshooting', from: '€60', description: 'Diagnostics and problem resolution', icon: <Settings size={15} />, sameDay: true },
      ]}
      pricingNote="Installation price depends on property size and complexity. Free quote before starting."
      whyChooseItems={[
        { icon: <Clock size={15} />, label: '10+ years of experience', sub: '' },
        { icon: <Shield size={15} />, label: 'High quality components', sub: '' },
        { icon: <CheckCircle size={15} />, label: 'Clean & neat installation', sub: '' },
        { icon: <Truck size={15} />, label: 'Local service in Turku area', sub: '' },
      ]}
      formTitle="Need better Wi-Fi?"
      formHeadline="Need better Wi-Fi?"
      formSub="Fill out the form and we'll take care of it."
      formSidebarImage="https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"
      formTrustPoints={['Quick response', 'No obligation', 'We come to you', 'Transparent pricing']}
      formServiceOptions={['Router setup', 'Mesh Wi-Fi installation', 'Weak signal fix', 'Network security', 'Smart home connectivity', 'Business network', 'Other']}
      formPlaceholder="Property size, current router model, specific issues or goals..."
      qualityPoints={[
        'We test every room before leaving',
        'Network secured and optimised',
        'Works with all Finnish ISPs',
        'Smart home integration ready',
      ]}
      showReview={{
        text: 'Mesh Wi-Fi throughout our 120m² apartment. Full signal in every corner now. No more video call drops.',
        author: 'Maria K.',
        location: 'Turku',
      }}
      relatedServices={[
        { label: 'Smart Home Setup', href: '/services/smart-home' },
        { label: 'Security Cameras', href: '/services/security-cameras' },
        { label: 'IT Support', href: '/services/it-support' },
      ]}
      bottomTrust={[
        { icon: <Truck size={15} />, label: 'Local service in Turku area', sub: 'We come to you' },
        { icon: <Lock size={15} />, label: 'Transparent pricing', sub: 'No hidden costs' },
        { icon: <Shield size={15} />, label: 'High quality equipment', sub: 'Trusted brands' },
        { icon: <MessageCircle size={15} />, label: 'Support after installation', sub: 'We are here to help' },
      ]}
    />
  );
}
