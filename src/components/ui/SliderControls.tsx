"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface SliderControlsProps {
  onPrev: () => void;
  onNext: () => void;
  bgColor?: string;
  hoverBgColor?: string;
  iconColor?: string;
  hoverIconColor?: string;
  size?: number;
  className?: string;
  disabledPrev?: boolean;
  disabledNext?: boolean;
}

export default function SliderControls({
  onPrev,
  onNext,
  bgColor = "bg-[var(--dark-blue)]",
  hoverBgColor = "hover:bg-[var(--soft-yellow)]",
  iconColor = "text-white",
  hoverIconColor = "group-hover:text-black",
  size = 9,
  className = "",
  disabledPrev = false,
  disabledNext = false,
}: SliderControlsProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <button
        onClick={!disabledPrev ? onPrev : undefined}
        disabled={disabledPrev}
        className={`group  h-12 w-12 hidden sm:flex items-center justify-center rounded-full backdrop-blur-sm transition
          ${bgColor} ${!disabledPrev ? hoverBgColor : ""}
          ${disabledPrev ? "opacity-40 cursor-default" : "cursor-pointer"}
        `}
      >
        <ChevronLeft
          className={`h-${size} w-${size} ${iconColor} transition 
            ${!disabledPrev ? hoverIconColor : ""}
          `}
        />
      </button>

      <button
        onClick={!disabledNext ? onNext : undefined}
        disabled={disabledNext}
        className={`group flex h-12 w-12 items-center hidden sm:flex  justify-center rounded-full backdrop-blur-sm transition
          ${bgColor} ${!disabledNext ? hoverBgColor : ""}
          ${disabledNext ? "opacity-40 cursor-default" : "cursor-pointer"}
        `}
      >
        <ChevronRight
          className={`h-${size} w-${size} ${iconColor} transition 
            ${!disabledNext ? hoverIconColor : ""}
          `}
        />
      </button>
    </div>
  );
}
