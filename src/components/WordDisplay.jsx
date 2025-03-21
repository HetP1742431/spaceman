import React from "react";

function WordDisplay({ revealedLetters }) {
  // revealedLetters could be an array like ['H', '_', 'L', 'L', '_']
  return (
    <div>
      {revealedLetters.map((char, i) => (
        <span key={i}>{char} </span>
      ))}
    </div>
  );
}

export default WordDisplay;
