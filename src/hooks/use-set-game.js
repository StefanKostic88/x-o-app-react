import { useEffect, useReducer, useState } from "react";

const setGameOptions = {
  CHANGE_PLAYER: "change player",
  HIDE_DISPLAY: "hide display",
  SHOW_DISPLAY: "show display",
  NO_WINNERS: "no winners",
  PLAYER_ONE_WINS: "x wins",
  PLAYER_TWO_WINS: "o wins",
  RELOAD: "reload",
};

const setGameReducer = (state, action) => {
  if (action.type === setGameOptions.RELOAD) {
    return {
      playerOneIsActive: true,
      displayIsVisible: true,
      winner: null,
      winnerPlayer: null,
    };
  }

  if (action.type === setGameOptions.CHANGE_PLAYER) {
    return {
      ...state,
      playerOneIsActive: !state.playerOneIsActive,
    };
  }

  if (action.type === setGameOptions.HIDE_DISPLAY) {
    return { ...state, displayIsVisible: false };
  }
  if (action.type === setGameOptions.SHOW_DISPLAY) {
    return { ...state, displayIsVisible: true };
  }

  if (action.type === setGameOptions.NO_WINNERS) {
    return { ...state, displayIsVisible: false, winner: " No winners" };
  }

  if (action.type === setGameOptions.PLAYER_ONE_WINS) {
    return { ...state, winnerPlayer: true, winner: "X Player Wins" };
  }

  if (action.type === setGameOptions.PLAYER_TWO_WINS) {
    return { ...state, winnerPlayer: true, winner: "O Player Wins" };
  }

  return {
    playerOneIsActive: true,
    displayIsVisible: true,
    winner: null,
    winnerPlayer: null,
  };
};

const useSetGame = () => {
  const [state, dispatch] = useReducer(setGameReducer, {
    playerOneIsActive: true,
    displayIsVisible: true,
    winner: null,
    winnerPlayer: null,
  });

  const [gameHasEnded, setGameHasEnded] = useState(false);

  const changePlayer = () => {
    dispatch({ type: setGameOptions.CHANGE_PLAYER });
  };

  const hideGame = () => {
    dispatch({ type: setGameOptions.HIDE_DISPLAY });
  };

  const reloadHandler = () => {
    dispatch({ type: setGameOptions.RELOAD });
  };

  const getWinner = (winner, count = 0) => {
    if (count > 9) {
      setGameHasEnded(() => true);
      return;
    }

    if (count === 0 && winner) {
      dispatch({ type: setGameOptions.PLAYER_ONE_WINS });

      return;
    }
    if (count === 0 && !winner) {
      dispatch({ type: setGameOptions.PLAYER_TWO_WINS });

      return;
    }
  };

  useEffect(() => {
    dispatch({ type: setGameOptions.SHOW_DISPLAY });
  }, []);

  useEffect(() => {
    if (gameHasEnded) {
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
