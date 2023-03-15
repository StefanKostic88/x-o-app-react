import styled from "styled-components";

export const GridContainerStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 15px;
  justify-content: center;
  margin-top: 7rem;
`;

export const GridItemStyled = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 15px;
  box-shadow: rgb(255 255 255) 0px 0px 1px, rgb(255 255 255) 0px 0px 2px,
    rgb(255 255 255) 0px 0px 2px, rgb(72 219 251) 0px 0px 2px,
    rgb(72 219 251) 0px 0px 3px, rgb(72 219 251) 0px 0px 5px,
    rgb(72 219 251) 0px 0px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  cursor: pointer;
  background-color: ${(props) => (props.clicked ? null : "#484848")};
  color: ${(props) => (props.clicked ? "#b7b7b7" : "black")};
  svg {
    width: 75px;
    height: 75px;
  }
`;
