import { useState, useEffect } from "react";
import { DragAndDrop } from "./components/DragAndDrop/DragAndDrop";
import { ToastContainer } from "react-toastify";
// import { LineChart } from "./components/LineChart/LineChart";

export const App = () => {
  const [data, setData] = useState();
  const [dimension, setDimension] = useState(null);
  const [measures, setMeasures] = useState([]);

  // Fetch data here...
  // For example:
  useEffect(() => {
    fetch("https://plotter-task-8019e13a60ac.herokuapp.com/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ measures: ["Cost"], dimension: "Product" }),
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
        setDimension({ name: "Product", function: "dimension" });
        setMeasures([{ name: "Cost", function: "measure" }]);
      });
  }, []);

  console.log({ data, dimension, measures });

  return (
    <div>
      {/* Render LineChart component with fetched data */}
      <DragAndDrop />
      {/* {data && (
        <LineChart data={data} dimension={dimension} measures={measures} />
      )} */}
      <ToastContainer />
    </div>
  );
};
