import { DragEvent } from "react";

export interface ListItemProps {
  id: string;
  handleDragStart?: (e: DragEvent<HTMLDivElement>) => void;
}

export interface ListItemsProps {
  items?: string[];
  droppedItem: string | null;
}
