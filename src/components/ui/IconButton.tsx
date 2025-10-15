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
    "group inline-flex items-center gap-2 rounded-full font-medium btn-dark transition-all duration-400 ease-in-out cursor-pointer";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${className}`}
    >
      {children && <span>{children}</span>}
      <span
        className="
          btn-light 
          p-2 rounded-full 
          text-black 
          transition-all duration-400 ease-in-out 
          group-hover:bg-[var(--dark-blue)] group-hover:text-white
        "
      >
        {icon}
      </span>
    </button>
  );
}
