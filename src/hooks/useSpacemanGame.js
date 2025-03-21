import { useState, useEffect } from "react";
import { getWordsByDifficulty } from "../data/words";

export function useSpacemanGame({ maxWrongGuesses = 7, difficulty = "easy" }) {
  const [secretWord, setSecretWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [gameStatus, setGameStatus] = useState("inProgress"); // 'inProgress', 'won', or 'lost'

  useEffect(() => {
    resetGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [difficulty]);

  function resetGame() {
    const wordsArray = getWordsByDifficulty(difficulty);

    if (!wordsArray || wordsArray.length === 0) {
      console.warn("No words found for difficulty:", difficulty);
      setSecretWord("FALLBACK");
    } else {
      const randomIndex = Math.floor(Math.random() * wordsArray.length);
      setSecretWord(wordsArray[randomIndex].toUpperCase());
    }

    setGuessedLetters([]);
    setWrongGuesses(0);
    setGameStatus("inProgress");
  }

  // Show underscores or revealed letters for current guesses
  function getRevealedLetters(customGuesses = guessedLetters) {
    return secretWord
      .split("")
      .map((char) => (customGuesses.includes(char) ? char : "_"));
  }

  // Check if fully revealed
  function checkForWin(customGuesses = guessedLetters) {
    const revealed = getRevealedLetters(customGuesses);
    if (!revealed.includes("_")) {
      setGameStatus("won");
    }
  }

  // Check if lost/out of guesses
  function checkForLose(newWrongGuesses) {
    if (newWrongGuesses >= maxWrongGuesses) {
      setGameStatus("lost");
    }
  }

  // Guess a single letter
  function guessLetter(letter) {
    if (gameStatus !== "inProgress") return;
    letter = letter.toUpperCase();

    setGuessedLetters((prev) => [...prev, letter]);

    if (!secretWord.includes(letter)) {
      setWrongGuesses((prev) => {
        const updated = prev + 1;
        checkForLose(updated);
        return updated;
      });
    } else {
      checkForWin([...guessedLetters, letter]);
    }
  }

  // Guess the whole word
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

  return {
    secretWord,
    guessedLetters,
    wrongGuesses,
    gameStatus,
    getRevealedLetters,
    guessLetter,
    guessWholeWord,
    resetGame,
  };
}
