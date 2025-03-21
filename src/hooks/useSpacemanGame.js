import { useState, useEffect } from "react";
import { getWordsByDifficulty } from "../data/words";

export function useSpacemanGame({ maxWrongGuesses = 7, difficulty = "easy" }) {
  const [secretWord, setSecretWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [gameStatus, setGameStatus] = useState("inProgress"); // Could be 'inProgress', 'won', or 'lost'

  // Select the random word on mount or when difficulty changes
  useEffect(() => {
    const wordsArray = getWordsByDifficulty(difficulty);
    const randomIndex = Math.floor(Math.random() * wordsArray.length);

    setSecretWord(wordsArray[randomIndex].toUpperCase());
    setGuessedLetters([]);
    setWrongGuesses(0);
    setGameStatus("inProgress");
  }, [difficulty]);

  // Reveal the letters guessed correctly, or underscores for unguessed
  function getRevealedLetters() {
    return secretWord
      .split("")
      .map((char) => (guessedLetters.includes(char) ? char : "_"));
  }

  // Check if the user has won
  function checkForWin() {
    const revealed = getRevealedLetters();
    if (!revealed.includes("_")) {
      setGameStatus("won");
    }
  }

  // Check if user has lost
  function checkForLose() {
    if (wrongGuesses >= maxWrongGuesses) {
      setGameStatus("lost");
    }
  }

  // Single letter guess
  function guessLetter(letter) {
    if (gameStatus !== "inProgress") return;

    letter = letter.toUpperCase();

    // If letter already guessed, skip
    if (guessedLetters.includes(letter)) {
      return;
    }

    setGuessedLetters((prev) => [...prev, letter]);

    if (!secretWord.includes(letter)) {
      setWrongGuesses((prev) => prev + 1);
    }
  }

  // Full word guess
  function guessWholeWord(wordGuess) {
    if (gameStatus !== "inProgress") return;

    wordGuess = wordGuess.toUpperCase();

    if (wordGuess === secretWord) {
      setGuessedLetters((prev) => [...prev, ...secretWord.split("")]);
      setGameStatus("won");
    } else {
      setWrongGuesses((prev) => prev + 1);
    }
  }

  // After each update of guessedLetters or wrongGuesses, check for win or lose
  useEffect(() => {
    checkForWin();
    checkForLose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [guessedLetters, wrongGuesses]);

  return {
    secretWord,
    guessedLetters,
    wrongGuesses,
    gameStatus,
    getRevealedLetters,
    guessLetter,
    guessWholeWord,
  };
}
