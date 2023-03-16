import { MainGameContainer, PlayerContainer, Header } from "./components";
import useSetGame from "./hooks/use-set-game";
import GlobalStyles from "./assets/styles/Global";
import { AppStyled, MainContainerStyled } from "./styles";

const App = () => {
  const {
    changePlayer,
    hideGame,
    reloadHandler,
    getWinner,
    winner,
    displayIsVisible,
    playerOneIsActive,
  } = useSetGame();

  return (
    <>
      <GlobalStyles />
      <AppStyled>
        <Header
          displayIsVisible={displayIsVisible}
          playerOneIsActive={playerOneIsActive}
          winner={winner}
        />

        <MainContainerStyled>
          {displayIsVisible ? (
            <MainGameContainer
              onChangePlayer={changePlayer}
              onHideGame={hideGame}
              getWinner={getWinner}
            />
          ) : (
            <PlayerContainer
              onRealoadHandler={reloadHandler}
              displayIsVisible={displayIsVisible}
            />
          )}
        </MainContainerStyled>
      </AppStyled>
    </>
  );
};

export default App;
