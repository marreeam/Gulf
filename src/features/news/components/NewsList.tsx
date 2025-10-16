"use client";

import { NewsArticle } from "@/services/fetchNews";
import NewsCard from "./NewsCard";

export default function NewsList({ articles }: { articles: NewsArticle[] }) {
  return (
    <div className="grid grid-cols-1 gap-6">
      {articles.map((article, index) => (
        <NewsCard key={index} news={article} />
      ))}
    </div>
  );
}
