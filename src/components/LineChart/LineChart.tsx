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
import { getChartOptions } from "../../utils/getChartOptions";
import Spinner from "../Spinner/Spinner";

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
  const options = getChartOptions(dimension, measure);

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

  const chart = lineChartData ? (
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
  ) : null;

  return (
    <>
      <div className="header">
        <h3 className="title">Line Chart</h3>
      </div>
      {lineChartData && (
        <div
          style={{
            width: 800,
            height: 600,
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
          }}
        >
          {isLoading ? <Spinner /> : chart}
        </div>
      )}
    </>
  );
};
