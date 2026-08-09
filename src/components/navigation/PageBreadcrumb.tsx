import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export const PageBreadcrumb = ({ items, className = "" }: { items: BreadcrumbItem[]; className?: string }) => (
  <nav aria-label="Fil d’Ariane" className={`flex flex-wrap items-center gap-2 text-sm text-foreground/70 ${className}`}>
    <Link to="/" className="transition hover:text-primary">Accueil</Link>
    {items.map((item) => (
      <span key={`${item.href ?? "current"}-${item.label}`} className="flex items-center gap-2">
        <ChevronRight className="h-4 w-4 shrink-0" />
        {item.href ? (
          <Link to={item.href} className="transition hover:text-primary">{item.label}</Link>
        ) : (
          <span className="text-foreground">{item.label}</span>
        )}
      </span>
    ))}
  </nav>
);
