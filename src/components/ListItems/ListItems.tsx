import React, { DragEvent } from "react";
import { ListItemProps, ListItemsProps } from "../../types/ListProps";
import Spinner from "../Spinner/Spinner";

const Item: React.FC<ListItemProps> = ({ id, handleDragStart }) => (
  <div id={id} className="item" draggable onDragStart={handleDragStart}>
    {id}
  </div>
);

export const ListItems: React.FC<ListItemsProps> = ({ items }) => {
  const handleDragStart = (e: DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text/plain", e.currentTarget.id);
  };

  return (
    <div className="list">
      {items ? (
        items.map((item) => (
          <Item key={item} id={item} handleDragStart={handleDragStart} />
        ))
      ) : (
        <Spinner />
      )}
    </div>
  );
};
