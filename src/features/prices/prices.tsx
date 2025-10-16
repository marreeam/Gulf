"use client";

import { useFuelPrices } from "@/hook/useFuelPrices";

import PricesHeader from "./component/PricesHeader";
import PricesList from "./component/PricesList";

export default function PricesSection() {
  const { data, isLoading, error } = useFuelPrices();

  return (
    <div className="px-8 py-12 sm:px-8 sm:py-32 flex flex-col gap-12">
      <PricesHeader />
      <PricesList prices={data} isLoading={isLoading} error={error} />
    </div>
  );
}
