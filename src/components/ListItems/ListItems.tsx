import React, { DragEvent } from "react";
import { ListItemProps, ListItemsProps } from "../../types/ListProps";

const Item: React.FC<ListItemProps> = ({ id, name, handleDragStart }) => (
  <div id={id} className="item" draggable onDragStart={handleDragStart}>
    {name}
  </div>
);

export const ListItems: React.FC<ListItemsProps> = ({ items }) => {
  const handleDragStart = (e: DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text/plain", e.currentTarget.id);
  };

  return (
    <div className="list">
      {items.map((item) => (
        <Item key={item.id} {...item} handleDragStart={handleDragStart} />
      ))}
    </div>
  );
};
