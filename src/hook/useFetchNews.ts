import { useQuery } from "@tanstack/react-query";
import { fetchNews, NewsArticle } from "@/services/fetchNews";

interface NewsResponse {
  articles: NewsArticle[];
  totalResults: number;
}

export function useFetchNews(query: string = "Fuel") {
  return useQuery<NewsResponse, Error>({
    queryKey: ["news", query],
    queryFn: () => fetchNews(query),
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });
}

