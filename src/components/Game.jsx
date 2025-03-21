import React from "react";
import { useSpacemanGame } from "../hooks/useSpacemanGame";
import SpacemanFigure from "./SpacemanFigure";
import WordDisplay from "./WordDisplay";
import GuessControls from "./GuessControls";

function Game({ difficulty, onChangeDifficulty }) {
  const {
    secretWord,
    wrongGuesses,
    gameStatus,
    guessLetter,
    guessWholeWord,
    getRevealedLetters,
  } = useSpacemanGame({ maxWrongGuesses: 7, difficulty });

  const handleChangeDifficulty = (newDifficulty) => {
    onChangeDifficulty(newDifficulty);
  };

  return (
    <div>
      <h1>Spaceman</h1>
      <p>
        Current difficulty: <strong>{difficulty.toUpperCase()}</strong>
      </p>

      <button onClick={() => handleChangeDifficulty("easy")}>
        Switch to Easy
      </button>
      <button onClick={() => handleChangeDifficulty("medium")}>
        Switch to Medium
      </button>
      <button onClick={() => handleChangeDifficulty("hard")}>
        Switch to Hard
      </button>

      <SpacemanFigure wrongGuesses={wrongGuesses} />
      <WordDisplay revealedLetters={getRevealedLetters()} />
      <GuessControls
        gameStatus={gameStatus}
        onGuessLetter={guessLetter}
        onGuessWord={guessWholeWord}
      />

      {gameStatus === "won" && <p>You win! The word was: {secretWord}</p>}
      {gameStatus === "lost" && <p>You lost! The word was: {secretWord}</p>}
    </div>
  );
}

export default Game;
