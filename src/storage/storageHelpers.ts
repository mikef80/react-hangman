type Result = "won" | "lost";

export const getPlayerStats = () => {
  const savedData = localStorage.getItem("derailed");

  return savedData
    ? JSON.parse(savedData)
    : { won: 0, lost: 0, currentStreak: 0, bestStreak: 0 };
};

export const setPlayerStats = (result: Result) => {
  const newPlayerData = getPlayerStats();

  if (result === "won") {
    newPlayerData.won += 1;
    newPlayerData.currentStreak += 1;

    if (newPlayerData.currentStreak > newPlayerData.bestStreak) {
      newPlayerData.bestStreak = newPlayerData.currentStreak;
    }
  } else {
    newPlayerData.lost += 1;
    newPlayerData.currentStreak = 0;
  }

  localStorage.setItem("derailed", JSON.stringify(newPlayerData));
};
