import React, { useState } from "react";

function GuessControls({ gameStatus, onGuessLetter, onGuessWord }) {
  const [letterInput, setLetterInput] = useState("");
  const [wordInput, setWordInput] = useState("");

  if (gameStatus !== "inProgress") {
    return (
      <p>The game is over. Start a new round or switch difficulty above!</p>
    );
  }

  const handleLetterSubmit = (e) => {
    e.preventDefault();
    if (letterInput.length === 1 && /[a-zA-Z]/.test(letterInput)) {
      onGuessLetter(letterInput);
    }
    setLetterInput("");
  };

  const handleWordSubmit = (e) => {
    e.preventDefault();
    if (wordInput.trim().length > 0) {
      onGuessWord(wordInput.trim());
    }
    setWordInput("");
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      <form onSubmit={handleLetterSubmit}>
        <label>Guess a Letter:&nbsp;</label>
        <input
          type="text"
          value={letterInput}
          onChange={(e) => setLetterInput(e.target.value)}
          maxLength={1}
        />
        <button type="submit">Guess Letter</button>
      </form>

      <form onSubmit={handleWordSubmit} style={{ marginTop: "0.5rem" }}>
        <label>Guess the Word:&nbsp;</label>
        <input
          type="text"
          value={wordInput}
          onChange={(e) => setWordInput(e.target.value)}
        />
        <button type="submit">Guess Word</button>
      </form>
    </div>
  );
}

export default GuessControls;
