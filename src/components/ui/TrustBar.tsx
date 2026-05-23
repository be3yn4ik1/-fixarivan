import { type ReactNode } from 'react';

interface TrustItem {
  icon: ReactNode;
  label: string;
  sub: string;
}

interface TrustBarProps {
  items: TrustItem[];
}

export default function TrustBar({ items }: TrustBarProps) {
  return (
    <div className="border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex items-stretch overflow-x-auto scrollbar-none">
          {items.map((item, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 px-5 py-2 flex-shrink-0 ${i < items.length - 1 ? 'border-r border-gray-200' : ''}`}
            >
              <div className="w-8 h-8 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 text-blue-600">
                {item.icon}
              </div>
              <div>
                <p className="text-xs font-semibold text-navy-900 whitespace-nowrap">{item.label}</p>
                <p className="text-xs text-gray-400 whitespace-nowrap">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
