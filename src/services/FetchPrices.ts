import axios from "axios";
import { FUEL_NAME_TRANSLATIONS } from "@/constants/FuelTranslations";

export interface Price {
  series: string;
  name: string;
  value: number;
  units: string;
  period: string;
}

const EIA_API_KEY = process.env.NEXT_PUBLIC_EIA_API_KEY;

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

/**
 * Fetch latest fuel prices from EIA API
 * Returns latest price per series
 */
export async function fetchPrices(signal?: AbortSignal): Promise<Price[]> {
  if (!EIA_API_KEY) {
    throw new Error("EIA API Key missing. Please set NEXT_PUBLIC_EIA_API_KEY in env.");
  }


  const url = "https://api.eia.gov/v2/petroleum/pri/gnd/data/";

  const { data } = await axios.get<EIAApiResponse>(url, {
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
      start: "2025-01-01",
      end: "2025-10-13",
      offset: 0,
      length: 100, 
    },
    signal,
  });

  if (data.warnings?.length) {
    console.warn("⚠️ EIA API Warning:", data.warnings[0].description);
  }

  const latestBySeries: Record<string, Price> = {};

  for (const d of data.response.data) {
    if (!latestBySeries[d.series]) {
      const originalName = d["product-name"] || d["series-description"];
      const translatedName = FUEL_NAME_TRANSLATIONS[originalName] || originalName;

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
