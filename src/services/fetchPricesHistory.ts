import { FUEL_NAME_TRANSLATIONS } from "@/constants/FuelTranslations";
import { api } from "./api";
import { Price } from "./FetchPrices";

interface EIAResponseData {
  series: string;
  "product-name"?: string;
  "series-description": string;
  value: string | number;
  units: string;
  period: string;
}

interface EIAApiResponse {
  response: { data: EIAResponseData[] };
  warnings?: { description: string }[];
}

const EIA_API_KEY = "J0505p7LtSChyli3SXvIbodoOg39IM5YYi6BBqXU";

export async function fetchPricesHistory(signal?: AbortSignal): Promise<Price[]> {
  const url = "https://api.eia.gov/v2/petroleum/pri/gnd/data/";

  const today = new Date();
  const endDate = today.toISOString().split("T")[0];
  const startDate = new Date(today);
  startDate.setMonth(today.getMonth() - 1); 
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
      length: 10,
    },
    signal,
  });

  if (data.warnings?.length) {
    console.warn("⚠️ EIA API Warning:", data.warnings[0].description);
  }

  return data.response.data.map((d) => ({
    series: d.series,
    name:
      FUEL_NAME_TRANSLATIONS[d["product-name"] || d["series-description"]] ||
      d["product-name"] ||
      d["series-description"],
    value: Number(d.value),
    units: d.units,
    period: d.period,
  }));
}
