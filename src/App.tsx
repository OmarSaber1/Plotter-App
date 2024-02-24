import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useDragAndDrop } from "./hooks/useDragAndDrop";
import { getColumnsList } from "./services/getColumnsList";
import { ListItems } from "./components/ListItems/ListItems";
import { DropZone } from "./components/DropZone/DropZone";
import { LineChart } from "./components/LineChart/LineChart";
import {
  StyledAppContainer,
  StyledContent,
  StyledContentContainer,
  StyledHeader,
  StyledMenu,
  StyledParagraph,
  StyledPlotterHeader,
} from "./App.styles";

export const App = () => {
  const [columnsData, setColumnsData] = useState<{
    [x: string]: string[];
  }>();

  const {
    items: dimensions,
    droppedItem: droppedDimension,
    handleDragOver,
    handleDrop: handleDropDimension,
    handleClear: handleClearDimension,
  } = useDragAndDrop(columnsData?.dimension);

  const {
    items: measures,
    droppedItem: droppedMeasure,
    handleDrop: handleDropMeasure,
    handleClear: handleClearMeassure,
  } = useDragAndDrop(columnsData?.measure);

  useEffect(() => {
    (async () => {
      const columnsList = await getColumnsList();
      setColumnsData(columnsList);
    })();
  }, []);

  return (
    <StyledAppContainer>
      <StyledPlotterHeader>
        <StyledHeader>Plotter App</StyledHeader>
      </StyledPlotterHeader>

      <StyledContentContainer>
        <StyledMenu>
          <ListItems
            title="Dimensions"
            items={dimensions}
            droppedItem={droppedDimension}
          />
          <ListItems
            title="Measures"
            items={measures}
            droppedItem={droppedMeasure}
          />
        </StyledMenu>
        <StyledContent>
          <DropZone
            handleDrop={handleDropDimension}
            handleDragOver={handleDragOver}
            droppedItem={droppedDimension}
            dropZoneName="Dimension"
            handleClear={handleClearDimension}
          />
          <DropZone
            handleDrop={handleDropMeasure}
            handleDragOver={handleDragOver}
            droppedItem={droppedMeasure}
            dropZoneName="Measure"
            handleClear={handleClearMeassure}
          />
          <LineChart dimension={droppedDimension} measure={droppedMeasure} />
        </StyledContent>
        <ToastContainer />
      </StyledContentContainer>
    </StyledAppContainer>
  );
};
