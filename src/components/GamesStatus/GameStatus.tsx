import styles from "./GamesStatus.module.scss";

const GameStatus = ({ status }: { status: string }) => {
  return (
    <div className={styles.status}>
      <h1>YOU {status.toUpperCase()}!</h1>
    </div>
  );
};

export default GameStatus;
