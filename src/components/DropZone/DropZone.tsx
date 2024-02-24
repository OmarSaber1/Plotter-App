import React from "react";
import { DropZoneProps } from "../../types/DropZoneProps";
import {
  StyledClearButton,
  StyledDropZone,
  StyledDropZoneContainer,
  StyledDroppedItem,
  StyledZoneIndicator,
} from "./DropZone.styles";

export const DropZone: React.FC<DropZoneProps> = ({
  handleDrop,
  handleDragOver,
  droppedItem,
  dropZoneName,
  handleClear,
}) => (
  <StyledDropZoneContainer>
    <StyledZoneIndicator>{dropZoneName}</StyledZoneIndicator>

    <StyledDropZone
      id="dropzone"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {!droppedItem ? <h3>{`Drop ${dropZoneName} here`}</h3> : ""}
      {droppedItem && <StyledDroppedItem>{droppedItem}</StyledDroppedItem>}
    </StyledDropZone>

    <StyledClearButton onClick={handleClear}>Clear</StyledClearButton>
  </StyledDropZoneContainer>
);
