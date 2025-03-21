import React from "react";
import SpacemanFigure from "./components/SpacemanFigure";
import WordDisplay from "./components/WordDisplay";
import GuessControls from "./components/GuessControls";
import "./styles/App.css";

function App() {
  return (
    <div>
      <h1>Spaceman Game</h1>
      <SpacemanFigure wrongGuesses={0} />
      <WordDisplay revealedLetters={["H", "_", "L", "L", "_"]} />
      <GuessControls />
    </div>
  );
}

export default App;
