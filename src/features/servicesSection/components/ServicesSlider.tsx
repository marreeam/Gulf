"use client";

import { SERVICES } from "@/constants/services";
import ServiceCard from "./ServiceCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
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
  const [cardHeight, setCardHeight] = useState(0);

  useEffect(() => {
    const heights = Array.from(document.querySelectorAll(".service-card")).map(
      (el) => el.clientHeight
    );
    if (heights.length) setCardHeight(Math.max(...heights));
  }, []);

  return (
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
      }}
      modules={[Navigation]}
      speed={600} 
    >
      {SERVICES.map((service, index) => (
        <SwiperSlide key={service.id} className="flex">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            className="w-full h-full"
          >
            <ServiceCard
              service={service}
              className="flex-grow service-card"
              style={{ height: cardHeight || "auto" }}
            />
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
