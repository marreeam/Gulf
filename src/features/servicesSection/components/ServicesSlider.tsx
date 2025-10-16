"use client";

import { SERVICES } from "@/constants/services";
import ServiceCard from "./ServiceCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import { motion } from "framer-motion";

interface ServicesSliderProps {
  swiperRef: React.MutableRefObject<any>;
  setIsBeginning: (value: boolean) => void;
  setIsEnd: (value: boolean) => void;
}

export default function ServicesSlider({
  swiperRef,
  setIsBeginning,
  setIsEnd,
}: ServicesSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef}>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);

          swiper.on("slideChange", () => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          });
        }}
        spaceBetween={32}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 3 },
        }}
        modules={[Navigation]}
        speed={600}
        autoHeight={true} 
      >
        {SERVICES.map((service, index) => (
        <SwiperSlide key={service.id} className="flex">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: "easeOut",
          }}
          className="flex flex-1 flex-col"
        >
          <ServiceCard className="flex-1 flex flex-col" service={service} />
        </motion.div>
      </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
