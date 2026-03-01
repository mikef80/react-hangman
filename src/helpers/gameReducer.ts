import { createInitialState } from "./helperFunctions";

export type GameState = {
  word: string;
  remainingGuesses: number;
  guessedLetters: string[];
  correctLetters: string[];
  gameStatus: "playing" | "won" | "lost";
  showStatus: boolean;
};

export type GameAction =
  | { type: "WRONG_GUESS"; letter: string }
  | { type: "CORRECT_GUESS"; letter: string }
  | { type: "RESET" }
  | { type: "SHOW_STATUS" };

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case "WRONG_GUESS":
      const newRemainingGuesses = state.remainingGuesses - 1;
      return {
        ...state,
        remainingGuesses: newRemainingGuesses,
        guessedLetters: [...state.guessedLetters, action.letter],
        gameStatus: newRemainingGuesses <= 0 ? "lost" : "playing",
      };

    case "CORRECT_GUESS":
      const newCorrectLetters = [...state.correctLetters, action.letter];

      const hasWon = state.word
        .split("")
        .every((letter) => newCorrectLetters.includes(letter));

      return {
        ...state,
        correctLetters: [...state.correctLetters, action.letter],
        guessedLetters: [...state.guessedLetters, action.letter],
        gameStatus: hasWon ? "won" : "playing",
      };

    case "RESET":
      return createInitialState();

    case "SHOW_STATUS":
      return {
        ...state,
        showStatus: !state.showStatus,
      };

    default:
      return state;
  }
}
