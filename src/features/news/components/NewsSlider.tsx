"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import NewsCard from "./NewsCard";
import { NewsArticle } from "@/services/fetchNews";

interface NewsSliderProps {
  articles: NewsArticle[];
  swiperRef: React.MutableRefObject<any>;
  setIsBeginning: (value: boolean) => void;
  setIsEnd: (value: boolean) => void;
}

export default function NewsSlider({
  articles,
  swiperRef,
  setIsBeginning,
  setIsEnd,
}: NewsSliderProps) {
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
        1024: { slidesPerView: 2.3 },
      }}
      modules={[Navigation]}
      speed={500}
      autoHeight
    >
      {articles.map((article, index) => (
        <SwiperSlide key={article.url} className="flex">
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
            <NewsCard news={article} />
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
