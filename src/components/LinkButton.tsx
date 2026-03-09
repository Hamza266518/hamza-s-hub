import { ReactNode } from "react";

interface LinkButtonProps {
  href: string;
  icon?: ReactNode;
  children: ReactNode;
  variant?: "default" | "primary" | "gradient";
}

const variantStyles = {
  default:
    "bg-card hover:bg-secondary border border-border hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5",
  primary:
    "bg-card hover:bg-secondary border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10",
  gradient:
    "bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 hover:shadow-xl hover:shadow-primary/20 hover:scale-[1.02]",
};

const LinkButton = ({ href, icon, children, variant = "default" }: LinkButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-3 w-full px-5 py-4 rounded-2xl font-medium transition-all duration-300 ${variantStyles[variant]}`}
    >
      {icon && <span className="text-xl shrink-0">{icon}</span>}
      <span className="flex-1 text-center">{children}</span>
    </a>
  );
};

export default LinkButton;
