"use client";

import IconButton from "@/components/ui/IconButton";
import { ChevronRight } from "lucide-react";

interface PricesHeaderProps {
  onArchiveClick?: () => void;
}

export default function PricesHeader({ onArchiveClick }: PricesHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="titles-black">ფასები</h2>
      <IconButton icon={<ChevronRight />} onClick={onArchiveClick}>
        არქივი
      </IconButton>
    </div>
  );
}
