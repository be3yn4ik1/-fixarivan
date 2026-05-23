import { Building2, Home, ArrowRight, CheckCircle, Truck, Clock } from 'lucide-react';
import { useI18n } from '../i18n';

export default function ForBusiness() {
  const { t } = useI18n();
  const fb = t.forBusiness;

  return (
    <section id="for-business" className="py-14 lg:py-16 bg-[#f8f9fb] relative overflow-hidden">
      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-white to-transparent pointer-events-none" />

      {/* Ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-blue-50/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="h-px w-6 bg-blue-600" />
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{fb.label}</span>
            <div className="h-px w-6 bg-blue-600" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 leading-tight tracking-tight mb-3">
            {fb.headline}{' '}
            <span className="text-blue-600">{fb.headlineAccent}</span>
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">{fb.sub}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* For Home */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-soft hover:shadow-card transition-all duration-300">
            <div className="relative h-52 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/4259140/pexels-photo-4259140.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1"
                alt="Home visit repair"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />

              {/* Van arrival badge */}
              <div className="absolute top-3 right-3">
                <div className="flex items-center gap-1.5 bg-blue-600/90 backdrop-blur-sm rounded-full px-2.5 py-1.5">
                  <Truck size={10} className="text-white" />
                  <span className="text-[10px] font-bold text-white">Van comes to you</span>
                </div>
              </div>

              <div className="absolute bottom-4 left-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white rounded-full shadow-sm">
                  <Home size={13} className="text-blue-600" />
                  <span className="text-[12px] font-semibold text-navy-900">{fb.home.tag}</span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-[18px] font-bold text-navy-900 mb-1.5">{fb.home.headline}</h3>
              <p className="text-gray-500 text-[13px] mb-4 leading-relaxed">{fb.home.sub}</p>
              <div className="space-y-2 mb-5">
                {fb.home.features.map((f) => (
                  <div key={f} className="flex items-center gap-2.5">
                    <CheckCircle size={14} className="text-blue-600 flex-shrink-0" />
                    <span className="text-[13px] text-gray-700">{f}</span>
                  </div>
                ))}
              </div>
              {/* Availability strip */}
              <div className="flex items-center gap-2 bg-blue-50 border border-blue-100/60 rounded-xl px-3 py-2 mb-4">
                <Clock size={12} className="text-blue-500 flex-shrink-0" />
                <span className="text-[11px] text-blue-700 font-medium">Available today · Same-day visit</span>
                <div className="ml-auto w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              </div>
              <a
                href="https://wa.me/358000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-[13px] font-semibold rounded-xl transition-all hover:shadow-[0_6px_20px_rgba(37,99,235,0.30)]"
              >
                {fb.home.btn} <ArrowRight size={13} />
              </a>
            </div>
          </div>

          {/* For Business */}
          <div className="bg-navy-900 rounded-2xl overflow-hidden border border-navy-900/10 shadow-soft hover:shadow-card transition-all duration-300">
            <div className="relative h-52 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1"
                alt="For Business"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent" />

              {/* On-site contract badge */}
              <div className="absolute top-3 right-3">
                <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-2.5 py-1.5">
                  <Truck size={10} className="text-white" />
                  <span className="text-[10px] font-bold text-white">On-site contracts</span>
                </div>
              </div>

              <div className="absolute bottom-4 left-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white rounded-full shadow-sm">
                  <Building2 size={13} className="text-blue-600" />
                  <span className="text-[12px] font-semibold text-navy-900">{fb.business.tag}</span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-[18px] font-bold text-white mb-1.5">{fb.business.headline}</h3>
              <p className="text-blue-200 text-[13px] mb-4 leading-relaxed">{fb.business.sub}</p>
              <div className="space-y-2 mb-5">
                {fb.business.features.map((f) => (
                  <div key={f} className="flex items-center gap-2.5">
                    <CheckCircle size={14} className="text-blue-400 flex-shrink-0" />
                    <span className="text-[13px] text-blue-100">{f}</span>
                  </div>
                ))}
              </div>
              {/* Priority strip */}
              <div className="flex items-center gap-2 bg-white/8 border border-white/10 rounded-xl px-3 py-2 mb-4">
                <Clock size={12} className="text-blue-300 flex-shrink-0" />
                <span className="text-[11px] text-blue-200 font-medium">Priority response · SLA-backed</span>
                <div className="ml-auto w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              </div>
              <a
                href="https://wa.me/358000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-[13px] font-semibold rounded-xl transition-all hover:shadow-[0_6px_20px_rgba(37,99,235,0.35)]"
              >
                {fb.business.btn} <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none" />
    </section>
  );
}
