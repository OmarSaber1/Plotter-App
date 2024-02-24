# Plotter App

This is a simple React application that uses drag and drop functionality to plot data on a line chart.

## How to use

Drag items from the "Dimensions" and "Measures" lists and drop them into the "Dimension" and "Measure" drop zones. The line chart will automatically update based on the items dropped.

## Components

- **ListItems**: Displays a list of items that can be dragged and dropped.
- **DropZone**: A zone where items can be dropped. When an item is dropped, it triggers a re-render of the line chart.
- **LineChart**: Displays a line chart based on the dropped items.

## Hooks

- **useDragAndDrop**: A custom hook that manages the state and functionality of the drag and drop feature.

## Services

- **getColumnsList**: An async function that gets the list of columns to be displayed in the "Dimensions" and "Measures" lists.

## Styles

- **StyledAppContainer**: The main container of the application.
- **StyledContent**: The container for the drop zones and the line chart.
- **StyledContentContainer**: The container for the menu and the content.
- **StyledHeader**: The header of the application.
- **StyledMenu**: The container for the "Dimensions" and "Measures" lists.
- **StyledPlotterHeader**: The container for the header.

## Dependencies

- **react-toastify**: Used to display notifications in the application.

## Installation and Setup

To install the application, clone the repository and run `npm install` to install the necessary dependencies.

To start the application, run `npm run dev`. The application will be available at `http://localhost` in your browser.
