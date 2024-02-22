import React, { useState, DragEvent } from "react";
import "./DragAndDrop.css";

interface ItemProps {
  id: string;
  name: string;
  handleDragStart?: (e: DragEvent<HTMLDivElement>) => void;
}

const Item: React.FC<ItemProps> = ({ id, name, handleDragStart }) => (
  <div id={id} className="item" draggable onDragStart={handleDragStart}>
    {name}
  </div>
);

interface DropZoneProps {
  handleDrop: (e: DragEvent<HTMLDivElement>) => void;
  handleDragOver: (e: DragEvent<HTMLDivElement>) => void;
  droppedItem: ItemProps | null;
}

export const DropZone: React.FC<DropZoneProps> = ({
  handleDrop,
  handleDragOver,
  droppedItem,
}) => (
  <div
    id="dropzone"
    className="dropzone"
    onDrop={handleDrop}
    onDragOver={handleDragOver}
  >
    Drop items here
    {droppedItem && <div className="droppedItem">{droppedItem.name}</div>}
  </div>
);

interface ListProps {
  items: ItemProps[];
  setItems: React.Dispatch<React.SetStateAction<ItemProps[]>>;
  droppedItem: ItemProps | null;
  setDroppedItem: React.Dispatch<React.SetStateAction<ItemProps | null>>;
}

const List: React.FC<ListProps> = ({
  items,
  setItems,
  droppedItem,
  setDroppedItem,
}) => {
  const handleDragStart = (e: DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text/plain", e.currentTarget.id);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
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

  return (
    <div>
      {items.map((item) => (
        <Item key={item.id} {...item} handleDragStart={handleDragStart} />
      ))}
      <DropZone
        handleDrop={handleDrop}
        handleDragOver={handleDragOver}
        droppedItem={droppedItem}
      />
      <button onClick={handleClear}>Clear</button>
    </div>
  );
};

export const DragAndDrop: React.FC = () => {
  const [items, setItems] = useState<ItemProps[]>([
    { id: "item1", name: "Item 1" },
    { id: "item2", name: "Item 2" },
  ]);
  const [droppedItem, setDroppedItem] = useState<ItemProps | null>(null);

  const [measures, setMeasures] = useState<ItemProps[]>([
    { id: "measure1", name: "Measure 1" },
    { id: "measure2", name: "Measure 2" },
  ]);
  const [droppedMeasure, setDroppedMeasure] = useState<ItemProps | null>(null);

  return (
    <div>
      <List
        items={items}
        setItems={setItems}
        droppedItem={droppedItem}
        setDroppedItem={setDroppedItem}
      />
      <List
        items={measures}
        setItems={setMeasures}
        droppedItem={droppedMeasure}
        setDroppedItem={setDroppedMeasure}
      />
    </div>
  );
};
