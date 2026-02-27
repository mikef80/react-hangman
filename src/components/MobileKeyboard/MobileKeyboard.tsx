import styles from "./MobileKeyboard.module.scss";

const rows = ["qwertyuiop".split(""), "asdfghjkl".split(""), "zxcvbnm".split("")];

interface Props {
  onLetter: (letter: string) => void;
  letters: string[];
  correctLetters: string[];
}

function MobileKeyboard({ onLetter, letters, correctLetters }: Props) {
  return (
    <div className={styles.keyboard}>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {row.map((letter) => {
            const guessedLetter = letters.includes(letter);
            const correctLetter = correctLetters.includes(letter);
            let guessClass =
              correctLetter && guessedLetter
                ? styles.correct
                : guessedLetter
                  ? styles.incorrect
                  : undefined;

            return (
              <button
                key={letter}
                onClick={() => onLetter(letter)}
                disabled={letters.includes(letter)}
                className={`button ${guessClass}`}>
                {letter}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default MobileKeyboard;
