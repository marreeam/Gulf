import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchPricesHistory } from "@/services/fetchPricesHistory";
import { Price } from "@/services/FetchPrices";


export function usePricesHistory(): UseQueryResult<Price[], Error> {
  return useQuery<Price[], Error>({
    queryKey: ["pricesHistory"],
    queryFn: ({ signal }) => fetchPricesHistory(signal),
    staleTime: 10 * 60 * 1000, 
    gcTime: 20 * 60 * 1000, 
    refetchOnWindowFocus: false,
    retry: 1,
  });
}
