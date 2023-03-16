import React from "react";

import CustomButton from "../ui/CustomButton/CustomButton";
import { PlayerContainerStyled } from "./styles/PlayerContainerStyles";

const PlayerContainer = ({ onRealoadHandler, displayIsVisible }) => {
  return (
    <PlayerContainerStyled isVisible={displayIsVisible}>
      <h2>Go Again</h2>
      <CustomButton onClick={onRealoadHandler}>Go Again</CustomButton>
    </PlayerContainerStyled>
  );
};

export default PlayerContainer;
