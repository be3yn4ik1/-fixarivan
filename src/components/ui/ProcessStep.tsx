import { type ReactNode } from 'react';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
  isLast?: boolean;
  variant?: 'default' | 'compact';
}

export default function ProcessStep({ number, title, description, icon, isLast, variant = 'default' }: ProcessStepProps) {
  if (variant === 'compact') {
    return (
      <div className="flex gap-4">
        <div className="flex flex-col items-center">
          <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 text-white shadow-sm">
            {icon}
          </div>
          {!isLast && <div className="w-px flex-1 bg-blue-100 my-2 min-h-[24px]" />}
        </div>
        <div className="pb-6">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">{number}</span>
          </div>
          <h3 className="text-sm font-semibold text-navy-900 mb-1">{title}</h3>
          <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start relative">
      <div className="flex items-center gap-3 mb-4 w-full">
        <div className="w-11 h-11 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0 text-blue-600">
          {icon}
        </div>
        {!isLast && (
          <div className="hidden lg:flex flex-1 items-center">
            <div className="flex-1 border-t border-dashed border-blue-200" />
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#93c5fd" className="flex-shrink-0 -ml-1">
              <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.75.75 0 1 1 1.06-1.06l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z" />
            </svg>
          </div>
        )}
      </div>
      <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-1">{number}</span>
      <h3 className="text-sm font-semibold text-navy-900 mb-1.5">{title}</h3>
      <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
}
