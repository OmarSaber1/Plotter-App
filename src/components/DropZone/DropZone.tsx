import React from "react";
import { DropZoneProps } from "../../types/DropZoneProps";

export const DropZone: React.FC<DropZoneProps> = ({
  handleDrop,
  handleDragOver,
  droppedItem,
}) => (
  <div
    id="dropzone"
    className="dropzone"
    onDrop={handleDrop}
    onDragOver={handleDragOver}
  >
    Drop items here
    {droppedItem && <div className="droppedItem">{droppedItem.name}</div>}
  </div>
);
