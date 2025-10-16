"use client";

import ServicesSlider from "./components/ServicesSlider";
import SliderControls from "@/components/ui/SliderControls";
import { useRef, useState } from "react";

export default function ServicesSection() {
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className=" px-6 sm:px-8 lg:px-16 py-32 bg-[var(--soft-yellow)]">
      <div className="flex items-center justify-between mb-8">
        <h2 className="titles-black text-left">სერვისები</h2>

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

      <ServicesSlider
        swiperRef={swiperRef}
        setIsBeginning={setIsBeginning}
        setIsEnd={setIsEnd}
      />
    </section>
  );
}
