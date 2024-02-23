export const mapLineChartData = (data) => {
  const labels = data?.data?.[0].values;
  const dataset = data?.data?.[1].values;

  return {
    labels,
    dataset,
  };
};
