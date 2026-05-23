import { Link } from 'react-router-dom';
import { MessageCircle, Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { useI18n } from '../i18n';

export default function Footer() {
  const { t } = useI18n();
  const f = t.footer;
  const si = t.nav.serviceItems;

  const serviceLinks = [
    { label: si.deviceRepair, href: '/services/device-repair' },
    { label: si.laptopRepair, href: '/services/laptop-repair' },
    { label: si.phoneRepair, href: '/services/phone-repair' },
    { label: si.wifi, href: '/services/wifi-network' },
    { label: si.smartHome, href: '/services/smart-home' },
    { label: si.cameras, href: '/services/security-cameras' },
    { label: si.itSupport, href: '/services/it-support' },
    { label: si.dataRecovery, href: '/services/data-recovery' },
    { label: si.diagnostics, href: '/services/diagnostics' },
  ];

  const companyHrefs = ['/#how-it-works', '/#for-business', '/#reviews', '/#contact'];

  return (
    <footer className="bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13" rx="2" />
                  <path d="m16 8 6 6-6 6" />
                  <path d="M1 13h15" />
                </svg>
              </div>
              <div className="leading-none">
                <div className="font-bold text-[17px] tracking-tight">
                  Fixari<span className="text-blue-400">Van</span>
                </div>
                <div className="text-[9px] font-medium text-gray-500 uppercase tracking-widest">Mobile Tech Service</div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">{f.tagline}</p>
            <div className="flex gap-3">
              <a href="https://wa.me/358000000000" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors" aria-label="WhatsApp">
                <MessageCircle size={16} />
              </a>
              <a href="tel:+358000000000" className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors" aria-label="Phone">
                <Phone size={16} />
              </a>
              <a href="mailto:hello@fixarivan.fi" className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors" aria-label="Email">
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">{f.sections.services}</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s.href}>
                  <Link to={s.href} className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1 group">
                    {s.label}
                    <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">{f.sections.company}</h3>
            <ul className="space-y-2.5">
              {f.companyLinks.map((label, i) => (
                <li key={label}>
                  <Link to={companyHrefs[i]} className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1 group">
                    {label}
                    <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">{f.sections.contact}</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">{f.contactInfo.area}</p>
                  <p className="text-xs text-gray-500">{f.contactInfo.areaSub}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={15} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+358000000000" className="text-sm text-gray-300 hover:text-white transition-colors">+358 000 000 000</a>
                  <p className="text-xs text-gray-500">{f.contactInfo.hours}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={15} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:hello@fixarivan.fi" className="text-sm text-gray-300 hover:text-white transition-colors">hello@fixarivan.fi</a>
              </div>
            </div>
            <div className="mt-5 p-4 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-xs text-gray-400 mb-2">{f.contactInfo.replyLabel}</p>
              <a href="https://wa.me/358000000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white font-medium hover:text-blue-400 transition-colors">
                <MessageCircle size={16} className="text-green-400" />
                {f.contactInfo.whatsapp}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} FixariVan. {f.legal.rights}</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">{f.legal.privacy}</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">{f.legal.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
