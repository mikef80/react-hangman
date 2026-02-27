import styles from "./GuessesGrid.module.scss";

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const GuessesGrid = ({
  letters,
  correctLetters,
}: {
  letters: string[];
  correctLetters: string[];
}) => {
  return (
    <div className={styles.guessesGrid}>
      {alphabet.map((letter, i) => {
        const guessedLetter = letters.includes(letter);
        const correctLetter = correctLetters.includes(letter);
        let guessClass =
          correctLetter && guessedLetter
            ? styles.correct
            : guessedLetter
              ? styles.incorrect
              : undefined;

        return (
          <span
            key={letter + i}
            className={guessClass}>
            {letter}
          </span>
        );
      })}
    </div>
  );
};

export default GuessesGrid;
