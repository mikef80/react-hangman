import { wrongGuess } from "./gameActions";

const findAllIndexes = (word: string, letter: string) =>
  [...word].map((char, i) => (char === letter ? i : -1)).filter((i) => i !== -1);

export const handleSubmit = (word: string, dispatch: any) => {
  const input = document.getElementById("guess") as HTMLInputElement;
  const guessLetter = input.value;

  const occurences = findAllIndexes(word, guessLetter);

  if (occurences.length === 0) {
    dispatch(wrongGuess(guessLetter));
  }

  input.value = "";
};
