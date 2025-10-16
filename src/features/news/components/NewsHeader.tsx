"use client";

import SliderControls from "@/components/ui/SliderControls";
import IconButton from "@/components/ui/IconButton";
import { Layers } from "lucide-react";

interface NewsHeaderProps {
  swiperRef: any;
  isBeginning: boolean;
  isEnd: boolean;
}

export default function NewsHeader({ swiperRef, isBeginning, isEnd }: NewsHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-8 gap-3.5">
      <h2 className="titles-black text-left">სიახლეები</h2>
      <div className="flex gap-14">
        <IconButton icon={<Layers />} className="hidden sm:flex">
          სია
        </IconButton>

        <SliderControls
          onPrev={() => swiperRef.current?.slidePrev()}
          onNext={() => swiperRef.current?.slideNext()}
          bgColor="bg-[var(--dark-blue)]"
          hoverBgColor="hover:bg-[rgb(237,241,248)]"
          iconColor="text-white"
          disabledPrev={isBeginning}
          disabledNext={isEnd}
        />
      </div>
    </div>
  );
}
