import { api } from "./api";

export interface NewsArticle {
  source: { id: string | null; name: string };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage?: string | null;
  publishedAt: string;
  content?: string | null;
}

interface NewsApiResponse {
  status: string;
  totalResults: number;
  articles: NewsArticle[];
  code?: string;
  message?: string;
}

// Api Keys ვატან ფაილში, რადგან თქვენთანაც იმუშაოს; რა თქმა უნდა , ეს რომ რეალური პროექტი იყოს, აქ არ გავატანდი; 
const NEWS_API_KEY = "9f275b07066541aba763209178f73911";


export async function fetchNews(
  query: string,
  signal?: AbortSignal
): Promise<{ articles: NewsArticle[]; totalResults: number }> {
  if (!NEWS_API_KEY) throw new Error("News API key missing");

  const { data } = await api.get<NewsApiResponse>(
    "https://newsapi.org/v2/everything",
    {
      params: { 
        q: query, 
        from: "2025-10-10", 
        sortBy: "popularity", 
        pageSize: 10,  
        apiKey: NEWS_API_KEY 
      },
      signal
    }
  );

  return {
    articles: data.articles ?? [],
    totalResults: data.totalResults ?? 0,
  };
}
