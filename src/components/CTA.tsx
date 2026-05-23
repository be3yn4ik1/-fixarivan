import { MessageCircle, Phone, Mail, MapPin, Truck, Navigation, Wrench } from 'lucide-react';
import { useI18n } from '../i18n';

const contactHrefs = ['tel:+358000000000', 'mailto:hello@fixarivan.fi', '#coverage'];
const contactIcons = [Phone, Mail, MapPin];

export default function CTA() {
  const { t } = useI18n();
  const c = t.cta;

  return (
    <section id="contact" className="py-14 lg:py-16 bg-gray-50 relative">
      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-[#f8f9fb] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-blue-900 p-8 lg:p-14 mb-8 shadow-lifted">
          {/* Ambient glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

          {/* Van workshop identity strip — top-right corner */}
          <div className="absolute top-5 right-5 hidden lg:flex items-center gap-2 bg-white/8 border border-white/12 rounded-xl px-3.5 py-2.5">
            <div className="w-6 h-6 bg-blue-600/80 rounded-lg flex items-center justify-center flex-shrink-0">
              <Truck size={12} className="text-white" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-white/90 leading-none">FixariVan Workshop</p>
              <p className="text-[9px] text-blue-300 mt-0.5">Turku & surroundings</p>
            </div>
            <div className="ml-1 flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              <span className="text-[9px] text-green-300 font-semibold">Active</span>
            </div>
          </div>

          <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-600/20 border border-blue-400/20 rounded-full mb-5">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                <span className="text-xs font-semibold text-blue-300 uppercase tracking-widest">{c.badge}</span>
              </div>
              <h2 className="text-3xl lg:text-[38px] font-bold text-white leading-tight tracking-tight mb-4">
                {c.headline}<br />
                <span className="text-blue-400">{c.headlineAccent}</span>
              </h2>
              <p className="text-blue-200 text-[15px] leading-relaxed mb-6">{c.sub}</p>

              {/* Mobile workshop mini-specs */}
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: Navigation, text: 'On-site visits' },
                  { icon: Wrench, text: 'Full tool kit' },
                  { icon: Truck, text: 'Mobile workshop' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-1.5 bg-white/8 border border-white/10 rounded-full px-3 py-1.5">
                    <Icon size={11} className="text-blue-300" />
                    <span className="text-[11px] text-blue-200 font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 lg:flex-shrink-0 w-full lg:w-auto">
              <a
                href="https://wa.me/358000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-[0_8px_24px_rgba(37,99,235,0.40)] text-[15px] whitespace-nowrap"
              >
                <MessageCircle size={18} />
                {c.ctaWhatsapp}
              </a>
              <a
                href="tel:+358000000000"
                className="flex items-center justify-center gap-2.5 px-8 py-4 bg-white/10 hover:bg-white/18 text-white font-semibold rounded-xl transition-all duration-200 border border-white/20 text-[15px] whitespace-nowrap"
              >
                <Phone size={18} />
                {c.ctaCall}
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {c.contacts.map((item, i) => {
            const Icon = contactIcons[i];
            return (
              <a
                key={item.label}
                href={contactHrefs[i]}
                className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-soft hover:shadow-card hover:border-blue-100/60 transition-all duration-200 group"
              >
                <div className="w-10 h-10 bg-blue-50 group-hover:bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                  <Icon size={18} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-[11px] text-gray-400 mb-0.5">{item.label}</p>
                  <p className="text-[13px] font-semibold text-navy-900">{item.val}</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">{item.sub}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
