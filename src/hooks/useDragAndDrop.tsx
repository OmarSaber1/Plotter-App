import { useState } from "react";
import { ListItemProps } from "../types/ListProps";

export const useDragAndDrop = (initialItems: ListItemProps[]) => {
  const [items, setItems] = useState(initialItems);
  const [droppedItem, setDroppedItem] = useState<ListItemProps | null>(null);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text");
    const newDroppedItem = items.find((item) => item.id === id);
    if (newDroppedItem) {
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
      if (droppedItem) {
        setItems((prevItems) => [...prevItems, droppedItem]);
      }
      setDroppedItem(newDroppedItem);
    }
  };

  const handleClear = () => {
    if (droppedItem) {
      setItems((prevItems) => [...prevItems, droppedItem]);
      setDroppedItem(null);
    }
  };

  return {
    items,
    droppedItem,
    handleDragOver,
    handleDrop,
    handleClear,
  };
};
