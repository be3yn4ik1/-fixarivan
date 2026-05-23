import { Shield, Clock, ThumbsUp, MessageCircle } from 'lucide-react';
import { useI18n } from '../i18n';

const guaranteeIcons = [Shield, Clock, ThumbsUp, MessageCircle];

export default function ServiceGuarantee() {
  const { t } = useI18n();

  return (
    <section className="py-10 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {t.guarantee.items.map((g, i) => {
            const Icon = guaranteeIcons[i];
            return (
              <div key={g.title} className="flex gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-navy-900 mb-1">{g.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{g.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
