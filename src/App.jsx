import React, { useState } from "react";
import Game from "./components/Game";
import "./styles/App.css";

function App() {
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);

  const incrementWins = () => setWins((prev) => prev + 1);
  const incrementLosses = () => setLosses((prev) => prev + 1);

  return (
    <div className="App">
      <div className="container">
        <h1>Spaceman</h1>
        <div className="scoreboard">
          <span className="wins">Wins: {wins}</span>
          <span className="losses">Losses: {losses}</span>
        </div>
        <Game onWin={incrementWins} onLose={incrementLosses} />
      </div>
    </div>
  );
}

export default App;
