import { correctGuess, wrongGuess } from "./gameActions";

const findAllIndexes = (word: string, letter: string) =>
  [...word].map((char, i) => (char === letter ? i : -1)).filter((i) => i !== -1);

export const handleSubmit = (letter: string, word: string, dispatch: any) => {
  const guessLetter = letter.toLowerCase();
  const occurences = findAllIndexes(word, guessLetter);

  if (occurences.length === 0) {
    dispatch(wrongGuess(guessLetter));
  } else {
    dispatch(correctGuess(guessLetter));
  }
};

export const checkIfWon = () => {};
