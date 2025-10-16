
import { FUEL_NAME_TRANSLATIONS } from "@/constants/FuelTranslations";
import { api } from "./api";

export interface Price {
  series: string;
  name: string;
  value: number;
  units: string;
  period: string;
}

//ეს არ არის მიზანშეწონილი პროექტებისთვის, მაგრამ გატესტვა რომ შეძლოთ, ამ ფაილშივე ვატან api key-ს
const EIA_API_KEY = "J0505p7LtSChyli3SXvIbodoOg39IM5YYi6BBqXU";

interface EIAResponseData {
  series: string;
  "product-name"?: string;
  "series-description": string;
  value: string | number;
  units: string;
  period: string;
}

interface EIAApiResponse {
  response: {
    data: EIAResponseData[];
  };
  warnings?: { description: string }[];
}

export async function fetchPrices(signal?: AbortSignal): Promise<Price[]> {

  const url = "https://api.eia.gov/v2/petroleum/pri/gnd/data/";

  //უკან დაბრუნებს ბოლო კვირის ფასებს ყველა სერიისთვის

  const today = new Date();
  const endDate = today.toISOString().split("T")[0]; 
  const startDate = new Date(today);
  startDate.setFullYear(today.getFullYear() - 1);
  const start = startDate.toISOString().split("T")[0];

  const { data } = await api.get<EIAApiResponse>(url, {
    params: {
      api_key: EIA_API_KEY,
      frequency: "weekly",
      data: ["value"],
      facets: {
        series: [
          "EMM_EPMR_PTE_NUS_DPG",
          "EMM_EPMM_PTE_NUS_DPG",
          "EMM_EPMP_PTE_NUS_DPG",
          "EMD_EPD2D_PTE_NUS_DPG",
        ],
      },
      sort: [{ column: "period", direction: "desc" }],
      start,
      end: endDate,
      offset: 0,
      length: 100,
    },
    signal,
  });

  if (data.warnings?.length) {
    console.warn("⚠️ EIA API Warning:", data.warnings[0].description);
  }

  const latestBySeries: Record<string, Price> = {};


  // გამოვარჩიოთ მხოლოდ ბოლო მონაცემი თითოეული სერიისთვის
  for (const d of data.response.data) {
    if (!latestBySeries[d.series]) {
      const originalName = d["product-name"] || d["series-description"];
      const translatedName =
        FUEL_NAME_TRANSLATIONS[originalName] || originalName;

      latestBySeries[d.series] = {
        series: d.series,
        name: translatedName,
        value: Number(d.value),
        units: d.units,
        period: d.period,
      };
    }
  }

  return Object.values(latestBySeries);
}
