import { useEffect, useReducer, useState } from "react";
import {
  setGameOptions,
  setGameReducer,
  generateWinnerData,
} from "../assets/setGameData.js";

const useSetGame = () => {
  const [state, dispatch] = useReducer(setGameReducer, {
    playerOneIsActive: true,
    displayIsVisible: true,
    winner: null,
    winnerPlayer: null,
  });

  const [gameHasEnded, setGameHasEnded] = useState(false);
  const getWinner = generateWinnerData(setGameHasEnded, dispatch);

  const changePlayer = () => {
    dispatch({ type: setGameOptions.CHANGE_PLAYER });
  };

  const hideGame = () => {
    dispatch({ type: setGameOptions.HIDE_DISPLAY });
  };

  const reloadHandler = () => {
    dispatch({ type: setGameOptions.RELOAD });
  };

  useEffect(() => {
    dispatch({ type: setGameOptions.SHOW_DISPLAY });
  }, []);

  useEffect(() => {
    if (gameHasEnded) {
      console.log("ended");
      dispatch({ type: setGameOptions.NO_WINNERS });

      if (state.winner === "X Player Wins") {
        dispatch({ type: setGameOptions.PLAYER_ONE_WINS });
        return;
      }
      setGameHasEnded(() => false);
    }
  }, [gameHasEnded]);

  return {
    changePlayer,
    hideGame,
    reloadHandler,
    getWinner,
    winner: state.winner,
    displayIsVisible: state.displayIsVisible,
    playerOneIsActive: state.playerOneIsActive,
  };
};

export default useSetGame;
