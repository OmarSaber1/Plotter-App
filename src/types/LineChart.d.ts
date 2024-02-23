export interface LineChartData {
  data: { name: string; values: (string | number)[] };
}

export interface LineChart {
  labels?: string[];
  dataset: (string | number)[];
}
