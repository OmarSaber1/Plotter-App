import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useDragAndDrop } from "./hooks/useDragAndDrop";
import { getColumnsList } from "./services/getColumnsList";
import { ListItems } from "./components/ListItems/ListItems";
import { DropZone } from "./components/DropZone/DropZone";
import "./App.css";
import { LineChart } from "./components/LineChart/LineChart";

export const App = () => {
  const [columnsData, setColumnsData] = useState<{
    [x: string]: string[];
  }>();

  const {
    items: dimensions,
    droppedItem: droppedDimension,
    handleDragOver,
    handleDrop: handleDropDimension,
    handleClear: handleClearDimension,
  } = useDragAndDrop(columnsData?.dimension);

  const {
    items: measures,
    droppedItem: droppedMeasure,
    handleDrop: handleDropMeasure,
    handleClear: handleClearMeassure,
  } = useDragAndDrop(columnsData?.measure);

  useEffect(() => {
    (async () => {
      const columnsList = await getColumnsList();
      setColumnsData(columnsList);
    })();
  }, []);

  return (
    <div className="container">
      <div className="menu">
        <ListItems items={dimensions} droppedItem={droppedDimension} />
        <ListItems items={measures} droppedItem={droppedMeasure} />
      </div>
      <div className="content">
        <DropZone
          handleDrop={handleDropDimension}
          handleDragOver={handleDragOver}
          droppedItem={droppedDimension}
          dropZoneName="Dimension"
        />
        <button onClick={handleClearDimension}>Clear</button>

        <DropZone
          handleDrop={handleDropMeasure}
          handleDragOver={handleDragOver}
          droppedItem={droppedMeasure}
          dropZoneName="Measure"
        />
        <button onClick={handleClearMeassure}>Clear</button>
      </div>
      <LineChart dimension={droppedDimension} measure={droppedMeasure} />
      <ToastContainer />
    </div>
  );
};
