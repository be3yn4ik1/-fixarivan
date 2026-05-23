import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, MessageCircle } from 'lucide-react';
import { useI18n, type Lang } from '../i18n';

const LANG_LABELS: Record<Lang, string> = { en: 'EN', fi: 'FI', ru: 'RU' };
const LANGS: Lang[] = ['en', 'fi', 'ru'];

export default function Navbar() {
  const { lang, setLang, t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
    { label: si.warranty, href: '/services/warranty' },
    { label: si.recycling, href: '/services/recycling' },
  ];

  const isHome = location.pathname === '/';
  const forceWhite = !isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || forceWhite
          ? 'bg-white/96 backdrop-blur-md shadow-soft border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13" rx="2" />
                <path d="m16 8 6 6-6 6" />
                <path d="M1 13h15" />
              </svg>
            </div>
            <div className="leading-none">
              <div className="font-bold text-[17px] text-navy-900 tracking-tight">
                Fixari<span className="text-blue-600">Van</span>
              </div>
              <div className="text-[9px] font-medium text-gray-400 uppercase tracking-widest">Mobile Tech Service</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors rounded-lg hover:bg-gray-50">
                {t.nav.services} <ChevronDown size={13} className={`mt-px transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-60 bg-white rounded-2xl shadow-lifted border border-gray-100 py-2 z-50">
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.href}
                      to={s.href}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50/60 transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/#for-business" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors rounded-lg hover:bg-gray-50">
              {t.nav.forBusiness}
            </Link>
            <Link to="/#reviews" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors rounded-lg hover:bg-gray-50">
              {t.nav.reviews}
            </Link>
            <Link to="/#contact" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors rounded-lg hover:bg-gray-50">
              {t.nav.contact}
            </Link>
          </nav>

          {/* Right: lang switcher + CTA */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* Language switcher */}
            <div className="flex items-center bg-gray-100 rounded-lg p-0.5">
              {LANGS.map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide rounded-md transition-all duration-150 ${
                    lang === l
                      ? 'bg-white text-navy-900 shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {LANG_LABELS[l]}
                </button>
              ))}
            </div>

            <a
              href="https://wa.me/358000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md whitespace-nowrap"
            >
              <MessageCircle size={15} />
              {t.nav.cta}
            </a>
          </div>

          {/* Mobile: lang + toggle */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Compact lang switcher */}
            <div className="flex items-center bg-gray-100 rounded-lg p-0.5">
              {LANGS.map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide rounded-md transition-all duration-150 ${
                    lang === l
                      ? 'bg-white text-navy-900 shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {LANG_LABELS[l]}
                </button>
              ))}
            </div>
            <button
              className="p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lifted max-h-[80vh] overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-0.5">
            <p className="px-4 pt-2 pb-1 text-xs font-bold text-gray-400 uppercase tracking-widest">{t.nav.services}</p>
            {serviceLinks.map((s) => (
              <Link
                key={s.href}
                to={s.href}
                className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-xl transition-colors"
              >
                {s.label}
              </Link>
            ))}
            <div className="h-px bg-gray-100 my-2" />
            <Link to="/#for-business" className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-xl transition-colors">{t.nav.forBusiness}</Link>
            <Link to="/#reviews" className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-xl transition-colors">{t.nav.reviews}</Link>
            <Link to="/#contact" className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-xl transition-colors">{t.nav.contact}</Link>
            <div className="pt-2">
              <a
                href="https://wa.me/358000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-blue-600 text-white text-sm font-semibold rounded-xl"
              >
                <MessageCircle size={16} />
                {t.nav.cta}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
