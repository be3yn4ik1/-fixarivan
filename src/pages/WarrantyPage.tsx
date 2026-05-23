import { useState } from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, FileCheck, Clock, User, Search, FileText, Building2, CheckCircle, MapPin, BadgeDollarSign, Headphones, Zap, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/ui/Breadcrumb';

const processSteps = [
  { icon: Search, num: '1', title: 'We diagnose', sub: 'We check your device and identify the issue.' },
  { icon: FileText, num: '2', title: 'We prepare', sub: 'We create a proper report and gather the required info.' },
  { icon: Building2, num: '3', title: 'We submit', sub: 'We communicate with the warranty center for you.' },
  { icon: CheckCircle, num: '4', title: 'You\'re covered', sub: 'We help you get approval for repair or replacement.' },
];

const commonWarrantyIssues = [
  {
    img: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400&h=280&dpr=1',
    icon: ShieldCheck,
    label: 'Device not accepted',
    desc: 'We make sure your device meets all warranty requirements.',
  },
  {
    img: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400&h=280&dpr=1',
    icon: FileCheck,
    label: 'Missing documents',
    desc: 'We help you prepare the right documents and proof of purchase.',
  },
  {
    img: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=280&dpr=1',
    icon: Search,
    label: '"Physical damage" claims',
    desc: 'We verify the real cause of the issue and help you explain it correctly.',
  },
  {
    img: 'https://images.pexels.com/photos/5082581/pexels-photo-5082581.jpeg?auto=compress&cs=tinysrgb&w=400&h=280&dpr=1',
    icon: FileText,
    label: 'Unclear warranty terms',
    desc: 'We explain what\'s covered and how to get the best outcome.',
  },
  {
    img: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400&h=280&dpr=1',
    icon: Clock,
    label: 'Delayed or ignored cases',
    desc: 'We follow up and escalate your case until it\'s resolved.',
  },
];

const bottomTrust = [
  { icon: MapPin, label: 'Local Experts', sub: 'Service in Turku area' },
  { icon: BadgeDollarSign, label: 'No Hidden Fees', sub: 'Transparent and fair pricing' },
  { icon: Zap, label: 'Fast Response', sub: 'We reply quickly' },
  { icon: Headphones, label: 'Customer First', sub: 'We\'re here to help' },
];

export default function WarrantyPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-16 lg:pt-[76px]">

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative bg-white overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[440px]">
          {/* Left */}
          <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-14 py-10 lg:py-14 max-w-2xl">
            <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/#services' }, { label: 'Warranty Support' }]} />
            <h1 className="text-[38px] sm:text-5xl lg:text-[50px] font-black text-navy-900 leading-[1.05] tracking-tight mt-4 mb-3">
              Warranty Support.<br />
              <span className="text-blue-600">We help you</span><br />
              <span className="text-blue-600">get it covered.</span>
            </h1>
            <p className="text-sm lg:text-base text-gray-500 leading-relaxed mb-7 max-w-md">
              We make sure your device meets warranty requirements and help you get the replacement or repair you deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a href="https://wa.me/358000000000" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl transition-all text-sm shadow-sm">
                <MessageCircle size={16} /> Chat on WhatsApp
              </a>
              <a href="#request"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-gray-50 text-navy-900 font-semibold rounded-2xl transition-all border border-gray-200 text-sm">
                Get Warranty Help <ArrowRight size={14} />
              </a>
            </div>
            {/* Feature icons row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-5 gap-y-4">
              {[
                { icon: ShieldCheck, label: 'Higher Approval', sub: 'Better chance of acceptance' },
                { icon: FileCheck, label: 'Proper Documentation', sub: 'We prepare everything correctly' },
                { icon: Clock, label: 'Saves Your Time', sub: 'We handle the process for you' },
                { icon: User, label: 'Expert Support', sub: 'We know what warranty requires' },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label}>
                  <Icon size={22} className="text-blue-600 mb-1.5" />
                  <p className="text-[13px] font-semibold text-navy-900 leading-tight">{label}</p>
                  <p className="text-[10px] text-gray-400 mt-0.5 leading-tight">{sub}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Right image */}
          <div className="flex-1 relative min-h-[300px] lg:min-h-0">
            <img
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1000&dpr=1"
              alt="Warranty support service"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/10" />
            <div className="absolute bottom-6 right-6 bg-white rounded-xl px-3.5 py-2 shadow-card flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-navy-900">Turku & surroundings</span>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="border-t border-gray-100 bg-gray-50/60">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-3">
            <div className="flex items-center overflow-x-auto scrollbar-none">
              {[
                { icon: <ShieldCheck size={13} />, label: 'Higher Approval', sub: 'Better acceptance rate' },
                { icon: <FileCheck size={13} />, label: 'Proper Docs', sub: 'Prepared correctly' },
                { icon: <Clock size={13} />, label: 'Saves Time', sub: 'We handle it for you' },
                { icon: <User size={13} />, label: 'Expert Support', sub: 'We know the process' },
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-2 py-1.5 flex-shrink-0 ${i < 3 ? 'pr-6 mr-6 border-r border-gray-200' : ''}`}>
                  <div className="w-6 h-6 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">{item.icon}</div>
                  <div>
                    <p className="text-[11px] font-semibold text-navy-900 whitespace-nowrap">{item.label}</p>
                    <p className="text-[10px] text-gray-400 whitespace-nowrap">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────────────── */}
      <section className="py-10 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-navy-900 text-center mb-1">We take care of the warranty process</h2>
          <p className="text-sm text-gray-500 text-center mb-8">From diagnosis to approval — we're with you every step of the way.</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="relative flex flex-col items-start">
                  {i < processSteps.length - 1 && (
                    <div className="absolute top-5 left-[52px] right-0 hidden lg:flex items-center">
                      <div className="flex-1 border-t border-dashed border-gray-200" />
                      <ArrowRight size={11} className="text-gray-300 -ml-1 flex-shrink-0" />
                    </div>
                  )}
                  <div className="w-10 h-10 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center mb-3 relative z-10">
                    <Icon size={16} className="text-blue-600" />
                  </div>
                  <p className="text-[10px] font-bold text-gray-400 mb-0.5">{step.num}</p>
                  <p className="text-sm font-semibold text-navy-900 mb-1">{step.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.sub}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── COMMON WARRANTY ISSUES ────────────────────────────────────── */}
      <section className="py-10 lg:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-navy-900 text-center mb-1">Common warranty issues we solve</h2>
          <p className="text-sm text-gray-500 text-center mb-8">We handle these situations every day.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {commonWarrantyIssues.map(({ img, icon: Icon, label, desc }) => (
              <div key={label} className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-blue-200 hover:shadow-[0_4px_16px_rgba(37,99,235,0.08)] transition-all group">
                <div className="relative h-32 overflow-hidden">
                  <img src={img} alt={label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-2 left-2">
                    <div className="w-6 h-6 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Icon size={13} className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-3.5">
                  <p className="text-[12px] font-semibold text-navy-900 leading-tight mb-1">{label}</p>
                  <p className="text-[10px] text-gray-500 leading-snug">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REQUEST + FORM ─────────────────────────────────────────────── */}
      <section id="request" className="py-10 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-0 rounded-2xl overflow-hidden border border-gray-200 shadow-soft">
            {/* Left dark panel */}
            <div className="lg:w-80 flex-shrink-0 bg-navy-900 p-8 flex flex-col">
              <div className="relative rounded-xl overflow-hidden h-48 mb-6">
                <img
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"
                  alt="Warranty consultation"
                  className="w-full h-full object-cover opacity-70"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 leading-snug">Don't let warranty details confuse you.</h3>
              <p className="text-sm text-blue-200 mb-6 leading-relaxed">We know the process and make it work for you.</p>
              <div className="space-y-2.5 mt-auto">
                {['Professional diagnostic report', 'Correct documentation', 'Communication with service centers', 'Better chance of approval'].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-blue-600/30 border border-blue-500/40 flex items-center justify-center flex-shrink-0">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                    <span className="text-sm text-blue-100">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right form */}
            <div className="flex-1 bg-white p-8">
              <h2 className="text-xl font-bold text-navy-900 mb-1">Request Warranty Support</h2>
              <p className="text-sm text-gray-500 mb-6">Fill in the form and we'll contact you with the next steps.</p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-14 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mb-3">
                    <CheckCircle size={22} className="text-green-600" />
                  </div>
                  <h3 className="text-base font-semibold text-navy-900 mb-1">Request sent!</h3>
                  <p className="text-sm text-gray-500">We'll contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Your name <span className="text-blue-600">*</span></label>
                      <input required type="text" placeholder="Full name"
                        className="w-full px-4 py-2.5 bg-[#f8f9fb] border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Phone number <span className="text-blue-600">*</span></label>
                      <input type="tel" placeholder="+358 40 123 4567"
                        className="w-full px-4 py-2.5 bg-[#f8f9fb] border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white transition-all" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email <span className="text-blue-600">*</span></label>
                      <input required type="email" placeholder="you@example.com"
                        className="w-full px-4 py-2.5 bg-[#f8f9fb] border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Device type</label>
                      <div className="relative">
                        <select className="w-full px-4 py-2.5 bg-[#f8f9fb] border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-400 focus:bg-white transition-all appearance-none cursor-pointer">
                          <option value="">Select device</option>
                          {['Smartphone', 'Laptop', 'Desktop PC', 'Tablet', 'Gaming Console', 'Other'].map(o => <option key={o}>{o}</option>)}
                        </select>
                        <ArrowRight size={12} className="absolute right-3.5 top-1/2 -translate-y-1/2 rotate-90 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">What's the issue? <span className="text-blue-600">*</span></label>
                    <textarea required rows={3} placeholder="Describe the problem..."
                      className="w-full px-4 py-2.5 bg-[#f8f9fb] border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white transition-all resize-none" />
                  </div>
                  <button type="submit"
                    className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all text-sm hover:shadow-[0_6px_20px_rgba(37,99,235,0.30)]">
                    Send Request <Send size={14} />
                  </button>
                  <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400">
                    <MessageCircle size={11} className="text-green-500" />
                    You can also contact us on <a href="https://wa.me/358000000000" className="text-blue-600 font-medium hover:underline">WhatsApp</a> for faster support.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED SERVICES ──────────────────────────────────────────── */}
      <section className="py-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest self-center mr-2">Related:</span>
            {[
              { label: 'Diagnostics', href: '/services/diagnostics' },
              { label: 'Device Repair', href: '/services/device-repair' },
              { label: 'Data Recovery', href: '/services/data-recovery' },
            ].map((s) => (
              <Link key={s.href} to={s.href}
                className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#f8f9fb] hover:bg-blue-50 border border-gray-200 hover:border-blue-200 rounded-xl text-sm font-medium text-navy-900 hover:text-blue-600 transition-all">
                {s.label} <ArrowRight size={12} className="text-gray-400" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM TRUST BAR ──────────────────────────────────────────── */}
      <div className="bg-[#f8f9fb] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {bottomTrust.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 text-blue-600">
                  <Icon size={15} />
                </div>
                <div>
                  <p className="text-[12px] font-semibold text-navy-900 leading-tight">{label}</p>
                  <p className="text-[10px] text-gray-400">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
