"use client";

import Image from "next/image";
import { NewsArticle } from "@/services/fetchNews";
import { ChevronRight } from "lucide-react";

export default function NewsCard({ news }: { news: NewsArticle }) {
  return (
<article className="bg-white rounded-4xl p-3 flex flex-col sm:flex-row gap-0 sm:gap-4 h-[450px] border sm:h-80 border-gray-200">
  {news.urlToImage && (
    <div className="flex-shrink-0 sm:w-1/3 w-full h-auto rounded-2xl overflow-hidden">
      <img
        src={news.urlToImage}
        alt={news.title}
        className="w-full h-full object-cover"
      />
    </div>
  )}

  <div className="flex flex-col gap-5  w-full sm:w-2/3 p-5">
    <time className="text-xs text-gray-400">
      {new Date(news?.publishedAt).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })}
    </time>
    <h3 className="bold-medium-text">{news?.title}</h3>
    <p className="text-sm text-gray-600 flex-grow">
  {news?.description
    ? news.description.slice(0, 70) + "…"
    : news?.content?.slice(0, 9) + "…" || ""}
</p>

    <div className="flex items-center justify-between mt-4">
      <a
        href={news?.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[rgb(238,118,62)] hover:text-[rgb(236,178,149)] inline-flex items-center gap-2 font-semibold"
      >
        გაიგე მეტი <ChevronRight />
      </a>
    </div>
  </div>
</article>


  );
}
