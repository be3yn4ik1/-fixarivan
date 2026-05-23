import { MapPin, Clock, Navigation, Truck } from 'lucide-react';
import { useI18n } from '../i18n';

export default function Coverage() {
  const { t } = useI18n();
  const c = t.coverage;

  return (
    <section id="coverage" className="py-14 lg:py-20 bg-[#f8f9fb] relative overflow-hidden">
      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-white to-transparent pointer-events-none" />

      {/* Route/travel ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[320px] h-[320px] bg-blue-50/40 rounded-full blur-3xl -translate-x-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-16 items-center">

          {/* Left */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6 bg-blue-600" />
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{c.label}</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 leading-tight tracking-tight mb-4">
              {c.headline}<br />
              <span className="text-blue-600">{c.headlineAccent}</span>
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-6 max-w-md">{c.sub}</p>

            {/* Van driving identity strip */}
            <div className="bg-blue-600 rounded-2xl p-4 mb-6 flex items-center gap-3.5">
              <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0">
                <Truck size={18} className="text-white" />
              </div>
              <div>
                <p className="text-[12px] font-bold text-white">Mobile Workshop — always nearby</p>
                <p className="text-[11px] text-blue-200">We drive to you, fully equipped for any job</p>
              </div>
              <div className="ml-auto flex items-center gap-1.5 flex-shrink-0">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                <span className="text-[10px] text-green-300 font-semibold uppercase tracking-wide">Active</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-6">
              {c.areas.map((area) => (
                <div key={area} className="flex items-center gap-2 py-2 px-3 bg-white border border-gray-100 rounded-xl shadow-soft">
                  <MapPin size={12} className="text-blue-500 flex-shrink-0" />
                  <span className="text-[12px] text-gray-700">{area}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex items-start gap-3 bg-white border border-gray-100 rounded-2xl p-4 flex-1 shadow-soft">
                <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock size={15} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-[12px] font-semibold text-navy-900">{c.hoursLabel}</p>
                  <p className="text-[11px] text-gray-400 mt-0.5 whitespace-pre-line">{c.hoursVal}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white border border-gray-100 rounded-2xl p-4 flex-1 shadow-soft">
                <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Navigation size={15} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-[12px] font-semibold text-navy-900">{c.responseLabel}</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">{c.responseVal}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Map visual */}
          <div className="flex-1 w-full max-w-lg">
            <div className="relative rounded-2xl overflow-hidden bg-blue-50 aspect-[4/3] shadow-[0_12px_40px_rgba(0,0,0,0.10)] border border-blue-100/60">
              <img
                src="https://images.pexels.com/photos/408503/pexels-photo-408503.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
                alt="Turku area"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-blue-100/10 to-blue-50/20" />

              {/* Animated radius rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 border-2 border-blue-400/25 rounded-full animate-[ping_3s_ease-in-out_infinite]" style={{ animationDuration: '4s' }} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-blue-400/18 rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-88 h-88 border border-blue-400/10 rounded-full" />

              {/* Center pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(37,99,235,0.5)]">
                  <MapPin size={20} className="text-white" />
                </div>
                <div className="mt-2 bg-white rounded-full px-3.5 py-1.5 shadow-card border border-gray-100">
                  <p className="text-[11px] font-bold text-navy-900">{c.mapLabel}</p>
                </div>
              </div>

              {/* Van position dot */}
              <div className="absolute top-[35%] left-[65%]">
                <div className="relative">
                  <div className="w-6 h-6 bg-white rounded-full shadow-lifted flex items-center justify-center border-2 border-blue-500">
                    <Truck size={10} className="text-blue-600" />
                  </div>
                  <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-green-400 rounded-full border border-white" />
                </div>
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
