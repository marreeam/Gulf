import CountUp from "react-countup";
import { Price } from "@/services/FetchPrices";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

interface PricesListProps {
  prices?: Price[];
  isLoading?: boolean;
  error?: any;
}

export default function PricesList({ prices, isLoading, error }: PricesListProps) {
  if (isLoading) return <LoadingSpinner />;
  if (error) return <p className="text-red-500">Error loading prices</p>;
  if (!prices || prices.length === 0) return <p>No prices available</p>;

  return (
    <div className="w-full overflow-x-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-gray-50 rounded-4xl p-6">
        {prices.map((price) => (
          <div
            key={price.series}
            className="flex flex-col justify-center items-center gap-4 p-6 rounded-xl min-h-[150px]"
          >
            <span className="bold-medium-text text-center">{price.name}</span>
            <span className="text-4xl font-bold">
              $
              <CountUp
                start={0}
                end={price.value}
                decimals={2}
                duration={4.5}
                separator=","
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
