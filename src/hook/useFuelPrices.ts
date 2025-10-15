import { useQuery, UseQueryOptions, UseQueryResult, QueryKey } from "@tanstack/react-query";
import { fetchPrices, Price } from "@/services/api/FetchPrices";

export function useFuelPrices(): UseQueryResult<Price[], Error> {
  const options: UseQueryOptions<Price[], Error, Price[], QueryKey> = {
    queryKey: ["fuelPrices"],
    queryFn: fetchPrices,
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  };

  return useQuery<Price[], Error>(options);
}
