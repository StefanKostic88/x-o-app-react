import { MainGameContainer } from "./components";
import { useEffect, useState } from "react";
import styled from "styled-components";

const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderStyled = styled.div`
  text-align: center;
  padding: 1.5rem;
`;

const MainContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  minheight: 500px;
`;

function App() {
  const [playerOneIsActive, setPlayerOneIsActive] = useState(true);
  const [displayIsVisible, setDisplayIsVisible] = useState(true);
  const [winner, setWinner] = useState(null);

  const changePlayer = () => {
    setPlayerOneIsActive((prev) => !prev);
  };

  const hideGame = () => {
    setDisplayIsVisible(() => false);
  };

  const getWinner = (winner, count = 0) => {
    if (count > 9 && !winner) {
      setWinner(() => "No Winners");
      setDisplayIsVisible(() => false);
      return;
    }
    if (count === 0 && winner) {
      setWinner(() => "Player 1 Wins");
      return;
    }
    if (count === 0 && !winner) {
      setWinner(() => "Player 2 Wins");
      return;
    }
  };

  const reloadHandler = () => {
    setDisplayIsVisible(() => true);
    setDisplayIsVisible(() => true);
    setWinner(() => null);
  };

  useEffect(() => {
    setDisplayIsVisible(() => true);
  }, []);

  return (
    <AppStyled>
      <HeaderStyled>
        {displayIsVisible ? (
          playerOneIsActive ? (
            <h1>Player 1</h1>
          ) : (
            <h1>Player 2</h1>
          )
        ) : (
          <h1>{winner}</h1>
        )}
      </HeaderStyled>
      <MainContainerStyled>
        {displayIsVisible ? (
          <MainGameContainer
            onChangePlayer={changePlayer}
            onHideGame={hideGame}
            getWinner={getWinner}
          />
        ) : (
          <div>
            <button
              style={{
                padding: "10px 25px",
                backgroundColor: "transparent",
                border: "none",
                outline: "none",
                boxShadow: "0 0 0 1px #fff",
                color: "#fff",
                fontSize: "22px",
                borderRadius: "7px",
                cursor: "pointer",
              }}
              onClick={reloadHandler}
            >
              Go Again
            </button>
          </div>
        )}
      </MainContainerStyled>
    </AppStyled>
  );
}

export default App;
