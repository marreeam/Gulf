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

export async function fetchPrices(): Promise<Price[]> {
  if (!EIA_API_KEY) {
    throw new Error("EIA API Key is not defined. Please set NEXT_PUBLIC_EIA_API_KEY in your environment variables.");
  }

  const url = `https://api.eia.gov/v2/petroleum/pri/gnd/data/?api_key=${EIA_API_KEY}&frequency=weekly&data[0]=value&facets[series][]=EMM_EPMR_PTE_NUS_DPG&facets[series][]=EMM_EPMM_PTE_NUS_DPG&facets[series][]=EMM_EPMP_PTE_NUS_DPG&facets[series][]=EMD_EPD2D_PTE_NUS_DPG&sort[0][column]=period&sort[0][direction]=desc&length=10`;

  const { data } = await axios.get(url);

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