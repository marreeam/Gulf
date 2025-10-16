"use client";

import { useRef, useState } from "react";
import { useFetchNews } from "@/hook/useFetchNews";
import NewsSlider from "./components/NewsSlider";
import SliderControls from "@/components/ui/SliderControls";
import IconButton from "@/components/ui/IconButton";
import { Layers } from "lucide-react";

export default function News() {
  const query = "Apple";
  const { data, isLoading, isError } = useFetchNews(query); 
  const articles = data?.articles ?? [];

  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  if (isLoading) return <p>Loading news...</p>;
  if (isError) return <p>Error loading news.</p>;
  if (!articles.length) return <p>No news found.</p>;

  return (
    <section className="px-6 sm:px-8 lg:px-16 py-32">
      <div className="flex items-center justify-between mb-8">
        <h2 className="titles-black text-left">სიახლეები</h2>
        <div className="flex gap-14">
        <IconButton icon={<Layers/>} className="hidden sm:flex" >სია</IconButton>

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

      <NewsSlider
        articles={articles}
        swiperRef={swiperRef}
        setIsBeginning={setIsBeginning}
        setIsEnd={setIsEnd}
      />
    </section>
  );
}
