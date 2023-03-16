import styled from "styled-components";
import { fadeIn } from "../../../assets/styles/Animations";
export const GridContainerStyled = styled.div`
  display: grid;
  animation: ${fadeIn} 500ms ease-in-out;
  grid-template-columns: repeat(3, auto);
  gap: 18px;
  justify-content: center;
  margin-top: 7rem;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: rgb(255 255 255) 0px 0px 1px, rgb(255 255 255) 0px 0px 2px,
    rgb(255 255 255) 0px 0px 2px, rgb(72 219 251) 0px 0px 2px,
    rgb(72 219 251) 0px 0px 3px, rgb(72 219 251) 0px 0px 5px,
    rgb(72 219 251) 0px 0px 15px;
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
  transition: all 700ms;
  background-color: ${(props) => (props.clicked ? null : "#4848488a")};
  color: ${(props) => (props.clicked ? "#b7b7b7" : "#4848488a")};
  transform: ${(props) => (props.clicked ? "scale(1.05)" : null)};
  svg {
    width: 75px;
    height: 75px;
  }
`;
