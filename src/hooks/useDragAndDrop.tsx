import { useEffect, useState } from "react";

export const useDragAndDrop = (initialItems?: string[]) => {
  const [items, setItems] = useState<string[]>([]);
  const [droppedItem, setDroppedItem] = useState<string | null>(null);

  useEffect(() => {
    if (initialItems) {
      setItems(initialItems);
    }
  }, [initialItems]);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text");
    const newDroppedItem = items?.find((item) => item === id);
    if (newDroppedItem) {
      setItems((prevItems) => prevItems?.filter((item) => item !== id));
      if (droppedItem) {
        setItems((prevItems) => [...(prevItems ?? []), droppedItem]);
      }
      setDroppedItem(newDroppedItem);
    }
  };

  const handleClear = () => {
    if (droppedItem) {
      setItems((prevItems) => [...(prevItems ?? []), droppedItem]);
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
