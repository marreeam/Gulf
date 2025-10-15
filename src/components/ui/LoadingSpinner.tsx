"use client";

import { Loader2 } from "lucide-react";

interface LoadingSpinnerProps {
  size?: number;
  className?: string;
}

export default function LoadingSpinner({
  size = 32,
  className = "",
}: LoadingSpinnerProps) {
  return (
    <div className="flex items-center justify-center py-10">
      <Loader2
        className={`animate-spin text-dark-blue ${className}`}
        style={{ width: size, height: size }}
      />
    </div>
  );
}
