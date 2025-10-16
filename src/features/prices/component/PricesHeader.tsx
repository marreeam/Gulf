"use client";

import { useState } from "react";
import IconButton from "@/components/ui/IconButton";
import { ChevronRight } from "lucide-react";
import Modal from "@/components/ui/Modal";
import { usePricesHistory } from "@/hook/usePricesHistory";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

export default function PricesHeader() {
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);
  const { data: prices, isLoading, isError } = usePricesHistory();

  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="titles-black">ფასები</h2>
        <IconButton
          icon={<ChevronRight />}
          onClick={() => setIsArchiveOpen(true)}
        >
          არქივი
        </IconButton>
      </div>

      <Modal isOpen={isArchiveOpen} onClose={() => setIsArchiveOpen(false)}>
        <h3 className="text-xl font-bold mb-4 text-[var(--dark-blue)]">
          ფასების არქივი
        </h3>

        <div className="overflow-x-auto max-h-[60vh]">
          {isLoading && (
            <LoadingSpinner/>
          )}
          {isError && (
            <p className="text-center text-red-500 py-6">
              ვერ მოხერხდა ფასების ჩატვირთვა
            </p>
          )}
          {!isLoading && !isError && prices && prices.length > 0 && (
            <table className="w-full text-sm border border-gray-200 rounded-2xl overflow-hidden">
              <thead className="bg-gray-100 sticky top-0">
                <tr>
                  <th className="p-3 text-left font-semibold">თარიღი</th>
                  <th className="p-3 text-left font-semibold">ბენზინი</th>
                  <th className="p-3 text-left font-semibold">ფასი</th>
                </tr>
              </thead>
              <tbody>
                {prices.map((price, idx) => (
                  <tr
                    key={idx}
                    className="border-t hover:bg-gray-50 transition-colors"
                  >
                    <td className="p-3">{price.period}</td>
                    <td className="p-3">{price.name}</td>
                    <td className="p-3 text-[rgb(238,118,62)] font-semibold">
                      ${price.value.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {!isLoading && !isError && prices && prices.length === 0 && (
            <p className="text-center text-gray-500 py-6">არქივი ცარიელია.</p>
          )}
        </div>
      </Modal>
    </>
  );
}
