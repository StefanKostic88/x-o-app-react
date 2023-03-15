import React from "react";
import { CostumeButtonStyled } from "../styles/uiStyles";

const CustomButton = ({ onClick, children }) => {
  return (
    <CostumeButtonStyled onClick={onClick}>{children}</CostumeButtonStyled>
  );
};

export default CustomButton;
