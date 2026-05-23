interface SectionLabelProps {
  children: string;
  centered?: boolean;
}

export default function SectionLabel({ children, centered }: SectionLabelProps) {
  return (
    <div className={`inline-flex items-center gap-2 mb-4 ${centered ? 'mx-auto' : ''}`}>
      <div className="h-px w-6 bg-blue-600" />
      <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{children}</span>
    </div>
  );
}
