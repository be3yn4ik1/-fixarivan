import { Shield, Cpu, ThumbsUp, Leaf, Star, Truck } from 'lucide-react';
import { useI18n } from '../i18n';

const featureIcons = [Shield, Cpu, ThumbsUp, Leaf];

export default function WhyUs() {
  const { t } = useI18n();
  const w = t.whyUs;

  return (
    <section className="py-14 lg:py-20 bg-[#f8f9fb] overflow-hidden relative">
      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-white to-transparent pointer-events-none" />

      {/* Ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-20 -left-20 w-[360px] h-[360px] bg-blue-50/50 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

          {/* Left: content */}
          <div className="flex-1 max-w-lg">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6 bg-blue-600" />
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{w.label}</span>
            </div>
            <h2 className="text-3xl lg:text-[40px] font-bold text-navy-900 leading-[1.1] tracking-tight mb-4">
              {w.headline}{' '}
              <span className="text-blue-600">{w.headlineAccent}</span>
            </h2>
            <p className="text-[15px] text-gray-500 leading-relaxed mb-6">{w.sub}</p>

            <div className="space-y-3.5 mb-6">
              {w.features.map((f, i) => {
                const Icon = featureIcons[i];
                return (
                  <div key={f.title} className="flex items-start gap-3.5 p-3.5 bg-white rounded-xl border border-gray-100 hover:border-blue-100 hover:shadow-soft transition-all duration-200">
                    <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-[13px] font-semibold text-navy-900 mb-0.5">{f.title}</h3>
                      <p className="text-[12px] text-gray-500 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {w.stats.map((s) => (
                <div key={s.label} className="bg-white rounded-2xl px-4 py-3.5 border border-gray-100 shadow-soft">
                  <div className="text-2xl font-black text-navy-900 tracking-tight">{s.val}</div>
                  <div className="text-[11px] text-gray-400 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image with brand overlays */}
          <div className="flex-1 w-full max-w-[480px] relative">
            {/* Main image — field technician working on device */}
            <div className="relative rounded-2xl overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.13)]">
              <img
                src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800&h=900&dpr=1"
                alt="FixariVan technician on-site"
                className="w-full h-[440px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/25 to-transparent" />

              {/* Mobile Workshop identity card overlaid */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3.5 shadow-lifted border border-white/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Truck size={16} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-bold text-navy-900">FixariVan Mobile Workshop</p>
                      <p className="text-[10px] text-gray-400 truncate">Professional tools · Diagnostic equipment · Spare parts</p>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-[10px] text-green-600 font-semibold">Ready</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating corner image — repair tools */}
            <div className="absolute -bottom-4 -right-3 lg:-right-5 w-32 h-32 rounded-2xl overflow-hidden border-4 border-white shadow-[0_8px_28px_rgba(0,0,0,0.14)]">
              <img
                src="https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1"
                alt="Repair tools"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Review card */}
            <div className="absolute -bottom-3 -left-3 lg:-left-7 bg-white rounded-2xl p-4 shadow-[0_8px_28px_rgba(0,0,0,0.09)] max-w-[210px] border border-gray-100/80">
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} fill="#f59e0b" className="text-amber-400" />
                ))}
              </div>
              <p className="text-[12px] text-navy-900 font-medium leading-relaxed mb-2.5">
                {w.reviewQuote}
              </p>
              <div className="flex items-center gap-2">
                <img
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2"
                  alt="review"
                  className="w-6 h-6 rounded-full object-cover"
                />
                <p className="text-[11px] font-semibold text-gray-600">{w.reviewAuthor}</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
