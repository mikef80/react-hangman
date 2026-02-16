import { useReducer, useState } from "react";
import Canvas from "./components/Canvas/Canvas";
import Header from "./components/Header/Header";
import styles from "./App.module.scss";
import { handleSubmit } from "./helpers/helperFunctions";
import { gameReducer, initialState } from "./helpers/gameReducer";
import WrongGuesses from "./components/WrongGuesses/WrongGuesses";

function App() {
  const [word, setWord] = useState("chicken");
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <div className={styles.container}>
      <Header />
      <Canvas wrongGuesses={state.wrongCount} />
      <input
        type='text'
        name='guess'
        id='guess'
        max={1}
        onChange={() => handleSubmit(word, dispatch)}
      />
      <WrongGuesses letters={state.wrongLetters}/>
    </div>
  );
}

export default App;
