import { useState } from "react";
import Canvas from "./components/Canvas/Canvas";
import Header from "./components/Header/Header";
import styles from "./App.module.scss";

function App() {
  const [wrongGuesses, setWrongGuesses] = useState(0);

  return (
    <div className={styles.container}>
      <Header />
      <Canvas wrongGuesses={wrongGuesses} />
      <button onClick={() => setWrongGuesses((v) => v+=1)}>Click</button>
    </div>
  );
}

export default App;
