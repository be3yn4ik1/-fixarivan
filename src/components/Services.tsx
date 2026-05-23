import { Link } from 'react-router-dom';
import { ArrowRight, Smartphone, Wifi, Home, Camera, Headphones, Database, Activity, FileCheck, Recycle } from 'lucide-react';
import { useI18n } from '../i18n';

const servicesMeta = [
  // on-site laptop repair — technician working
  { icon: Smartphone, img: 'https://images.pexels.com/photos/5082581/pexels-photo-5082581.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', href: '/services/device-repair', iconColor: 'text-blue-600', iconBg: 'bg-blue-50' },
  // wifi router / network setup
  { icon: Wifi, img: 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', href: '/services/wifi-network', iconColor: 'text-sky-600', iconBg: 'bg-sky-50' },
  // smart home devices
  { icon: Home, img: 'https://images.pexels.com/photos/4050287/pexels-photo-4050287.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', href: '/services/smart-home', iconColor: 'text-teal-600', iconBg: 'bg-teal-50' },
  // security camera install
  { icon: Camera, img: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', href: '/services/security-cameras', iconColor: 'text-slate-600', iconBg: 'bg-slate-50' },
  // IT support — desk/office
  { icon: Headphones, img: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', href: '/services/it-support', iconColor: 'text-blue-600', iconBg: 'bg-blue-50' },
  // data recovery — drives/storage
  { icon: Database, img: 'https://images.pexels.com/photos/117729/pexels-photo-117729.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', href: '/services/data-recovery', iconColor: 'text-cyan-600', iconBg: 'bg-cyan-50' },
  // diagnostics — measuring / field work
  { icon: Activity, img: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', href: '/services/diagnostics', iconColor: 'text-amber-600', iconBg: 'bg-amber-50' },
  // warranty / document
  { icon: FileCheck, img: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', href: '/services/diagnostics', iconColor: 'text-green-600', iconBg: 'bg-green-50' },
  // recycling
  { icon: Recycle, img: 'https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', href: '/services/device-repair', iconColor: 'text-emerald-600', iconBg: 'bg-emerald-50' },
];

export default function Services() {
  const { t } = useI18n();
  const s = t.services;

  return (
    <section id="services" className="py-14 lg:py-20 bg-[#f8f9fb] relative">
      {/* Top fade from white */}
      <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-white to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="h-px w-6 bg-blue-600" />
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{s.label}</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 leading-tight tracking-tight mb-3">
              {s.headline}<br />
              {s.headlineMid} <span className="text-blue-600">{s.headlineAccent}</span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed">{s.sub}</p>
          </div>
          <div className="hidden lg:grid grid-cols-3 gap-3 text-center">
            {s.stats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-xl px-4 py-3.5 shadow-soft border border-gray-100/80">
                <div className="text-2xl font-bold text-navy-900">{stat.val}</div>
                <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {s.items.map((item, i) => {
            const meta = servicesMeta[i];
            const Icon = meta.icon;
            return (
              <Link
                key={item.title}
                to={meta.href}
                className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={meta.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <div className={`absolute top-3 left-3 w-9 h-9 ${meta.iconBg} rounded-xl flex items-center justify-center shadow-sm border border-white/60`}>
                    <Icon size={16} className={meta.iconColor} />
                  </div>
                </div>
                <div className="p-4 lg:p-5">
                  <h3 className="font-semibold text-navy-900 text-[14px] mb-1">{item.title}</h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                  <div className="mt-3.5 flex items-center gap-1 text-blue-600 text-[12px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {s.learnMore} <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            );
          })}

          {/* CTA card */}
          <div className="bg-navy-900 rounded-2xl p-6 flex flex-col justify-between shadow-card border border-navy-800/40">
            {/* Subtle glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/5 to-transparent pointer-events-none" />
            <div className="relative">
              <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white text-[14px] mb-1.5">{s.ctaCard.headline}</h3>
              <p className="text-gray-400 text-[13px] leading-relaxed">{s.ctaCard.sub}</p>
            </div>
            <a
              href="https://wa.me/358000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-[13px] font-semibold rounded-xl transition-colors"
            >
              {s.ctaCard.btn}
              <ArrowRight size={13} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
