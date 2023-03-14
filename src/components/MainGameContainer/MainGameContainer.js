import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { MdClose, MdRadioButtonUnchecked } from "react-icons/md";

const GridContainerStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 10px;
  justify-content: center;
`;

const GridItemStyled = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 15px;
  box-shadow: rgb(255 255 255) 0px 0px 1px, rgb(255 255 255) 0px 0px 2px,
    rgb(255 255 255) 0px 0px 2px, rgb(72 219 251) 0px 0px 2px,
    rgb(72 219 251) 0px 0px 3px, rgb(72 219 251) 0px 0px 5px,
    rgb(72 219 251) 0px 0px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  cursor: pointer;
  background-color: ${(props) => (props.clicked ? null : "#484848")};
  color: ${(props) => (props.clicked ? "#b7b7b7" : "black")};
  svg {
    width: 75px;
    height: 75px;
  }
`;

const arr = [
  { tag: "", isClicked: false },
  { tag: "", isClicked: false },
  { tag: "", isClicked: false },
  { tag: "", isClicked: false },
  { tag: "", isClicked: false },
  { tag: "", isClicked: false },
  { tag: "", isClicked: false },
  { tag: "", isClicked: false },
  { tag: "", isClicked: false },
];

const winnerData = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function MainGameContainer({ onChangePlayer, onHideGame, getWinner }) {
  const [userOne, setUserOne] = useState(true);
  const [gameArr, setGameArr] = useState([...arr]);
  const [count, setCount] = useState(1);

  const checkWinner = () => {
    for (let i = 0; i < winnerData.length; i++) {
      let condition = winnerData[i];
      let cellA = gameArr[condition[0]];
      let cellB = gameArr[condition[1]];
      let cellC = gameArr[condition[2]];
      if (cellA.tag === "" || cellB.tag === "" || cellC.tag === "") {
        continue;
      }
      if (cellA.tag === cellB.tag && cellB.tag === cellC.tag) {
        onHideGame();
        getWinner(!userOne);
      } else {
        getWinner(null, count);
      }
    }
  };

  const clickhandler = (cubeIndex) => {
    setCount((prev) => prev + 1);
    setUserOne((prev) => !prev);

    setGameArr((prev) =>
      prev.map((cube, index) => {
        // let cubeEl = cube;
        if (index === cubeIndex) {
          return {
            ...cube,
            tag: userOne ? "x" : "o",
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
  }, [gameArr]);

  // checkWinner();
  return (
    <GridContainerStyled>
      {gameArr.map((cube, index) => (
        <GridItemStyled
          key={index}
          clicked={cube.isClicked}
          onClick={
            !cube.isClicked
              ? () => {
                  clickhandler(index);
                }
              : null
          }
        >
          {cube.tag ? (
            cube.tag === "x" ? (
              <MdClose />
            ) : (
              <MdRadioButtonUnchecked />
            )
          ) : (
            ""
          )}
        </GridItemStyled>
      ))}
    </GridContainerStyled>
  );
}

export default MainGameContainer;
