// components/ui/IconButton.tsx
"use client";

import { ReactNode } from "react";

interface IconButtonProps {
  icon: ReactNode;
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function IconButton({
  icon,
  children,
  onClick,
  className = "",
}: IconButtonProps) {
  const baseClasses =
    "inline-flex items-center gap-2 rounded-full font-medium btn-dark";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${className}`}
    >
      {children && <span>{children}</span>}
      <span className=" btn-light p-2 rounded-full text-black hover:text-white duration-400 ease-in-out">{icon}</span>
    </button>
  );
}
