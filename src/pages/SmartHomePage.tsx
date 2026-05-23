import { Truck, Shield, Home, Cpu, MessageCircle, CheckCircle, Settings, Clock, Smartphone, Zap, Lock } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';

export default function SmartHomePage() {
  return (
    <ServicePageLayout
      label="Smart Home"
      headline="Smart Home."
      headlineAccent="Made simple."
      subheadline="We design and install smart home solutions that give you comfort, control and peace of mind."
      heroImage="https://images.pexels.com/photos/4050287/pexels-photo-4050287.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1000&dpr=1"
      heroLayout="split-dark"
      trustItems={[
        { icon: <Smartphone size={16} />, label: 'Everything in one app', sub: '' },
        { icon: <Clock size={16} />, label: 'Save time and energy', sub: '' },
        { icon: <Home size={16} />, label: 'Custom solutions for your home', sub: '' },
        { icon: <Cpu size={16} />, label: 'Professional installation', sub: '' },
      ]}
      whatWeOfferTitle="What we offer"
      whatWeOfferItems={[
        { label: 'Smart Irrigation', sub: 'Automated watering system that saves water', img: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
        { label: 'Smart Lighting', sub: 'Control lights, LED strips and scenes', img: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
        { label: 'Smart Sockets', sub: 'Control power, schedule appliances', img: 'https://images.pexels.com/photos/4050287/pexels-photo-4050287.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
        { label: 'Climate Control', sub: 'Smart thermostats and sensors', img: 'https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
        { label: 'Security & Access', sub: 'Cameras, smart locks and sensors', img: 'https://images.pexels.com/photos/3951355/pexels-photo-3951355.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
        { label: 'Smart Scenes', sub: 'One tap to control everything', img: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
      ]}
      processTitle="How it works"
      processSteps={[
        { number: '1', title: 'We listen', description: 'You tell us what you need and what matters most.', icon: <MessageCircle size={16} /> },
        { number: '2', title: 'We plan', description: 'We design the best solution for your home and budget.', icon: <Home size={16} /> },
        { number: '3', title: 'We install', description: 'Professional installation with clean and neat work.', icon: <Settings size={16} /> },
        { number: '4', title: 'You enjoy', description: 'Everything works together for your comfort.', icon: <CheckCircle size={16} /> },
      ]}
      pricing={[
        { title: 'Consultation', from: '€40', description: 'Smart home assessment & planning', icon: <MessageCircle size={15} /> },
        { title: 'Starter Package', from: '€80', description: 'Hub + 3 devices, fully configured', icon: <Zap size={15} />, popular: true },
        { title: 'Full Room Setup', from: '€120', description: 'Lighting, climate, security', icon: <Home size={15} /> },
        { title: 'Ecosystem Migration', from: '€90', description: 'Move between hubs or brands', icon: <Cpu size={15} /> },
        { title: 'Whole-Home Automation', from: '€250', description: 'Full property setup', icon: <Shield size={15} />, note: 'Hardware quoted separately' },
      ]}
      whyChooseItems={[
        { icon: <Clock size={15} />, label: '10+ years of experience', sub: '' },
        { icon: <Shield size={15} />, label: 'High quality components', sub: '' },
        { icon: <CheckCircle size={15} />, label: 'Clean & neat installation', sub: '' },
        { icon: <Truck size={15} />, label: 'Support after installation', sub: '' },
        { icon: <Home size={15} />, label: 'Local service in Turku area', sub: '' },
      ]}
      formTitle="Let's build your smart home"
      formHeadline="Let's build your smart home"
      formSub="Fill out the form and we'll get back to you with the best solution."
      formSidebarImage="https://images.pexels.com/photos/4050287/pexels-photo-4050287.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"
      formTrustPoints={['Quick response', 'No obligation', 'Custom solution for you']}
      formServiceOptions={['Smart speaker setup', 'Lighting automation', 'Thermostat / climate', 'Smart locks', 'Cross-brand integration', 'Full home setup', 'Other']}
      formPlaceholder="Size of the home, current system or anything else that helps..."
      qualityPoints={[
        'All major ecosystems supported',
        'Patient walkthrough included',
        'Privacy-first configuration',
        'Compatible with your existing Wi-Fi',
      ]}
      showReview={{
        text: 'Had devices from 3 brands that wouldn\'t talk to each other. They unified everything in an afternoon. Incredible.',
        author: 'Jukka H.',
        location: 'Raisio',
      }}
      relatedServices={[
        { label: 'Wi-Fi & Network Setup', href: '/services/wifi-network' },
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
