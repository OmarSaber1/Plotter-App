export interface LineChartData {
  data: { name: string; values: (string | number)[] };
}

export interface LineChartType {
  labels?: string[];
  dataset?: (string | number)[];
}
