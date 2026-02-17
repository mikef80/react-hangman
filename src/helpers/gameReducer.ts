export type GameState = {
  remainingGuesses: number;
  wrongLetters: string[];
};

export type GameAction =
  | { type: "WRONG_GUESS"; letter: string }
  | { type: "RESET" };

export const initialState: GameState = {
  remainingGuesses: 15,
  wrongLetters: [],
};

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case "WRONG_GUESS":
      return {
        remainingGuesses: state.remainingGuesses - 1,
        wrongLetters: [...state.wrongLetters, action.letter],
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}
