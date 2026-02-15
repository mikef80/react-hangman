import styles from "./WrongGuesses.module.scss";

const WrongGuesses = ({ letters }: { letters: string[] }) => {
  return (
    <div className={styles.wrongGuesses}>
      {letters.map((letter, i) => {
        return <span key={letter + i}>{letter}</span>;
      })}
    </div>
  );
};

export default WrongGuesses;
