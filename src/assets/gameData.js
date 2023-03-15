export const ACTIONTYPES = { click: "click" };

export const getData = (arr) => {
  return (state, action) => {
    if (action.type === ACTIONTYPES.click) {
      return {
        ...state,
        count: state.count + 1,
        user: !state.user,
        dataArr: state.dataArr.map((cube, index) => {
          if (index === action.cubeIndex) {
            return {
              ...cube,
              tag: state.user ? "x" : "o",
              isClicked: !cube.isClicked,
            };
          }
          return cube;
        }),
      };
    }

    return {
      user: true,
      dataArr: [...arr],
      count: 1,
    };
  };
};

export const getChekWinnerData = (
  dataArr,
  winnerData,
  user,
  count,
  onHideGame,
  getWinner
) => {
  return () => {
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
  };
};

// () => {
//   if (!state.dataArr) return;
//   for (let i = 0; i < winnerData.length; i++) {
//     let condition = winnerData[i];
//     let cellA = state.dataArr[condition[0]];
//     let cellB = state.dataArr[condition[1]];
//     let cellC = state.dataArr[condition[2]];
//     if (cellA.tag === "" || cellB.tag === "" || cellC.tag === "") {
//       continue;
//     }
//     if (cellA.tag === cellB.tag && cellB.tag === cellC.tag) {
//       onHideGame();
//       getWinner(!state.user);
//     } else {
//       getWinner(null, state.count, state.user);
//     }
//   }
// }

// const checkWinner = useCallback(() => {
//   if (!dataArr) return;
//   for (let i = 0; i < winnerData.length; i++) {
//     let condition = winnerData[i];
//     let cellA = dataArr[condition[0]];
//     let cellB = dataArr[condition[1]];
//     let cellC = dataArr[condition[2]];
//     if (cellA.tag === "" || cellB.tag === "" || cellC.tag === "") {
//       continue;
//     }
//     if (cellA.tag === cellB.tag && cellB.tag === cellC.tag) {
//       onHideGame();
//       getWinner(!user);
//     } else {
//       getWinner(null, count, user);
//     }
//   }
// }, [dataArr, count, user, getWinner, onHideGame]);

// const clickhandler = (cubeIndex) => {

//   // setCount((prev) => prev + 1);
//   // setUserOne((prev) => !prev);

//   // setDataArr((prev) =>
//   //   prev.map((cube, index) => {
//   //     if (index === cubeIndex) {
//   //       return {
//   //         ...cube,
//   //         tag: user ? "x" : "o",
//   //         isClicked: !cube.isClicked,
//   //       };
//   //     }
//   //     return cube;
//   //   })
//   // );
//   onChangePlayer();
// };

// useEffect(() => {
//   checkWinner();
// }, [dataArr, count, user, onHideGame, checkWinner]);

// const [user, setUserOne] = useState(true);
// const [dataArr, setDataArr] = useState([...arr]);
// const [count, setCount] = useState(1);
