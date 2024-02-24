import { DragEvent } from "react";

export interface DropZoneProps {
  handleDrop: (e: DragEvent<HTMLDivElement>) => void;
  handleDragOver: (e: DragEvent<HTMLDivElement>) => void;
  handleClear: () => void;
  droppedItem: string | null;
  dropZoneName: string;
}
