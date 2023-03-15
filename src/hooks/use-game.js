import { useState, useEffect, useCallback } from "react";

import { winnerData } from "../assets/helpers";
const useGame = (arr, getWinner, onHideGame, onChangePlayer) => {
  const [user, setUserOne] = useState(true);
  const [dataArr, setDataArr] = useState([...arr]);
  const [count, setCount] = useState(1);

  const checkWinner = useCallback(() => {
    if (!dataArr) return;
    for (let i = 0; i < winnerData.length; i++) {
      let condition = winnerData[i];
      let cellA = dataArr[condition[0]];
      let cellB = dataArr[condition[1]];
      let cellC = dataArr[condition[2]];
      if (cellA.tag === "" || cellB.tag === "" || cellC.tag === "") {
        continue;
      }
      if (cellA.tag === cellB.tag && cellB.tag === cellC.tag) {
        onHideGame();
        getWinner(!user);
      } else {
        getWinner(null, count, user);
      }
    }
  }, [dataArr, count, user, getWinner, onHideGame]);

  const clickhandler = (cubeIndex) => {
    setCount((prev) => prev + 1);
    setUserOne((prev) => !prev);

    setDataArr((prev) =>
      prev.map((cube, index) => {
        if (index === cubeIndex) {
          return {
            ...cube,
            tag: user ? "x" : "o",
            isClicked: !cube.isClicked,
          };
        }
        return cube;
      })
    );
    onChangePlayer();
  };

  useEffect(() => {
    checkWinner();
  }, [user, dataArr, count, onHideGame, checkWinner]);

  return {
    clickhandler,
    dataArr,
  };
};

export default useGame;
