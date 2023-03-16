import React, { useEffect, useState } from "react";

import { HeaderStyled } from "./styles/HeaderStyles";

const Header = ({ displayIsVisible, playerOneIsActive, winner }) => {
  const [toggleAnimation, setToggleAnimation] = useState(false);
  // console.log(playerOneIsActive);
  useEffect(() => {
    if (winner) {
      setToggleAnimation(() => true);
    }
    return () => {
      setToggleAnimation(() => false);
    };
  }, [winner]);
  console.log(toggleAnimation);
  return (
    <HeaderStyled hasWinner={toggleAnimation}>
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
