"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchPrices, Price } from "@/services/fetchPrices";
import IconButton from "@/components/ui/IconButton";
import { ChevronRight } from "lucide-react";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

export default function PricesSection() {
  const { data, isLoading, error } = useQuery<Price[]>({
    queryKey: ["fuelPrices"],
    queryFn: fetchPrices,
  });

  if (isLoading) return <LoadingSpinner className="animate-spin text-dark-blue " />;
  if (error || !data) return <p>Error loading prices</p>;

  return (
    <section className="px-6 sm:px-8 lg:px-16 py-6 flex flex-col gap-10">
      <div className="flex items-center justify-between">
        <h2 className="titles-black">ფასები</h2>
        <IconButton
          icon={<ChevronRight />}
          onClick={() => console.log("Clicked!")}
        >
          არქივი
        </IconButton>
      </div>

      <div className="w-full">
        <div
          className="
            flex flex-wrap items-stretch justify-start
            bg-gray-50 rounded-4xl px-4 sm:px-6 py-6
          "
        >
          {data.map((price, index) => (
            <div
              key={price.series}
              className={`
                flex flex-col justify-between items-center text-center
                flex-1 min-w-[140px] sm:min-w-[160px] lg:min-w-[180px]
                p-4 sm:p-6
                ${index !== data.length - 1 ? "border-b sm:border-r sm:border-b-0 border-gray-200" : ""}
              `}
            >
              <span className="bold-medium-text whitespace-nowrap">
                {price.name}
              </span>
              <span className="text-2xl sm:text-3xl font-semibold text-gray-900">
                ${price.value.toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
