import styled from "styled-components";

export const StyledAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

export const StyledContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 5px;
  height: auto;
`;

export const StyledContent = styled.div`
  padding: 0 20px;
`;

export const StyledItem = styled.div`
  margin: 10px;
  padding: 20px;
  cursor: move;
  color: white;
  background-color: #73a580;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  text-align: center;

  &:hover {
    transform: scale(1.05);
  }
`;

export const StyledList = styled.div`
  flex: 1;
  margin-right: 10px;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 5px;
`;

export const StyledPlotterHeader = styled.div`
  background-color: blue;
  padding: 10px;

  h3 {
    color: white;
    text-align: center;
  }
`;

export const StyledMenu = styled.div`
  width: 200px;
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);

  p {
    font-size: 18px;
    color: #333;
    margin-bottom: 10px;
  }

  .listItems {
    margin-bottom: 20px;
  }
`;

export const StyledParagraph = styled.p`
  font-size: 16px;
`;

export const StyledHeader = styled.p`
  font-size: 30px;
  text-align: center;
  color: white;
`;
