import styled, { keyframes } from "styled-components";

import { fadeIn } from "../../../assets/styles/Animations";

// const fadeIn = keyframes`
// 0%{opacity: 0}
// 100%{opacity: 100%}
// `;

export const PlayerContainerStyled = styled.div`
  margin-top: 7rem;
  min-height: calc(396px + 2rem);
  min-width: calc(396px + 2rem);
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  padding: 2rem;
  justify-content: center;
  box-shadow: rgb(255 255 255) 0px 0px 1px, rgb(255 255 255) 0px 0px 2px,
    rgb(255 255 255) 0px 0px 2px, rgb(72 219 251) 0px 0px 2px,
    rgb(72 219 251) 0px 0px 3px, rgb(72 219 251) 0px 0px 5px,
    rgb(72 219 251) 0px 0px 15px;
  gap: 3rem;
  align-items: center;

  transition: all 300ms;

  animation: ${fadeIn} 500ms ease-in-out;
  h2 {
    font-size: 36px;
    letter-spacing: 1px;
  }
`;
