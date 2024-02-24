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
import { StyledLineChartContainer } from "./LineChart.styles";
import { LineChartType } from "../../types/LineChart";

Chart.register(LinearScale, CategoryScale, PointElement, LineElement, Tooltip);

export const LineChart = ({
  measure,
  dimension,
}: {
  measure: string | null;
  dimension: string | null;
}) => {
  const [lineChartData, setLineChartData] = useState<LineChartType>();
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
            backgroundColor: "skyblue",
            borderColor: "blue",
          },
        ],
      }}
      options={options}
    />
  ) : null;

  return (
    <>
      {lineChartData && (
        <StyledLineChartContainer>
          {isLoading ? <Spinner /> : chart}
        </StyledLineChartContainer>
      )}
    </>
  );
};
