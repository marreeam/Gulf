"use client";

import { useRef, useState } from "react";
import GenericSwiper from "@/components/ui/GenericSwiper";
import SliderControls from "@/components/ui/SliderControls";
import ServiceCard from "./components/ServiceCard";
import { SERVICES, Service } from "@/constants/Services";

export default function ServicesSection() {
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className="px-8 py-12 sm:px-8 sm:py-32 bg-[var(--soft-yellow)]">
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

      <GenericSwiper<Service>
        items={SERVICES}
        renderItem={(service) => <ServiceCard service={service} />}
        swiperRef={swiperRef}
        slidesPerViewConfig={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        setIsBeginning={setIsBeginning}
        setIsEnd={setIsEnd}
        showMobileDots={true}
      />
    </section>
  );
}
