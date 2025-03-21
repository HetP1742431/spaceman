import React, { useState, useEffect } from "react";
import { useSpacemanGame } from "../hooks/useSpacemanGame";
import SpacemanFigure from "./SpacemanFigure";
import WordDisplay from "./WordDisplay";
import GuessControls from "./GuessControls";
import Modal from "./Modal";

function Game({ onWin, onLose }) {
  const [difficulty, setDifficulty] = useState("easy");
  const [scoreUpdated, setScoreUpdated] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", message: "" });

  // Toast for repeated guess
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const {
    secretWord,
    wrongGuesses,
    gameStatus,
    guessLetter,
    guessWholeWord,
    getRevealedLetters,
    resetGame,
    guessedLetters,
  } = useSpacemanGame({ difficulty });

  // Whenever difficulty changes, reset scoreboard update
  useEffect(() => {
    setScoreUpdated(false);
  }, [difficulty]);

  // Check game status => show modal once (win/lose)
  useEffect(() => {
    if (!scoreUpdated && (gameStatus === "won" || gameStatus === "lost")) {
      if (gameStatus === "won") {
        onWin();
        setModalContent({
          title: "You Win!",
          message: `Congratulations, you guessed "${secretWord}"!`,
        });
      } else {
        onLose();
        setModalContent({
          title: "You Lost!",
          message: `Oops, the word was "${secretWord}". Better luck next time!`,
        });
      }
      setModalOpen(true);
      setScoreUpdated(true);
    }
  }, [gameStatus, scoreUpdated, onWin, onLose, secretWord]);

  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
  };

  /** Start a fresh game (same difficulty) */
  const handleNewGame = () => {
    resetGame();
    setScoreUpdated(false);
    setModalOpen(false);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // Show a toast for repeated guess
  const showRepeatedGuessToast = (letter) => {
    setToastMessage(`You already guessed '${letter}'!`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  /**
   * We intercept the single-letter guess so we can check repeated letters
   * and show a toast. Then call guessLetter() from the hook if it's valid.
   */
  const handleGuessLetter = (letter) => {
    if (gameStatus !== "inProgress") return;
    letter = letter.toUpperCase();

    if (guessedLetters.includes(letter)) {
      showRepeatedGuessToast(letter);
    } else {
      guessLetter(letter);
    }
  };

  const handleGuessWholeWord = (word) => {
    if (gameStatus !== "inProgress") return;
    guessWholeWord(word);
  };

  return (
    <div>
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="difficultySelect">Difficulty:</label>
        <select
          id="difficultySelect"
          value={difficulty}
          onChange={handleDifficultyChange}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <SpacemanFigure wrongGuesses={wrongGuesses} />

      <WordDisplay revealedLetters={getRevealedLetters()} />

      <GuessControls
        gameStatus={gameStatus}
        onGuessLetter={handleGuessLetter}
        onGuessWord={handleGuessWholeWord}
      />

      <div className="btn-row">
        <button onClick={handleNewGame}>New Game</button>
      </div>

      <Modal
        show={modalOpen}
        title={modalContent.title}
        message={modalContent.message}
        onClose={closeModal}
      />

      {showToast && (
        <div
          style={{
            position: "fixed",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#333",
            color: "#fff",
            padding: "1rem 2rem",
            borderRadius: "8px",
            zIndex: 9999,
          }}
        >
          {toastMessage}
        </div>
      )}
    </div>
  );
}

export default Game;
