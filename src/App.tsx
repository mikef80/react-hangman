import { useEffect, useReducer } from "react";
import Canvas from "./components/Canvas/Canvas";
import Header from "./components/Header/Header";
import styles from "./App.module.scss";
import { createInitialState, handleSubmit } from "./helpers/helperFunctions";
import { gameReducer } from "./helpers/gameReducer";
import GuessesGrid from "./components/GuessesGrid/GuessesGrid";
import WordGrid from "./components/WordGrid/WordGrid";
import GameStatus from "./components/GamesStatus/GameStatus";

function App() {
  const [state, dispatch] = useReducer(gameReducer, undefined, createInitialState);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.repeat) return;

      if (/^[a-zA-Z]$/.test(e.key)) {
        handleSubmit(e.key, state.word, dispatch);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [state.word]);

  useEffect(() => {
    if ((state.gameStatus === "lost" || state.gameStatus === "won") && !state.showStatus) {
      const timer = setTimeout(() => {
        dispatch({ type: "SHOW_STATUS" });
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [state.gameStatus, state.showStatus, dispatch]);

  return (
    <div className={styles.container}>
      <Header />
      <Canvas remainingGuesses={state.remainingGuesses} />
      <WordGrid word={state.word} correctLetters={state.correctLetters} />
      <GuessesGrid letters={state.guessedLetters} correctLetters={state.correctLetters} />
      {state.showStatus && (
        <GameStatus status={state.gameStatus} word={state.word} dispatch={dispatch} />
      )}
    </div>
  );
}

export default App;
