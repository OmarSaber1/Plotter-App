import { DragEvent } from "react";

export interface ListItemProps {
  id: string;
  name: string;
  handleDragStart?: (e: DragEvent<HTMLDivElement>) => void;
}

export interface ListItemsProps {
  items: ListItemProps[];
  droppedItem: ListItemProps | null;
}
