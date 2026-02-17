import styles from "./WordGrid.module.scss";

type WordGridProps = {
  word: string;
  correctLetters: string[];
};

const WordGrid = ({ word, correctLetters }: WordGridProps) => {
  return (
    <div className={styles.wordgrid}>
      {[...word].map((letter, index) => {
        return (
          <div className={styles.guessLetter} key={index}>
            {correctLetters.includes(letter) ? letter : null}
          </div>
        );
      })}
    </div>
  );
};

export default WordGrid;
