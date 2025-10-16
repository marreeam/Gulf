interface ButtonProps {
  variant?: "dark" | "light";
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export default function Button({ 
  variant = "dark", 
  children, 
  onClick, 
  type = "button", 
  className = "" 
}: ButtonProps) {
  const baseClass = "h-14 w-full text-base rounded-4xl font-medium transition-colors ";
  const variantClass = variant === "dark" ? "btn-dark" : "btn-light";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClass} ${variantClass} ${className}`}
    >
      {children}
    </button>
  );
}
