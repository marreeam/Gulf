"use client";

import SliderControls from "@/components/ui/SliderControls";
import IconButton from "@/components/ui/IconButton";
import { Layers, LayoutGrid } from "lucide-react";

interface NewsHeaderProps {
  swiperRef: any;
  isBeginning: boolean;
  isEnd: boolean;
  isListView: boolean;
  onToggleView: () => void;
}

export default function NewsHeader({
  swiperRef,
  isBeginning,
  isEnd,
  isListView,
  onToggleView,
}: NewsHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-8 gap-3.5">
      <h2 className="titles-black text-left">სიახლეები</h2>

      <div className="flex gap-14 items-center">
      <IconButton
          icon={isListView ? <LayoutGrid /> : <Layers />}
          className="hidden sm:flex"
          onClick={onToggleView}
        >
          {isListView ? "ბარათები" : "სია"}
        </IconButton>

        {!isListView && (
          <SliderControls
            onPrev={() => swiperRef.current?.slidePrev()}
            onNext={() => swiperRef.current?.slideNext()}
            bgColor="bg-[var(--dark-blue)]"
            hoverBgColor="hover:bg-[rgb(237,241,248)]"
            iconColor="text-white"
            disabledPrev={isBeginning}
            disabledNext={isEnd}
          />
        )}
      </div>
    </div>
  );
}
