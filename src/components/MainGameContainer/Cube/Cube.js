import React, { useEffect, useState } from "react";
import { MdClose, MdRadioButtonUnchecked } from "react-icons/md";
import { GridItemStyled } from "../styles/MainGameStyles";

const Cube = ({ tag, isClicked, onClick, index }) => {
  return (
    <GridItemStyled
      clicked={isClicked}
      onClick={
        !isClicked
          ? () => {
              onClick(index);
            }
          : null
      }
    >
      {tag ? tag === "x" ? <MdClose /> : <MdRadioButtonUnchecked /> : ""}
    </GridItemStyled>
  );
};

export default Cube;
