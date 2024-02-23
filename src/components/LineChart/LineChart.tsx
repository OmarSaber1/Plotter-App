import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  Chart,
  LineElement,
  LinearScale,
  PointElement,
} from "chart.js";
import { postLineChartData } from "../../services/postLineChartData";

Chart.register(LinearScale, CategoryScale, PointElement, LineElement);

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export const LineChart = ({
  measure,
  dimension,
}: {
  measure: string | null;
  dimension: string | null;
}) => {
  const [lineChartData, setLineChartData] = useState<any>();

  useEffect(() => {
    (async () => {
      if (measure && dimension) {
        const lineChartMappedData = await postLineChartData({
          measure,
          dimension,
        });
        setLineChartData(lineChartMappedData);
      }
    })();
  }, [measure, dimension]);

  return (
    <>
      <div className="header">
        <h1 className="title">Line Chart</h1>
      </div>
      {lineChartData && (
        <Line
          data={{
            labels: lineChartData.labels,
            datasets: [
              {
                label: "Cost",
                data: lineChartData.dataset,
                fill: false,
                backgroundColor: "rgb(75, 192, 192)",
                borderColor: "rgba(75, 192, 192, 0.2)",
              },
            ],
          }}
          options={options}
        />
      )}
    </>
  );
};
