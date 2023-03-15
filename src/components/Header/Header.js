import React from "react";

import { HeaderStyled } from "./styles/HeaderStyles";

const Header = ({ displayIsVisible, playerOneIsActive, winner }) => {
  return (
    <HeaderStyled>
      {displayIsVisible ? (
        playerOneIsActive ? (
          <h1>X Player Turn</h1>
        ) : (
          <h1>O Player Turn</h1>
        )
      ) : (
        <h1>{winner}</h1>
      )}
    </HeaderStyled>
  );
};

export default Header;
