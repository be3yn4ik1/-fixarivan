import { useI18n } from '../i18n';

// Field-service relevant case images
const caseImages = [
  // laptop repair — tech working on laptop
  'https://images.pexels.com/photos/5082581/pexels-photo-5082581.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
  // wifi/network — router/cables setup
  'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
  // smart home — tablet controlling smart home
  'https://images.pexels.com/photos/4050287/pexels-photo-4050287.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
];

export default function BeforeAfter() {
  const { t } = useI18n();
  const b = t.beforeAfter;

  return (
    <section className="py-14 lg:py-20 bg-white relative">
      {/* Top fade from reviews section */}
      <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-[#f8f9fb]/50 to-transparent pointer-events-none" />

      {/* Subtle right glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[360px] h-[280px] bg-blue-50/30 rounded-full blur-3xl translate-x-1/3" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="h-px w-6 bg-blue-600" />
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{b.label}</span>
            <div className="h-px w-6 bg-blue-600" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 leading-tight tracking-tight mb-3">
            {b.headline} <span className="text-blue-600">{b.headlineAccent}</span>
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">{b.sub}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {b.cases.map((c, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-0.5">
              <div className="relative h-44 overflow-hidden">
                <img src={caseImages[i]} alt={c.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 bg-blue-600/90 backdrop-blur-sm text-white text-[11px] font-semibold rounded-full">
                    {c.tag}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-navy-900 text-[14px] mb-3.5">{c.title}</h3>
                <div className="space-y-3.5">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-5 h-5 rounded-full bg-red-50 border border-red-100 flex items-center justify-center">
                        <div className="w-2 h-0.5 bg-red-400 rounded" />
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-red-400 uppercase tracking-wider mb-1">{b.beforeLabel}</p>
                      <p className="text-[12px] text-gray-500 leading-relaxed">{c.before}</p>
                    </div>
                  </div>
                  <div className="h-px bg-gray-100" />
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-5 h-5 rounded-full bg-green-50 border border-green-100 flex items-center justify-center">
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-green-500 uppercase tracking-wider mb-1">{b.afterLabel}</p>
                      <p className="text-[12px] text-gray-600 leading-relaxed">{c.after}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#f8f9fb]/50 to-transparent pointer-events-none" />
    </section>
  );
}
