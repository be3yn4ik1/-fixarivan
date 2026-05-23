import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  crumbs: Crumb[];
}

export default function Breadcrumb({ crumbs }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-8">
      {crumbs.map((crumb, i) => (
        <div key={i} className="flex items-center gap-1.5">
          {i > 0 && <ChevronRight size={12} className="text-gray-300" />}
          {crumb.href ? (
            <Link to={crumb.href} className="hover:text-blue-600 transition-colors">{crumb.label}</Link>
          ) : (
            <span className="text-gray-600 font-medium">{crumb.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
