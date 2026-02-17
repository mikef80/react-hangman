export type GameState = {
  remainingGuesses: number;
  wrongLetters: string[];
  correctLetters: string[];
};

export type GameAction =
  | { type: "WRONG_GUESS"; letter: string }
  | { type: "CORRECT_GUESS"; letter: string }
  | { type: "RESET" };

export const initialState: GameState = {
  remainingGuesses: 15,
  wrongLetters: [],
  correctLetters: [],
};

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case "WRONG_GUESS":
      return {
        ...state,
        remainingGuesses: state.remainingGuesses - 1,
        wrongLetters: [...state.wrongLetters, action.letter],
      };

    case "CORRECT_GUESS":
      return {
        ...state,
        correctLetters: [...state.correctLetters, action.letter],
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}
