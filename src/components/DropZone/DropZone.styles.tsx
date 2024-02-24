import styled from "styled-components";

export const StyledDropZoneContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const StyledZoneIndicator = styled.div`
  width: 70px;
`;

export const StyledDropZone = styled.div`
  margin: 20px;
  padding: 5px 10px;
  border: 2px dashed #007bff;
  flex: 1;
  width: 800px;
  border-radius: 20px;
  color: #333;
  background-color: #f8f9fa;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #e2e6ea;
  }
`;

export const StyledDroppedItem = styled.div`
  margin: 10px;
  padding: 20px;
  color: white;
  background-color: #73a580;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  max-width: 200px;
  &:hover {
    transform: scale(1.05);
  }
`;

export const StyledClearButton = styled.button`
  background-color: red;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  transition-duration: 0.4s;
  border-radius: 12px;

  &:hover {
    background-color: red;
  }
`;
