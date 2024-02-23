import React, { useState, DragEvent } from "react";
import { ListItemProps } from "../../types/ListProps";
import { DropZone } from "../DropZone/DropZone";
import { ListItems } from "../ListItems/ListItems";
import { InitialDimensions, InitialMeasures } from "./constants";
import "./DragAndDrop.css";

export const DragAndDrop: React.FC = () => {
  const [dimensions, setDimensions] =
    useState<ListItemProps[]>(InitialDimensions);

  const [measures, setMeasures] = useState<ListItemProps[]>(InitialMeasures);

  const [droppedDimension, setDroppedDimension] =
    useState<ListItemProps | null>(null);

  const [droppedMeasure, setDroppedMeasure] = useState<ListItemProps | null>(
    null
  );

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDropDimension = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text");
    const newDroppedItem = dimensions.find((item) => item.id === id);
    if (newDroppedItem) {
      setDimensions((prevItems) => prevItems.filter((item) => item.id !== id));
      if (droppedDimension) {
        setDimensions((prevItems) => [...prevItems, droppedDimension]);
      }
      setDroppedDimension(newDroppedItem);
    }
  };

  const handleDropMeasure = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text");
    const newDroppedMeasure = measures.find((item) => item.id === id);
    if (newDroppedMeasure) {
      setMeasures((prevItems) => prevItems.filter((item) => item.id !== id));
      if (droppedMeasure) {
        setMeasures((prevItems) => [...prevItems, droppedMeasure]);
      }
      setDroppedMeasure(newDroppedMeasure);
    }
  };

  const handleClearDimension = () => {
    if (droppedDimension) {
      setDimensions((prevItems) => [...prevItems, droppedDimension]);
      setDroppedDimension(null);
    }
  };

  const handleClearMeassure = () => {
    if (droppedMeasure) {
      setMeasures((prevItems) => [...prevItems, droppedMeasure]);
      setDroppedMeasure(null);
    }
  };

  return (
    <div className="container">
      <div className="menu">
        <ListItems
          items={dimensions}
          setItems={setDimensions}
          droppedItem={droppedDimension}
          setDroppedItem={setDroppedDimension}
        />
        <ListItems
          items={measures}
          setItems={setMeasures}
          droppedItem={droppedMeasure}
          setDroppedItem={setDroppedMeasure}
        />
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
