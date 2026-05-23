import { Truck, Shield, Camera, Eye, MessageCircle, CheckCircle, Settings, Lock, Smartphone, Zap } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';

export default function SecurityCamerasPage() {
  return (
    <ServicePageLayout
      label="Cameras & Security"
      headline="Smart Security."
      headlineAccent="Complete peace of mind."
      subheadline="Modern Wi-Fi cameras protect what matters most. Anywhere. Anytime. From your phone."
      heroImage="https://images.pexels.com/photos/3951355/pexels-photo-3951355.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1000&dpr=1"
      heroLayout="right"
      trustItems={[
        { icon: <Camera size={16} />, label: 'Dual-Lens', sub: 'Two directions in one camera' },
        { icon: <Shield size={16} />, label: 'AI Detection', sub: 'People, vehicles, pets & more' },
        { icon: <Smartphone size={16} />, label: 'Remote Access', sub: 'Watch live from anywhere' },
        { icon: <Eye size={16} />, label: 'Color Night Vision', sub: 'Clear images day and night' },
      ]}
      whatWeOfferTitle="Popular security setups"
      whatWeOfferItems={[
        { label: 'Outdoor Cameras', sub: 'Weatherproof, AI detection', img: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
        { label: 'Indoor Cameras', sub: 'Baby cam, pet monitoring', img: 'https://images.pexels.com/photos/3951355/pexels-photo-3951355.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
        { label: 'Doorbell Camera', sub: 'See who is at your door', img: 'https://images.pexels.com/photos/7107209/pexels-photo-7107209.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
        { label: 'NVR / DVR System', sub: '24/7 recording, local storage', img: 'https://images.pexels.com/photos/2225616/pexels-photo-2225616.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
        { label: 'Business CCTV', sub: 'Full perimeter coverage', img: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
        { label: 'Smart Locks', sub: 'Keyless entry, access control', img: 'https://images.pexels.com/photos/4218883/pexels-photo-4218883.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
      ]}
      commonProblemsTitle="Common problems we solve"
      commonProblems={[
        'No cameras covering key entry points',
        'Existing system hard to access remotely',
        'Poor night vision or image quality',
        'Cameras not sending motion alerts',
        'Old DVR system needs replacement',
        'Business needing employee safety setup',
      ]}
      commonProblemsImage="https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1"
      commonProblemsCTA={{
        text: 'Not sure what you need?',
        sub: 'We\'ll help you choose the right solution for your property.',
        link: '#request',
        linkText: 'Book a free consultation',
      }}
      processTitle="How it works"
      processSteps={[
        { number: '1', title: 'Security assessment', description: 'We discuss your property and recommend optimal camera placement.', icon: <MessageCircle size={16} /> },
        { number: '2', title: 'Professional installation', description: 'Cameras mounted, cabled and positioned for maximum coverage.', icon: <Truck size={16} /> },
        { number: '3', title: 'System configuration', description: 'Remote access, motion alerts and recording schedules setup.', icon: <Settings size={16} /> },
        { number: '4', title: 'Full walkthrough', description: 'We show you how to access footage and manage alerts.', icon: <CheckCircle size={16} /> },
      ]}
      pricing={[
        { title: 'Home Protection', from: '€349', description: '2 × dual-lens cameras, full yard & entrance coverage', icon: <Camera size={15} />, badge: 'Most Popular', popular: true },
        { title: 'Complete Home Security', from: '€649', description: 'Dual views for multiple areas of your property', icon: <Shield size={15} /> },
        { title: 'Small Business Setup', from: '€699', description: 'Employee & customer safety, full perimeter', icon: <Zap size={15} /> },
        { title: 'Single Camera', from: '€80', description: 'Install + full configuration', icon: <Eye size={15} />, sameDay: true },
        { title: 'System Expansion', from: '€60', description: 'Add cameras to existing setup', icon: <Settings size={15} />, note: 'Hardware extra' },
      ]}
      pricingNote="Installation price depends on the property, number of cameras, wiring, wall types and accessibility. We always provide a free consultation and a clear quote before starting."
      whyChooseItems={[
        { icon: <Camera size={15} />, label: '10+ years of experience', sub: '' },
        { icon: <Shield size={15} />, label: 'High quality components', sub: '' },
        { icon: <CheckCircle size={15} />, label: 'Clean & neat installation', sub: '' },
        { icon: <Truck size={15} />, label: 'Support after installation', sub: '' },
        { icon: <Smartphone size={15} />, label: 'Local service in Turku area', sub: '' },
      ]}
      formTitle="We install. You relax."
      formHeadline="We install. You relax."
      formSub="From consultation to installation — we take care of everything."
      formSidebarImage="https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"
      formTrustPoints={['Free consultation', 'Professional installation', 'Clean setup & configuration', 'Local service in Turku area']}
      formServiceOptions={['Home camera system', 'Business CCTV', 'Doorbell camera', 'Expand existing system', 'NVR / DVR setup', 'Other']}
      formPlaceholder="Tell us about your property, areas to monitor, or anything that helps..."
      qualityPoints={[
        'Security assessment before any purchase',
        'Neat cabling — hidden where possible',
        'Encrypted, private access only',
        'Mobile app setup & walkthrough',
      ]}
      showReview={{
        text: 'Installed 4 cameras around our house. Professional job, neat cabling, everything accessible on my phone. Great peace of mind.',
        author: 'Jukka H.',
        location: 'Naantali',
      }}
      relatedServices={[
        { label: 'Smart Home Setup', href: '/services/smart-home' },
        { label: 'Wi-Fi & Network', href: '/services/wifi-network' },
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
