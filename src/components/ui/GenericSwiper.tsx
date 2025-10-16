"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

interface GenericSwiperProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  slidesPerViewConfig?: Record<number, { slidesPerView: number }>;
  spaceBetween?: number;
  swiperRef?: React.MutableRefObject<any>;
  showMobileDots?: boolean;
  setIsBeginning?: (value: boolean) => void; 
  setIsEnd?: (value: boolean) => void;
}

export default function GenericSwiper<T>({
  items,
  renderItem,
  slidesPerViewConfig,
  spaceBetween = 32,
  swiperRef,
  showMobileDots = true,
  setIsBeginning,
  setIsEnd,
}: GenericSwiperProps<T>) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="">
      <Swiper
        onSwiper={(swiper) => {
          if (swiperRef) swiperRef.current = swiper;
          setActiveIndex(swiper.activeIndex);

          setIsBeginning?.(swiper.isBeginning);
          setIsEnd?.(swiper.isEnd);

          swiper.on("slideChange", () => {
            setActiveIndex(swiper.activeIndex);
            setIsBeginning?.(swiper.isBeginning);
            setIsEnd?.(swiper.isEnd);
          });
        }}
        spaceBetween={spaceBetween}
        slidesPerView={1}
        breakpoints={slidesPerViewConfig}
        modules={[Navigation]}
        speed={500}
        autoHeight
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className="flex">
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
              {renderItem(item, index)}
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {showMobileDots && (
        <div className="flex justify-center mt-4 space-x-2 sm:hidden">
          {items.map((_, index) => (
            <span
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === activeIndex
                  ? "bg-[rgb(238,118,62)]"
                  : "bg-[rgb(236,178,149)]"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
