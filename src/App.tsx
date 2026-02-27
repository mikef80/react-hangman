import { useEffect, useReducer, useCallback, useMemo } from "react";
import Canvas from "./components/Canvas/Canvas";
import Header from "./components/Header/Header";
import styles from "./App.module.scss";
import { createInitialState, handleSubmit } from "./helpers/helperFunctions";
import { gameReducer } from "./helpers/gameReducer";
import GuessesGrid from "./components/GuessesGrid/GuessesGrid";
import WordGrid from "./components/WordGrid/WordGrid";
import GameStatus from "./components/GamesStatus/GameStatus";
import MobileKeyboard from "./components/MobileKeyboard/MobileKeyboard";

function App() {
  const [state, dispatch] = useReducer(
    gameReducer,
    undefined,
    createInitialState
  );

  // Detect touch device once
  const isTouchDevice = useMemo(() => {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0
    );
  }, []);

  // Shared letter handler
  const handleLetter = useCallback(
    (letter: string) => {
      if (
        /^[a-zA-Z]$/.test(letter) &&
        !state.guessedLetters.includes(letter)
      ) {
        handleSubmit(letter.toLowerCase(), state.word, dispatch);
      }
    },
    [state.word, state.guessedLetters, dispatch]
  );

  // Desktop keyboard only
  useEffect(() => {
    if (isTouchDevice) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.repeat) return;
      handleLetter(e.key);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleLetter, isTouchDevice]);

  // Game status timer
  useEffect(() => {
    if (
      (state.gameStatus === "lost" ||
        state.gameStatus === "won") &&
      !state.showStatus
    ) {
      const timer = setTimeout(() => {
        dispatch({ type: "SHOW_STATUS" });
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [state.gameStatus, state.showStatus]);

  return (
    <div className={styles.container}>
      <Header />
      <Canvas remainingGuesses={state.remainingGuesses} />
      <WordGrid
        word={state.word}
        correctLetters={state.correctLetters}
      />
      {!isTouchDevice&&<GuessesGrid
        letters={state.guessedLetters}
        correctLetters={state.correctLetters}
      />}

      {isTouchDevice && state.gameStatus === "playing" && (
        <MobileKeyboard
          onLetter={handleLetter}
          letters={state.guessedLetters}
          correctLetters={state.correctLetters}
        />
      )}

      {state.showStatus && (
        <GameStatus
          status={state.gameStatus}
          word={state.word}
          dispatch={dispatch}
        />
      )}
    </div>
  );
}

export default App;