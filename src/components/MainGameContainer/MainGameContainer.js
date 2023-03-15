import Cube from "./Cube/Cube";
import { GridContainerStyled } from "./styles/MainGameStyles";
import { arr } from "../assets/helpers";

import useGame from "../../hooks/use-game";

function MainGameContainer({ onChangePlayer, onHideGame, getWinner }) {
  const { clickhandler, dataArr: gameArr } = useGame(
    arr,
    getWinner,
    onHideGame,
    onChangePlayer
  );

  return (
    <GridContainerStyled>
      {gameArr.map((cube, index) => (
        <Cube {...cube} onClick={clickhandler} index={index} key={index} />
      ))}
    </GridContainerStyled>
  );
}

export default MainGameContainer;
