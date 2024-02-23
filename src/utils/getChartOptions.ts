export const getChartOptions = (
  dimension: string | null,
  measure: string | null
) => ({
  scales: {
    x: {
      title: {
        display: true,
        text: dimension ?? "",
      },
      beginAtZero: true,
    },
    y: {
      title: {
        display: true,
        text: measure ?? "",
      },
      beginAtZero: true,
    },
  },
  plugins: {
    tooltip: {
      enabled: true,
    },
  },
});
