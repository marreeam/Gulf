"use client";

interface ButtonProps {
  variant?: "dark" | "light";
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({ variant = "dark", children, onClick }: ButtonProps) {
  const baseClass = "px-4 py-2 rounded font-medium transition-colors";
  const variantClass =
    variant === "dark" ? "btn-dark" : "btn-light";

  return (
    <button className={`${baseClass} ${variantClass}`} onClick={onClick}>
      {children}
    </button>
  );
}
