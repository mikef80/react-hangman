export type GameState = {
  wrongCount: number;
  wrongLetters: string[];
};

export type GameAction =
  | { type: "WRONG_GUESS"; letter: string }
  | { type: "RESET" };

export const initialState: GameState = {
  wrongCount: 0,
  wrongLetters: [],
};

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case "WRONG_GUESS":
      return {
        wrongCount: state.wrongCount + 1,
        wrongLetters: [...state.wrongLetters, action.letter],
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}
