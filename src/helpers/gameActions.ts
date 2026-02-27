export const wrongGuess = (letter: string) => ({
  type: "WRONG_GUESS" as const,
  letter,
});

export const correctGuess = (letter: string) => ({
  type: "CORRECT_GUESS" as const,
  letter,
});

export const resetGame = () => ({
  type: "RESET" as const,
});

export const showState = () => ({
  type: "SHOW_STATUS" as const,
});
