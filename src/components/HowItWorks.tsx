import { MessageCircle, Clock, Wrench, Smile, Navigation, Phone } from 'lucide-react';
import { useI18n } from '../i18n';

const bulletIcons = [Clock, Wrench, Smile];

// On-site/field-service focused images
const stepImages = [
  // Step 1: Contact — someone on phone, reaching out
  'https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=900&h=560&dpr=1',
  // Step 2: We come to you — technician with gear / arriving
  'https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=520&h=380&dpr=1',
  // Step 3: We fix — hands on device repair
  'https://images.pexels.com/photos/5082581/pexels-photo-5082581.jpeg?auto=compress&cs=tinysrgb&w=520&h=380&dpr=1',
  // Step 4: You're satisfied — happy customer
  'https://images.pexels.com/photos/7108344/pexels-photo-7108344.jpeg?auto=compress&cs=tinysrgb&w=900&h=480&dpr=1',
];
const stepSpan = ['col-span-2', 'col-span-1', 'col-span-1', 'col-span-2'];
const stepHeight = ['h-52', 'h-40', 'h-40', 'h-44'];

export default function HowItWorks() {
  const { t } = useI18n();
  const h = t.howItWorks;

  return (
    <section id="how-it-works" className="py-14 lg:py-20 bg-white relative">
      {/* Top fade from services bg */}
      <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-[#f8f9fb]/60 to-transparent pointer-events-none" />

      {/* Subtle blue glow behind section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-blue-50/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">

          {/* LEFT: text block */}
          <div className="lg:w-[360px] flex-shrink-0 lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="h-px w-6 bg-blue-600" />
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{h.label}</span>
            </div>

            <h2 className="text-3xl lg:text-[38px] font-bold text-navy-900 leading-[1.1] tracking-tight mb-3">
              {h.headline}{' '}
              <span className="text-blue-600">{h.headlineAccent}</span>
            </h2>

            <p className="text-[14px] text-gray-500 leading-relaxed mb-6">{h.sub}</p>

            {/* Mobile workshop arrival identity card */}
            <div className="bg-[#f8f9fb] border border-gray-100 rounded-2xl p-4 mb-6">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-7 h-7 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Navigation size={12} className="text-white" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-navy-900 uppercase tracking-wide">Mobile Workshop</p>
                  <p className="text-[10px] text-gray-400">Fully equipped van arrives to you</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full w-3/5 bg-blue-500 rounded-full" />
                </div>
                <span className="text-[10px] text-blue-600 font-semibold">En route</span>
              </div>
            </div>

            <div className="space-y-4 mb-7">
              {h.bullets.map((b, i) => {
                const Icon = bulletIcons[i];
                return (
                  <div key={b.title} className="flex items-start gap-3.5">
                    <div className="w-8 h-8 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon size={14} className="text-navy-900" />
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-navy-900 mb-0.5">{b.title}</p>
                      <p className="text-[12px] text-gray-500 leading-relaxed">{b.sub}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5">
              <a
                href="https://wa.me/358000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all text-sm shadow-sm hover:shadow-[0_6px_20px_rgba(37,99,235,0.30)]"
              >
                <MessageCircle size={15} />
                {h.ctaWhatsapp}
              </a>
              <a
                href="tel:+358000000000"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white hover:bg-gray-50 text-navy-900 font-semibold rounded-xl border border-gray-200 hover:border-gray-300 transition-all text-sm"
              >
                <Phone size={14} className="text-blue-600" />
                +358 000 000 000
              </a>
            </div>
          </div>

          {/* RIGHT: image mosaic */}
          <div className="flex-1 grid grid-cols-2 gap-3">
            {h.steps.map((step, i) => (
              <div
                key={step.num}
                className={`relative rounded-2xl overflow-hidden group cursor-default ${stepSpan[i]} ${stepHeight[i]}`}
              >
                <img
                  src={stepImages[i]}
                  alt={step.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                {/* Step number badge */}
                <div className="absolute top-3 left-3 w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white text-[10px] font-bold">{step.num}</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold text-[13px] leading-snug">{step.title}</p>
                  <p className="text-white/65 text-[11px] mt-0.5 leading-relaxed">{step.sub}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
