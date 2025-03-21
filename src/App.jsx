import React, { useState } from "react";
import DifficultySelector from "./components/DifficultySelector";
import Game from "./components/Game";
import "./styles/App.css";

function App() {
  const [difficulty, setDifficulty] = useState(null);

  if (!difficulty) {
    return <DifficultySelector onSelectDifficulty={setDifficulty} />;
  }

  return <Game difficulty={difficulty} onChangeDifficulty={setDifficulty} />;
}

export default App;
