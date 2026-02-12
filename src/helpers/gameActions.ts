export const wrongGuess = (letter: string) => ({
  type: "WRONG_GUESS" as const,
  letter,
});

export const resetGame = () => ({
  type: "RESET" as const,
});
