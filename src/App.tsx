import { useEffect, useReducer, useState } from "react";
import Canvas from "./components/Canvas/Canvas";
import Header from "./components/Header/Header";
import styles from "./App.module.scss";
import { handleSubmit } from "./helpers/helperFunctions";
import { gameReducer, initialState } from "./helpers/gameReducer";
import WrongGuesses from "./components/WrongGuesses/WrongGuesses";
import WordGrid from "./components/WordGrid/WordGrid";
import GameStatus from "./components/GamesStatus/GameStatus";

function App() {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const [showStatus, setShowStatus] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.repeat) return;

      if (/^[a-zA-Z]$/.test(e.key)) {
        console.log("Pressed:", e.key);
        handleSubmit(e.key, state.word, dispatch);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (state.gameStatus === "lost" || state.gameStatus === "won") {
      setShowStatus(true);
    }
  }, [state]);

  return (
    <div className={styles.container}>
      <Header />
      <Canvas remainingGuesses={state.remainingGuesses} />
      <WordGrid word={state.word} correctLetters={state.correctLetters} />
      <WrongGuesses letters={state.wrongLetters} />
      {showStatus && <GameStatus status={state.gameStatus} />}
    </div>
  );
}

export default App;
