import { resetGame, showState } from "../../helpers/gameActions";
import styles from "./GamesStatus.module.scss";

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

  return (
    <div className={styles.status}>
      <h1>YOU {status.toUpperCase()}!</h1>
      <p>The word was <strong><em>{word}</em></strong></p>
      <button onClick={handleRestart}>restart</button>
    </div>
  );
};

export default GameStatus;
