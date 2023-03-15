import { useEffect, useState } from "react";
const useSetGame = () => {
  const [playerOneIsActive, setPlayerOneIsActive] = useState(true);
  const [displayIsVisible, setDisplayIsVisible] = useState(true);
  const [winner, setWinner] = useState(null);
  const [winnerPlayer, setWinnerPlayer] = useState(null);

  const changePlayer = () => {
    setPlayerOneIsActive((prev) => !prev);
  };

  const hideGame = () => {
    setDisplayIsVisible(() => false);
  };

  const reloadHandler = () => {
    setDisplayIsVisible(() => true);
    setDisplayIsVisible(() => true);
    setWinner(() => null);
  };

  const getWinner = (winner, count = 0, user) => {
    if (count > 9) {
      setDisplayIsVisible(() => false);
      setWinnerPlayer(() => false);
      return;
    }

    if (count === 0 && winner) {
      setWinner(() => "X Player Wins");
      setWinnerPlayer(() => true);
      return;
    }
    if (count === 0 && !winner) {
      setWinner(() => "O Player Wins");
      setWinnerPlayer(() => true);
      return;
    }
  };
  useEffect(() => {
    setDisplayIsVisible(() => true);
  }, []);

  useEffect(() => {
    if (!winner && !winnerPlayer) {
      setWinner(() => "No winners");
      return;
    }
  }, [winnerPlayer, winner]);

  return {
    changePlayer,
    hideGame,
    reloadHandler,
    getWinner,
    winner,
    displayIsVisible,
    playerOneIsActive,
  };
};

export default useSetGame;
