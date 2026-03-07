import type { GameState } from "../helpers/gameReducer";

export const getPlayerStats = () => {
  const savedData = localStorage.getItem("derailed");

  return savedData
    ? JSON.parse(savedData)
    : { won: 0, lost: 0, currentStreak: 0, bestStreak: 0, guessArray: [] };
};

export const setPlayerStats = (state: GameState) => {
  const newPlayerData = getPlayerStats();
  const { gameStatus } = state;

  if (gameStatus === "won") {
    newPlayerData.won += 1;
    newPlayerData.currentStreak += 1;
    newPlayerData.guessArray = [...newPlayerData.guessArray, state.currentNumberOfGuesses];

    if (newPlayerData.currentStreak > newPlayerData.bestStreak) {
      newPlayerData.bestStreak = newPlayerData.currentStreak;
    }
  } else {
    newPlayerData.lost += 1;
    newPlayerData.currentStreak = 0;
    newPlayerData.guessArray = [...newPlayerData.guessArray, state.currentNumberOfGuesses];
  }

  localStorage.setItem("derailed", JSON.stringify(newPlayerData));
};
