import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  Chart,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import { postLineChartData } from "../../services/postLineChartData";

Chart.register(LinearScale, CategoryScale, PointElement, LineElement, Tooltip);

export const LineChart = ({
  measure,
  dimension,
}: {
  measure: string | null;
  dimension: string | null;
}) => {
  const [lineChartData, setLineChartData] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);

  const options = {
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
  };

  useEffect(() => {
    (async () => {
      if (measure && dimension) {
        setIsLoading(true);
        const lineChartMappedData = await postLineChartData({
          measure,
          dimension,
        });
        setLineChartData(lineChartMappedData);
        setIsLoading(false);
      } else {
        setLineChartData({
          labels: undefined,
          dataset: undefined,
        });
      }
    })();
  }, [measure, dimension]);

  return (
    <>
      <div className="header">
        <h1 className="title">Line Chart</h1>
      </div>
      {lineChartData && (
        <div style={{ width: 900, height: 500 }}>
          {isLoading ? (
            <p>Loading...</p>
          ) : lineChartData ? (
            <Line
              data={{
                labels: lineChartData.labels ?? [],
                datasets: [
                  {
                    label: measure ?? "",
                    data: lineChartData.dataset ?? [],
                    fill: false,
                    backgroundColor: "rgb(75, 192, 192)",
                    borderColor: "rgba(75, 192, 192, 0.2)",
                  },
                ],
              }}
              options={options}
            />
          ) : null}
        </div>
      )}
    </>
  );
};
