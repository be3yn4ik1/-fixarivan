interface PricingCardProps {
  title: string;
  from: string;
  description: string;
  note?: string;
  badge?: string;
  popular?: boolean;
  sameDay?: boolean;
}

export default function PricingCard({ title, from, description, note, badge, popular, sameDay }: PricingCardProps) {
  return (
    <div className={`relative bg-white rounded-2xl p-5 transition-all duration-200 group cursor-default ${
      popular
        ? 'border-2 border-blue-500 shadow-card'
        : 'border border-gray-100 hover:border-blue-200 hover:shadow-card'
    }`}>
      {popular && (
        <div className="absolute -top-3 left-5">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
            Most requested
          </span>
        </div>
      )}
      {badge && !popular && (
        <div className="absolute -top-3 left-5">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-navy-900 text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
            {badge}
          </span>
        </div>
      )}

      <div className="mb-3">
        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">starting from</p>
        <p className={`text-3xl font-black mt-0.5 ${popular ? 'text-blue-600' : 'text-navy-900 group-hover:text-blue-600 transition-colors'}`}>
          {from}
        </p>
      </div>

      <h3 className="text-sm font-semibold text-navy-900 mb-1.5 leading-snug">{title}</h3>
      <p className="text-xs text-gray-500 leading-relaxed">{description}</p>

      <div className="mt-3 pt-3 border-t border-gray-100 flex flex-wrap gap-1.5">
        <span className="inline-flex items-center gap-1 text-[10px] text-gray-400">
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Visit included
        </span>
        {sameDay && (
          <span className="inline-flex items-center gap-1 text-[10px] text-green-600 font-medium">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            Same-day available
          </span>
        )}
        {note && (
          <span className="text-[10px] text-gray-400 italic">{note}</span>
        )}
      </div>
    </div>
  );
}
