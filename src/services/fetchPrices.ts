// services/fetchPrices.ts
import axios from "axios";

export interface Price {
  series: string;
  name: string;
  value: number;
  units: string;
  period: string;
}

const FUEL_NAME_TRANSLATIONS: Record<string, string> = {
  "Regular Gasoline": "რეგულარი",
  "Midgrade Gasoline": "მიდგრეიდი",
  "Premium Gasoline": "პრემიუმი",
  "No 2 Diesel": "დიზელი",
  "Ethanol": "ეთანოლი",
  "Kerosene": "კეროსინი",
};

export async function fetchPrices(): Promise<Price[]> {
  const { data } = await axios.get(
    "https://api.eia.gov/v2/petroleum/pri/gnd/data/?api_key=J0505p7LtSChyli3SXvIbodoOg39IM5YYi6BBqXU&frequency=weekly&data[0]=value&facets[series][]=EMM_EPMR_PTE_NUS_DPG&facets[series][]=EMM_EPMM_PTE_NUS_DPG&facets[series][]=EMM_EPMP_PTE_NUS_DPG&facets[series][]=EMD_EPD2D_PTE_NUS_DPG&sort[0][column]=period&sort[0][direction]=desc&length=10"
  );

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

