"use client";

import { useRef, useState } from "react";
import { useFetchNews } from "@/hook/useFetchNews";
import GenericSwiper from "@/components/ui/GenericSwiper";
import NewsCard from "./components/NewsCard";
import NewsHeader from "./components/NewsHeader";
import NewsList from "./components/NewsList";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

export default function News() {
  const query = "Apple";
  const { data, isLoading, isError } = useFetchNews(query);
  const articles = data?.articles ?? [];

  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [isListView, setIsListView] = useState(false);

  return (
    <section className="px-8 py-12 sm:px-8 sm:py-32">
      <NewsHeader
        swiperRef={swiperRef}
        isBeginning={isBeginning}
        isEnd={isEnd}
        isListView={isListView}
        onToggleView={() => setIsListView((prev) => !prev)}
      />

      {isLoading && <LoadingSpinner />}
      {isError && (
        <div className="flex justify-center items-center h-64">
          <p className="text-center text-red-500 text-lg">Error loading news.</p>
        </div>
      )}

      {!isLoading && !isError && articles.length === 0 && (
        <div className="flex justify-center items-center h-64">
          <p className="text-center text-gray-500">No news found.</p>
        </div>
      )}

      {!isLoading && !isError && articles.length > 0 && (
        isListView ? (
          <NewsList articles={articles} />
        ) : (
          <section className="flex justify-center">
          <div className="w-full max-w-[1600px]">
            <GenericSwiper
              items={articles}
              renderItem={(article) => <NewsCard news={article} />}
              swiperRef={swiperRef}
              slidesPerViewConfig={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 1.5 },
                1024: { slidesPerView: 2.3 },
              }}
              setIsBeginning={setIsBeginning}
              setIsEnd={setIsEnd}
              showMobileDots={true}
            />
          </div>
        </section>
        )
      )}
    </section>
  );
}
