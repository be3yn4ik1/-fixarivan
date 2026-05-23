import { Star, Quote, MapPin } from 'lucide-react';
import { useI18n } from '../i18n';

const avatars = [
  'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=2',
  'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=2',
  'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=2',
  'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=2',
  'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=2',
  'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=2',
];

export default function Reviews() {
  const { t } = useI18n();
  const r = t.reviews;

  return (
    <section id="reviews" className="py-14 lg:py-20 bg-white relative">
      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-[#f8f9fb]/60 to-transparent pointer-events-none" />

      {/* Subtle blue glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[480px] h-[240px] bg-blue-50/35 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="h-px w-6 bg-blue-600" />
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{r.label}</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 leading-tight tracking-tight mb-2">
              {r.headline}
            </h2>
            <p className="text-gray-500 text-base">{r.sub}</p>
          </div>

          {/* Rating pill */}
          <div className="flex items-center gap-3 bg-[#f8f9fb] border border-gray-100 rounded-2xl px-5 py-4 self-start shadow-soft">
            <div className="text-3xl font-black text-navy-900">5.0</div>
            <div>
              <div className="flex gap-0.5 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="#f59e0b" className="text-amber-400" />
                ))}
              </div>
              <p className="text-[11px] text-gray-400">100+ Google reviews</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {r.items.map((review, i) => (
            <div
              key={i}
              className="bg-[#f8f9fb] border border-gray-100/80 rounded-2xl p-5 hover:bg-white hover:shadow-card hover:border-gray-200 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3.5">
                <div className="flex items-center gap-2.5">
                  <img src={avatars[i]} alt={review.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="text-[13px] font-semibold text-navy-900">{review.name}</p>
                    <div className="flex items-center gap-1">
                      <MapPin size={9} className="text-blue-500" />
                      <p className="text-[11px] text-gray-400">{review.location}</p>
                    </div>
                  </div>
                </div>
                <Quote size={16} className="text-blue-100 flex-shrink-0" />
              </div>

              <div className="flex gap-0.5 mb-2.5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={12} fill="#f59e0b" className="text-amber-400" />
                ))}
              </div>

              <p className="text-[13px] text-gray-600 leading-relaxed mb-3.5">{review.text}</p>

              <span className="inline-flex items-center px-2.5 py-1 bg-blue-50 text-blue-600 text-[11px] font-semibold rounded-full border border-blue-100/60">
                {review.service}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#f8f9fb]/50 to-transparent pointer-events-none" />
    </section>
  );
}
