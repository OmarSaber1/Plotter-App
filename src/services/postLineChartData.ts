import { toast } from "react-toastify";
import { axiosApi } from "./axiosApi";
import { mapLineChartData } from "../utils/mapLineChartData";

export const postLineChartData = async ({
  dimension,
  measure,
}: {
  dimension: string | null;
  measure: string | null;
}) => {
  try {
    if (dimension && measure) {
      const response = await axiosApi.post("/data", {
        measures: [measure],
        dimension,
      });
      const data = response.data;

      const mappedLineChartData = mapLineChartData(data);
      return mappedLineChartData;
    }
  } catch (error) {
    toast.error("Error fetching Chart Data, Please try Again!");
  }
};
