import { Truck, Shield, Database, HardDrive, MessageCircle, CheckCircle, Activity, Smartphone, Cloud, Lock } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';

export default function DataRecoveryPage() {
  return (
    <ServicePageLayout
      label="Data Transfer"
      headline="Safe Data"
      headlineAccent="Transfer."
      subheadline="Photos, files, contacts and important data — moved safely to your new device."
      heroImage="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1000&dpr=1"
      heroLayout="split-dark"
      trustItems={[
        { icon: <Shield size={16} />, label: '100% Safe', sub: 'No data loss' },
        { icon: <Activity size={16} />, label: 'Fast Service', sub: 'Quick & reliable' },
        { icon: <Database size={16} />, label: 'Local Experts', sub: 'Turku area' },
      ]}
      whatWeOfferTitle="Common situations we help with"
      whatWeOfferItems={[
        { label: 'Phone Transfer', sub: 'Phone & Android migration', img: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
        { label: 'PC Migration', sub: 'Files, folders & settings transfer', img: 'https://images.pexels.com/photos/5082581/pexels-photo-5082581.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
        { label: 'SSD Upgrade', sub: 'Fast storage upgrade with safe migration', img: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
        { label: 'Backup & Recovery', sub: 'Protect & recover your important data', img: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
        { label: 'Bought a new phone?', sub: 'We transfer everything safely to your new device', img: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
        { label: 'Old device failing?', sub: 'We recover important data while it\'s still possible', img: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
      ]}
      processTitle="How it works"
      processSteps={[
        { number: '1', title: 'Bring or show the device', description: 'We check your device and data.', icon: <Smartphone size={16} /> },
        { number: '2', title: 'We check transfer options', description: 'We find the safest and fastest way.', icon: <Activity size={16} /> },
        { number: '3', title: 'Data is copied safely', description: 'We transfer everything carefully.', icon: <HardDrive size={16} /> },
        { number: '4', title: 'Your new device is ready', description: 'You get your data back — secure and complete.', icon: <CheckCircle size={16} /> },
      ]}
      pricing={[
        { title: 'Assessment', from: '€30', description: 'Drive evaluation & recovery estimate', icon: <Activity size={15} />, sameDay: true },
        { title: 'Logical Recovery', from: '€60', description: 'Deleted files, formatted drive', icon: <HardDrive size={15} />, popular: true },
        { title: 'OS Crash Recovery', from: '€70', description: 'Recover data after system failure', icon: <Database size={15} /> },
        { title: 'Phone Data Transfer', from: '€45', description: 'Full migration to new device', icon: <Smartphone size={15} />, sameDay: true },
        { title: 'Full Drive Recovery', from: '€120', description: 'Physical + logical combined', icon: <Shield size={15} />, note: 'Physical damage varies' },
      ]}
      formTitle="Request Data Transfer Help"
      formHeadline="We move your data. You keep your peace of mind."
      formSub="Safe & secure transfer. No data loss. Fast & professional service."
      formSidebarImage="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"
      formTrustPoints={['Safe & secure transfer', 'No data loss', 'Fast & professional service', 'Turku area — local support']}
      formServiceOptions={['Hard drive recovery', 'Phone data recovery', 'Deleted file recovery', 'Data transfer to new device', 'Cloud backup setup', 'Other']}
      formPlaceholder="Photos, files, contacts, messages, apps..."
      qualityPoints={[
        'No data access beyond what you authorise',
        'Recovery confirmed before you pay',
        'Non-destructive methods first',
        'Backup recommendations included',
      ]}
      showReview={{
        text: 'Thought I\'d lost 5 years of photos from a dead laptop. They recovered everything. I was so relieved.',
        author: 'Anna L.',
        location: 'Kaarina',
      }}
      relatedServices={[
        { label: 'Device Repair', href: '/services/device-repair' },
        { label: 'Laptop & PC Repair', href: '/services/laptop-repair' },
        { label: 'Diagnostics', href: '/services/diagnostics' },
      ]}
      bottomTrust={[
        { icon: <Truck size={15} />, label: 'Local & reliable', sub: 'Service in Turku area' },
        { icon: <Lock size={15} />, label: 'Transparent pricing', sub: 'No hidden costs' },
        { icon: <Cloud size={15} />, label: 'Professional equipment', sub: 'Safe & efficient tools' },
        { icon: <MessageCircle size={15} />, label: 'Customer support', sub: 'We are here to help' },
      ]}
    />
  );
}
