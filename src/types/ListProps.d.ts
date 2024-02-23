import { DragEvent } from "react";

export interface ListItemProps {
  id: string;
  name: string;
  handleDragStart?: (e: DragEvent<HTMLDivElement>) => void;
}

export interface ListItemsProps {
  items: ListItemProps[];
  setItems: React.Dispatch<React.SetStateAction<ListItemProps[]>>;
  droppedItem: ListItemProps | null;
  setDroppedItem: React.Dispatch<React.SetStateAction<ListItemProps | null>>;
}
