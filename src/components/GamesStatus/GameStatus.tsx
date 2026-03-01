import { resetGame } from "../../helpers/gameActions";
import { RotateCw } from "lucide-react";
import styles from "./GamesStatus.module.scss";
import { getPlayerStats } from "../../storage/storageHelpers";

const GameStatus = ({
  status,
  dispatch,
  word,
}: {
  status: string;
  dispatch: any;
  word: string;
}) => {
  const handleRestart = () => {
    dispatch(resetGame());
  };

  const { won, lost, currentStreak, bestStreak } = getPlayerStats();

  return (
    <div className={styles.status}>
      <h1>YOU {status.toUpperCase()}!</h1>
      <p>
        The word was{" "}
        <strong>
          <em>{word}</em>
        </strong>
      </p>
      <p className={styles.results}>
        <span>Won: {won}</span>
        <span>Lost: {lost}</span>
        <span>Current streak: {currentStreak}</span>
        <span>Best streak: {bestStreak}</span>
        <span>Overall win rate (%): {(won / (won + lost)) * 100}</span>
      </p>
      <button className={styles.button} onClick={handleRestart}>
        <RotateCw className={styles.restartIcon} size={14} />
        restart
      </button>
    </div>
  );
};

export default GameStatus;
