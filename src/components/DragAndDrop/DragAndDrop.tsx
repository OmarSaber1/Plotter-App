import React from "react";
import { DropZone } from "../DropZone/DropZone";
import { ListItems } from "../ListItems/ListItems";
import { InitialDimensions, InitialMeasures } from "./constants";
import "./DragAndDrop.css";
import { useDragAndDrop } from "../../hooks/useDragAndDrop";

export const DragAndDrop: React.FC = () => {
  const {
    items: dimensions,
    droppedItem: droppedDimension,
    handleDragOver,
    handleDrop: handleDropDimension,
    handleClear: handleClearDimension,
  } = useDragAndDrop(InitialDimensions);
  const {
    items: measures,
    droppedItem: droppedMeasure,
    handleDrop: handleDropMeasure,
    handleClear: handleClearMeassure,
  } = useDragAndDrop(InitialMeasures);

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
        />
        <button onClick={handleClearDimension}>Clear</button>

        <DropZone
          handleDrop={handleDropMeasure}
          handleDragOver={handleDragOver}
          droppedItem={droppedMeasure}
        />
        <button onClick={handleClearMeassure}>Clear</button>
      </div>
    </div>
  );
};
