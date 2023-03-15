export const setGameOptions = {
  CHANGE_PLAYER: "change player",
  HIDE_DISPLAY: "hide display",
  SHOW_DISPLAY: "show display",
  NO_WINNERS: "no winners",
  PLAYER_ONE_WINS: "x wins",
  PLAYER_TWO_WINS: "o wins",
  RELOAD: "reload",
};

export const setGameReducer = (state, action) => {
  switch (action.type) {
    case setGameOptions.RELOAD:
      return {
        playerOneIsActive: true,
        displayIsVisible: true,
        winner: null,
        winnerPlayer: null,
      };
    case setGameOptions.CHANGE_PLAYER:
      return {
        ...state,
        playerOneIsActive: !state.playerOneIsActive,
      };
    case setGameOptions.HIDE_DISPLAY:
      return { ...state, displayIsVisible: false };
    case setGameOptions.SHOW_DISPLAY:
      return { ...state, displayIsVisible: true };
    case setGameOptions.NO_WINNERS:
      return { ...state, displayIsVisible: false, winner: " No winners" };

    case setGameOptions.PLAYER_ONE_WINS:
      return { ...state, winnerPlayer: true, winner: "X Player Wins" };
    case setGameOptions.PLAYER_TWO_WINS:
      return { ...state, winnerPlayer: true, winner: "O Player Wins" };
    default:
      return {
        playerOneIsActive: true,
        displayIsVisible: true,
        winner: null,
        winnerPlayer: null,
      };
  }
};

// const setGameOptions = {
//   CHANGE_PLAYER: "change player",
//   HIDE_DISPLAY: "hide display",
//   SHOW_DISPLAY: "show display",
//   NO_WINNERS: "no winners",
//   PLAYER_ONE_WINS: "x wins",
//   PLAYER_TWO_WINS: "o wins",
//   RELOAD: "reload",
// };

// const setGameReducer = (state, action) => {
//   switch (action.type) {
//     case setGameOptions.RELOAD:
//       return {
//         playerOneIsActive: true,
//         displayIsVisible: true,
//         winner: null,
//         winnerPlayer: null,
//       };
//     case setGameOptions.CHANGE_PLAYER:
//       return {
//         ...state,
//         playerOneIsActive: !state.playerOneIsActive,
//       };
//     case setGameOptions.HIDE_DISPLAY:
//       return { ...state, displayIsVisible: false };
//     case setGameOptions.SHOW_DISPLAY:
//       return { ...state, displayIsVisible: true };
//     case setGameOptions.NO_WINNERS:
//       return { ...state, displayIsVisible: false, winner: " No winners" };

//     case setGameOptions.PLAYER_ONE_WINS:
//       return { ...state, winnerPlayer: true, winner: "X Player Wins" };
//     case setGameOptions.PLAYER_TWO_WINS:
//       return { ...state, winnerPlayer: true, winner: "O Player Wins" };
//     default:
//       return {
//         playerOneIsActive: true,
//         displayIsVisible: true,
//         winner: null,
//         winnerPlayer: null,
//       };
//   }
// };

// if (action.type === setGameOptions.RELOAD) {
//   return {
//     playerOneIsActive: true,
//     displayIsVisible: true,
//     winner: null,
//     winnerPlayer: null,
//   };
// }

// if (action.type === setGameOptions.CHANGE_PLAYER) {
//   return {
//     ...state,
//     playerOneIsActive: !state.playerOneIsActive,
//   };
// }

// if (action.type === setGameOptions.HIDE_DISPLAY) {
//   return { ...state, displayIsVisible: false };
// }
// if (action.type === setGameOptions.SHOW_DISPLAY) {
//   return { ...state, displayIsVisible: true };
// }

// if (action.type === setGameOptions.NO_WINNERS) {
//   return { ...state, displayIsVisible: false, winner: " No winners" };
// }

// if (action.type === setGameOptions.PLAYER_ONE_WINS) {
//   return { ...state, winnerPlayer: true, winner: "X Player Wins" };
// }

// if (action.type === setGameOptions.PLAYER_TWO_WINS) {
//   return { ...state, winnerPlayer: true, winner: "O Player Wins" };
// }

// return {
//   playerOneIsActive: true,
//   displayIsVisible: true,
//   winner: null,
//   winnerPlayer: null,
// };
