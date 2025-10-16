import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchPrices,Price } from "@/services/FetchPrices";


export function useFuelPrices(): UseQueryResult<Price[], Error> {
  return useQuery<Price[], Error>({
    queryKey: ["fuelPrices"],
    queryFn: ({ signal }) => fetchPrices(signal), 
    staleTime: 10 * 60 * 1000, 
    gcTime: 20 * 60 * 1000,
    refetchOnWindowFocus: false,
    retry: 1,
  });
}
