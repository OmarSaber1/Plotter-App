import React, { DragEvent } from "react";
import { ListItemProps, ListItemsProps } from "../../types/ListProps";
import Spinner from "../Spinner/Spinner";
import { StyledItem, StyledList, StyledParagraph } from "../../App.styles";

const Item: React.FC<ListItemProps> = ({ id, handleDragStart }) => (
  <StyledItem id={id} draggable onDragStart={handleDragStart}>
    {id}
  </StyledItem>
);

export const ListItems: React.FC<ListItemsProps> = ({ items, title }) => {
  const handleDragStart = (e: DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text/plain", e.currentTarget.id);
  };

  return (
    <>
      <StyledParagraph>{title}</StyledParagraph>
      <StyledList>
        {items ? (
          items.map((item) => (
            <Item key={item} id={item} handleDragStart={handleDragStart} />
          ))
        ) : (
          <Spinner />
        )}
      </StyledList>
    </>
  );
};
