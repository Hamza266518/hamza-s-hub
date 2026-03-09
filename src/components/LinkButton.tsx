import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface LinkButtonProps {
  href: string;
  icon?: ReactNode;
  children: ReactNode;
  variant?: "default" | "primary" | "gradient";
  isInternal?: boolean;
}

const variantStyles = {
  default:
    "bg-card hover:bg-secondary border border-border hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5",
  primary:
    "bg-primary text-primary-foreground hover:opacity-90 hover:shadow-lg hover:shadow-primary/10",
  gradient:
    "bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 hover:shadow-xl hover:shadow-primary/20 hover:scale-[1.02]",
};

const LinkButton = ({ href, icon, children, variant = "default", isInternal = false }: LinkButtonProps) => {
  const className = `flex items-center gap-3 w-full px-5 py-4 rounded-2xl font-medium transition-all duration-300 ${variantStyles[variant]}`;

  if (isInternal) {
    return (
      <Link to={href} className={className}>
        {icon && <span className="text-xl shrink-0">{icon}</span>}
        <span className="flex-1 text-center">{children}</span>
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {icon && <span className="text-xl shrink-0">{icon}</span>}
      <span className="flex-1 text-center">{children}</span>
    </a>
  );
};

export default LinkButton;
