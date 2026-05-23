import { useState } from 'react';
import { MessageCircle, ArrowRight, Truck, Leaf, Clock, Cpu, Laptop, Smartphone, Wifi, Cable, HardDrive, Monitor, Headphones, CheckCircle, MapPin, ShieldCheck, Recycle, Send, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/ui/Breadcrumb';

const whatWeCollect = [
  { icon: Laptop, label: 'Laptops', img: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
  { icon: Smartphone, label: 'Phones', img: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
  { icon: Wifi, label: 'Routers', img: 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
  { icon: Cable, label: 'Cables & Chargers', img: 'https://images.pexels.com/photos/163007/163007-lg.jpg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
  { icon: HardDrive, label: 'PC Parts', img: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
  { icon: Monitor, label: 'Monitors', img: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
  { icon: Headphones, label: 'Other Electronics', img: 'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' },
];

const trustFeatures = [
  { icon: Truck, label: 'Easy Pickup', sub: 'We can collect your old devices during nearby service visits.' },
  { icon: Leaf, label: 'Eco Friendly', sub: 'Responsible disposal and recycling to protect our environment.' },
  { icon: Clock, label: 'Save Time', sub: 'No need to visit recycling centers — we come to you.' },
  { icon: Cpu, label: 'Old Tech Accepted', sub: 'We take a wide range of electronics, big or small, working or not.' },
];

const bottomTrust = [
  { icon: MapPin, label: 'Local & Convenient', sub: 'We come to you' },
  { icon: Recycle, label: '100% Free Pickup', sub: 'When we\'re in your area' },
  { icon: ShieldCheck, label: 'Safe & Secure', sub: 'Your data and devices' },
  { icon: Leaf, label: 'Better for the Planet', sub: 'We recycle responsibly' },
];

export default function RecyclingPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-16 lg:pt-[76px]">

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative bg-white overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[420px]">
          {/* Left */}
          <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-14 py-10 lg:py-14 max-w-xl">
            <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/#services' }, { label: 'Recycling & Disposal' }]} />
            <h1 className="text-[38px] sm:text-5xl lg:text-[50px] font-black text-navy-900 leading-[1.05] tracking-tight mt-4 mb-3">
              Responsible<br />
              <span className="text-green-600">Electronics</span><br />
              <span className="text-green-600">Recycling.</span>
            </h1>
            <p className="text-sm lg:text-base text-gray-500 leading-relaxed mb-7 max-w-md">
              We help you safely dispose of old electronics — without unnecessary trips or hassle.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <a href="https://wa.me/358000000000" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-2xl transition-all text-sm shadow-sm hover:shadow-[0_6px_20px_rgba(22,163,74,0.30)]">
                <Recycle size={16} /> Request Pickup
              </a>
              <a href="https://wa.me/358000000000" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-gray-50 text-navy-900 font-semibold rounded-2xl transition-all border border-gray-200 text-sm">
                <MessageCircle size={15} /> Ask in WhatsApp
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-green-700">
              <Leaf size={15} className="text-green-600 flex-shrink-0" />
              Good for you. Good for the planet.
            </div>
          </div>
          {/* Right image */}
          <div className="flex-1 relative min-h-[300px] lg:min-h-0">
            <img
              src="https://images.pexels.com/photos/7013101/pexels-photo-7013101.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1000&dpr=1"
              alt="FixariVan electronics recycling"
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
              {trustFeatures.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className={`flex items-center gap-2 py-1.5 flex-shrink-0 ${i < trustFeatures.length - 1 ? 'pr-6 mr-6 border-r border-gray-200' : ''}`}>
                    <div className="w-6 h-6 bg-green-50 rounded-lg flex items-center justify-center text-green-600 flex-shrink-0">
                      <Icon size={13} />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-navy-900 whitespace-nowrap">{item.label}</p>
                      <p className="text-[10px] text-gray-400 whitespace-nowrap hidden sm:block">{item.sub.slice(0, 30)}{item.sub.length > 30 ? '...' : ''}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE COLLECT ───────────────────────────────────────────── */}
      <section className="py-10 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-navy-900 mb-1">What we can collect</h2>
          <p className="text-sm text-gray-500 mb-6">A wide range of devices and electronics.</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {whatWeCollect.map(({ label, img }) => (
              <div key={label} className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-green-200 hover:shadow-[0_4px_16px_rgba(22,163,74,0.10)] transition-all">
                <div className="h-24 overflow-hidden">
                  <img src={img} alt={label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="px-2.5 py-2 text-center">
                  <p className="text-[11px] font-semibold text-navy-900 leading-tight">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FREE DURING SERVICE VISIT BANNER ──────────────────────────── */}
      <section className="py-6 bg-[#f0fdf4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 bg-white border border-green-200 rounded-2xl px-6 py-5 shadow-soft">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Gift size={22} className="text-green-600" />
            </div>
            <div className="flex-1">
              <p className="text-base font-bold text-navy-900 mb-0.5">Already booked a service?</p>
              <p className="text-sm text-gray-600 leading-relaxed">We may collect your old electronics during the same visit — for free. Just let us know in advance.</p>
            </div>
            <a href="https://wa.me/358000000000" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-xl transition-all flex-shrink-0">
              Let us know <ArrowRight size={13} />
            </a>
          </div>
          <p className="text-xs text-gray-400 mt-3 flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            Pickup availability depends on route and device size.
          </p>
        </div>
      </section>

      {/* ── REQUEST FORM ──────────────────────────────────────────────── */}
      <section id="request" className="py-10 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-0 rounded-2xl overflow-hidden border border-gray-200 shadow-soft">
            {/* Left panel */}
            <div className="lg:w-80 flex-shrink-0 relative overflow-hidden">
              <img
                src="https://images.pexels.com/photos/7013101/pexels-photo-7013101.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=1"
                alt="FixariVan recycling pickup"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-navy-900/75" />
              <div className="relative p-8 h-full flex flex-col min-h-[300px] lg:min-h-0">
                <div className="mt-auto">
                  <div className="w-10 h-10 bg-green-600/20 border border-green-500/30 rounded-xl flex items-center justify-center mb-4">
                    <Recycle size={18} className="text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Request Free Pickup</h3>
                  <p className="text-sm text-blue-200 mb-5">We'll arrange a free pickup for your old electronics. Quick, easy, responsible.</p>
                </div>
              </div>
            </div>

            {/* Right form */}
            <div className="flex-1 bg-white p-8">
              <h2 className="text-xl font-bold text-navy-900 mb-1">Request Free Pickup</h2>
              <p className="text-sm text-gray-500 mb-6">Tell us what you have and we'll arrange the rest.</p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-14 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mb-3">
                    <CheckCircle size={22} className="text-green-600" />
                  </div>
                  <h3 className="text-base font-semibold text-navy-900 mb-1">Request sent!</h3>
                  <p className="text-sm text-gray-500">We'll contact you to arrange pickup.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">What devices do you have? <span className="text-green-600">*</span></label>
                    <input required type="text" placeholder="E.g. old laptop, phone, router, cables..."
                      className="w-full px-4 py-2.5 bg-[#f8f9fb] border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:border-green-400 focus:bg-white transition-all" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Pickup area</label>
                      <input type="text" placeholder="E.g. Turku and nearby areas"
                        className="w-full px-4 py-2.5 bg-[#f8f9fb] border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:border-green-400 focus:bg-white transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Approximate amount</label>
                      <input type="text" placeholder="E.g. 1 laptop, 2 phones, small box..."
                        className="w-full px-4 py-2.5 bg-[#f8f9fb] border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:border-green-400 focus:bg-white transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Your contact <span className="text-green-600">*</span></label>
                    <input required type="text" placeholder="Phone number or WhatsApp"
                      className="w-full px-4 py-2.5 bg-[#f8f9fb] border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:border-green-400 focus:bg-white transition-all" />
                  </div>
                  <button type="submit"
                    className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all text-sm hover:shadow-[0_6px_20px_rgba(22,163,74,0.30)]">
                    Send Request <Send size={14} />
                  </button>
                  <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400">
                    <MessageCircle size={11} className="text-green-500" />
                    You can also contact us on <a href="https://wa.me/358000000000" className="text-green-600 font-medium hover:underline">WhatsApp</a> for faster response.
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
              { label: 'Device Repair', href: '/services/device-repair' },
              { label: 'Data Recovery', href: '/services/data-recovery' },
              { label: 'Diagnostics', href: '/services/diagnostics' },
            ].map((s) => (
              <Link key={s.href} to={s.href}
                className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#f8f9fb] hover:bg-green-50 border border-gray-200 hover:border-green-200 rounded-xl text-sm font-medium text-navy-900 hover:text-green-700 transition-all">
                {s.label} <ArrowRight size={12} className="text-gray-400" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM TRUST BAR ──────────────────────────────────────────── */}
      <div className="bg-[#f0fdf4] border-t border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {bottomTrust.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0 text-green-600">
                  <Icon size={15} />
                </div>
                <div>
                  <p className="text-[12px] font-semibold text-navy-900 leading-tight">{label}</p>
                  <p className="text-[10px] text-gray-500">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
