import { LineChartType, LineChartData } from "../types/LineChart";

export const mapLineChartData = (data: LineChartData): LineChartType => {
  const labels = data?.data?.[0].values;
  const dataset = data?.data?.[1].values;

  return {
    labels,
    dataset,
  };
};
