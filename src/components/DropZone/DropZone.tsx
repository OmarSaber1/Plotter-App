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
    {!droppedItem ? <h3>{`Drop ${dropZoneName} here`}</h3> : ""}
    {droppedItem && <div className="droppedItem">{droppedItem}</div>}
  </div>
);
