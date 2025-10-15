"use client";

import { useFuelPrices } from "@/hook/useFuelPrices";

import PricesHeader from "./component/PricesHeader";
import PricesList from "./component/PricesList";

export default function PricesSection() {
  const { data, isLoading, error } = useFuelPrices();

  return (
    <div className="px-6 sm:px-8 lg:px-16 py-32 flex flex-col gap-12">
      <PricesHeader onArchiveClick={() => console.log("Clicked!")} />
      <PricesList prices={data} isLoading={isLoading} error={error} />
    </div>
  );
}
