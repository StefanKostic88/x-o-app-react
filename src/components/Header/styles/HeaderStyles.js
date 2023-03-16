import styled from "styled-components";

import { fadeIn } from "../../../assets/styles/Animations";

export const HeaderStyled = styled.div`
  text-align: center;
  padding: 3rem 0;
  letter-spacing: 1px;
  // opacity: ${(props) => (props.hasWinner ? "0" : "1")};
  // transition: opacity 0;
  // animation: ${(props) => (props.hasWinner ? "100ms" : "")} ${fadeIn} 1000ms
  //   ease-in-out forwards;
`;
