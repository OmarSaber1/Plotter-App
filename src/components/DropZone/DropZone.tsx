import React from "react";
import { DropZoneProps } from "../../types/DropZoneProps";

export const DropZone: React.FC<DropZoneProps> = ({
  handleDrop,
  handleDragOver,
  droppedItem,
  dropZoneName,
}) => (
  <div
    id="dropzone"
    className="dropzone"
    onDrop={handleDrop}
    onDragOver={handleDragOver}
  >
    Drop {dropZoneName} here
    {droppedItem && <div className="droppedItem">{droppedItem}</div>}
  </div>
);
