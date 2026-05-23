import { useState } from 'react';
import { Send, Lock } from 'lucide-react';
import { useI18n } from '../../i18n';

interface ContactFormProps {
  serviceOptions?: string[];
  placeholder?: string;
}

export default function ContactForm({
  serviceOptions = [],
  placeholder,
}: ContactFormProps) {
  const { t } = useI18n();
  const cf = t.common.contactForm;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-navy-900 mb-2">{cf.successTitle}</h3>
        <p className="text-sm text-gray-500 max-w-xs">{cf.successSub}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
            {cf.namePlaceholder} <span className="text-blue-600">*</span>
          </label>
          <input
            required
            type="text"
            placeholder={cf.namePlaceholder}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-navy-900 placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white transition-all"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
            {cf.phonePlaceholder}
          </label>
          <input
            type="tel"
            placeholder="+358 40 123 4567"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-navy-900 placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
          Email <span className="text-blue-600">*</span>
        </label>
        <input
          required
          type="email"
          placeholder="you@example.com"
          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-navy-900 placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white transition-all"
        />
      </div>

      {serviceOptions.length > 0 && (
        <div>
          <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
            Service type
          </label>
          <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-navy-900 focus:outline-none focus:border-blue-400 focus:bg-white transition-all appearance-none cursor-pointer">
            <option value="">Select a service</option>
            {serviceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
      )}

      <div>
        <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
          {cf.messagePlaceholder} <span className="text-blue-600">*</span>
        </label>
        <textarea
          required
          rows={4}
          placeholder={placeholder ?? cf.messagePlaceholder}
          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-navy-900 placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md text-sm"
      >
        {cf.submit}
        <Send size={15} />
      </button>

      <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400">
        <Lock size={11} />
        Your data is safe and will never be shared.
      </div>
    </form>
  );
}
