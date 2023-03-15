import { useEffect, useCallback, useReducer } from "react";
import { winnerData } from "../assets/helpers";
import { getData, ACTIONTYPES, getChekWinnerData } from "../assets/gameData.js";

const useGame = (arr, getWinner, onHideGame, onChangePlayer) => {
  const useGameReducer = getData(arr);

  const [state, dispatch] = useReducer(useGameReducer, {
    user: true,
    dataArr: [...arr],
    count: 1,
  });

  const checkWinner = useCallback(
    getChekWinnerData(
      state.dataArr,
      winnerData,
      state.user,
      state.count,
      onHideGame,
      getWinner
    ),
    [state.dataArr, state.count, state.user, getWinner, onHideGame]
  );

  const clickhandler = (cubeIndex) => {
    dispatch({ type: ACTIONTYPES.click, cubeIndex });
    onChangePlayer();
  };

  useEffect(() => {
    checkWinner();
  }, [state.dataArr, state.count, state.user, onHideGame, checkWinner]);

  return {
    clickhandler,
    dataArr: state.dataArr,
  };
};

export default useGame;
