import React from "react";

function WordDisplay({ revealedLetters }) {
  return (
    <div style={{ fontSize: "1.5rem", margin: "1rem 0" }}>
      {revealedLetters.map((char, idx) => (
        <span key={idx} style={{ marginRight: "0.5rem" }}>
          {char}
        </span>
      ))}
    </div>
  );
}

export default WordDisplay;
