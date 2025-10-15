"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface SliderControlsProps {
  onPrev: () => void;
  onNext: () => void;
  bgColor?: string; 
  hoverColor?: string; 
  iconColor?: string; 
  size?: number; 
  className?: string;
}

export default function SliderControls({
  onPrev,
  onNext,
  bgColor = "bg-white/10",
  hoverColor = "hover:bg-white/20",
  iconColor = "text-white",
  size = 9,
  className = "",
}: SliderControlsProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <button
        onClick={onPrev}
        className={`flex h-12 w-12 items-center justify-center rounded-full ${bgColor} ${hoverColor} backdrop-blur-sm transition`}
      >
        <ChevronLeft className={`h-${size} w-${size} ${iconColor}`} />
      </button>
      <button
        onClick={onNext}
        className={`flex h-12 w-12 items-center justify-center rounded-full ${bgColor} ${hoverColor} backdrop-blur-sm transition`}
      >
        <ChevronRight className={`h-${size} w-${size} ${iconColor}`} />
      </button>
    </div>
  );
}
