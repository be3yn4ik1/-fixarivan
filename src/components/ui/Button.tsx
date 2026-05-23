import { type ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  external?: boolean;
  type?: 'button' | 'submit';
}

const base = 'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2';

const variants: Record<Variant, string> = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow-md',
  secondary: 'bg-navy-900 hover:bg-navy-800 text-white shadow-sm hover:shadow-md',
  ghost: 'bg-white hover:bg-gray-50 text-navy-900 border border-gray-200 hover:border-gray-300 shadow-soft',
  outline: 'bg-transparent hover:bg-blue-50 text-blue-600 border border-blue-200 hover:border-blue-400',
};

const sizes: Record<Size, string> = {
  sm: 'gap-1.5 px-4 py-2 text-sm rounded-xl',
  md: 'gap-2 px-5 py-2.5 text-sm rounded-xl',
  lg: 'gap-2.5 px-7 py-3.5 text-base rounded-2xl',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  icon,
  iconPosition = 'left',
  external = false,
  type = 'button',
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick}>
      {content}
    </button>
  );
}
