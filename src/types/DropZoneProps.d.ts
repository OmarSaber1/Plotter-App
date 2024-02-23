import { DragEvent } from "react";
import { ListItemProps } from "./ListProps";

export interface DropZoneProps {
  handleDrop: (e: DragEvent<HTMLDivElement>) => void;
  handleDragOver: (e: DragEvent<HTMLDivElement>) => void;
  droppedItem: string | null;
  dropZoneName: string;
}
