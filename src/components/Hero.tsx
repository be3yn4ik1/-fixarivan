import { Star, Truck, Shield, Clock, ThumbsUp, Leaf, MessageCircle, MapPin, Wrench, Zap } from 'lucide-react';
import { useI18n } from '../i18n';

const benefitIcons = [Truck, Shield, Clock, ThumbsUp, Leaf];
const benefitAccents = [
  'bg-blue-50 text-blue-600',
  'bg-slate-50 text-slate-600',
  'bg-sky-50 text-sky-600',
  'bg-teal-50 text-teal-600',
  'bg-green-50 text-green-600',
];

export default function Hero() {
  const { t } = useI18n();
  const h = t.hero;

  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-20 lg:pt-24">
        {/* Ambient glow top-right */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[560px] h-[560px] bg-blue-50/60 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -left-32 w-[300px] h-[300px] bg-sky-50/40 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-10 py-12 lg:py-16">

            {/* ── LEFT: Copy ─────────────────────────────────────── */}
            <div className="flex-1 lg:pr-8 max-w-[520px]">

              {/* Van badge — strong brand signal */}
              <div className="inline-flex items-center gap-2 bg-blue-600/8 border border-blue-200/60 rounded-full px-3.5 py-1.5 mb-6">
                <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                  <Truck size={9} className="text-white" />
                </div>
                <span className="text-[11px] font-semibold text-blue-700 uppercase tracking-widest">
                  {h.badge}
                </span>
              </div>

              <h1 className="text-[46px] sm:text-5xl lg:text-[58px] font-bold text-navy-900 leading-[1.06] tracking-tight mb-5">
                {h.headline1}<br />
                {h.headline2}{' '}
                <span className="text-blue-600 italic">{h.headlineAccent}</span>
              </h1>

              <p className="text-[16px] text-gray-500 leading-relaxed mb-7 max-w-[420px]">
                {h.sub}
              </p>

              {/* Mobile workshop identity pills */}
              <div className="flex flex-wrap gap-2 mb-7">
                {[
                  { icon: MapPin, label: 'Turku & region' },
                  { icon: Zap, label: 'Same-day visits' },
                  { icon: Wrench, label: 'On-site repair' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-200/80 rounded-full">
                    <Icon size={11} className="text-blue-600" />
                    <span className="text-[11px] font-medium text-gray-600">{label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5 mb-8">
                <a
                  href="https://wa.me/358000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl transition-all shadow-sm hover:shadow-[0_8px_24px_rgba(37,99,235,0.35)] text-[14px]"
                >
                  <MessageCircle size={17} />
                  {h.ctaWhatsapp}
                </a>
                <a
                  href="tel:+358000000000"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-gray-50 text-navy-900 font-semibold rounded-2xl border border-gray-200 hover:border-gray-300 transition-all text-[14px]"
                >
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  </div>
                  +358 000 000 000
                </a>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[
                    'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2',
                    'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2',
                    'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2',
                    'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2',
                  ].map((src, i) => (
                    <img key={i} src={src} alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill="#f59e0b" className="text-amber-400" />
                    ))}
                    <span className="ml-1 text-xs font-bold text-navy-900">5.0</span>
                  </div>
                  <p className="text-[11px] text-gray-400 mt-0.5">{h.reviews}</p>
                </div>
              </div>
            </div>

            {/* ── RIGHT: Hero image + floating badges ────────────── */}
            <div className="flex-1 w-full lg:max-w-[580px] relative">

              {/* Main image — field technician on-site */}
              <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
                <img
                  src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1"
                  alt="FixariVan technician on-site"
                  className="w-full h-[390px] lg:h-[480px] object-cover"
                />
                {/* Subtle bottom vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* ── Floating badges — mobile workshop identity ── */}

              {/* Available Today — bottom-left */}
              <div className="absolute bottom-5 left-4 z-10">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-3.5 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.13)] border border-white/60">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-navy-900 leading-none">{h.availableToday}</p>
                      <p className="text-[10px] text-gray-400 mt-0.5">{h.availableSub}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rating — top-right */}
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 shadow-[0_4px_16px_rgba(0,0,0,0.12)] border border-white/60 flex items-center gap-1.5">
                  <Star size={12} fill="#f59e0b" className="text-amber-400" />
                  <span className="text-[12px] font-bold text-navy-900">5.0</span>
                  <span className="text-[10px] text-gray-400">Google</span>
                </div>
              </div>


              {/* Diagnostics price — right side middle */}
              <div className="absolute right-4 bottom-20 z-10 hidden lg:block">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-3.5 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.11)] border border-white/60">
                  <p className="text-[9px] text-gray-400 uppercase tracking-wide font-semibold">Diagnostics from</p>
                  <p className="text-[18px] font-black text-navy-900 leading-none mt-0.5">€25</p>
                  <p className="text-[9px] text-blue-600 font-semibold mt-0.5">Warranty included</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom gradient fade into benefit cards */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-white/80 pointer-events-none" />
      </section>

      {/* ── BENEFIT CARDS — seamless flow ───────────────────────────── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 lg:pb-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 lg:gap-3">
            {h.benefits.map((b, i) => {
              const Icon = benefitIcons[i];
              return (
                <div
                  key={b.title}
                  className="group bg-white rounded-xl border border-gray-100/80 p-3.5 lg:p-4 hover:border-blue-100 hover:shadow-[0_4px_16px_rgba(37,99,235,0.07)] transition-all duration-200"
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2.5 ${benefitAccents[i]}`}>
                    <Icon size={15} />
                  </div>
                  <p className="text-[12px] font-semibold text-navy-900 leading-snug mb-0.5">{b.title}</p>
                  <p className="text-[11px] text-gray-400 leading-relaxed">{b.sub}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
