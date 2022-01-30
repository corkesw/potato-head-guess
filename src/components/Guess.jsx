import React, { useState } from "react";
import { words } from "../words";

const Guess = ({ score, setScore }) => {
  const [word, setWord] = useState(
    words[Math.floor(Math.random() * 999)].toUpperCase()
  );
  const [rightGuesses, setRightGuesses] = useState(0);
  const [guessed, setGuessed] = useState([]);

  const wordArray = word.split("");

  const uniqueLetters = [];

  wordArray.forEach((letter) => {
    if (!uniqueLetters.includes(letter)) {
      uniqueLetters.push(letter);
    }
  });

  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const resetGame = () => {
    setWord(words[Math.floor(Math.random() * 999)].toUpperCase());
    setRightGuesses(0);
    setGuessed([]);
    setScore(0);
  };

  const keyPress = (letter) => {
    if (guessed.length === 0) {
      setGuessed([letter]);
    } else {
      setGuessed([...guessed, letter]);
    }
    if (!wordArray.includes(letter)) {
      setScore(() => {
        if (score === 7) return 7;
        return score + 1;
      });
    } else {
      setRightGuesses((current) => {
        return current + 1;
      });
    }
  };

  return (
    <>
      {/* render the keyboard */}

      <div className="keyboard">
        {alphabet.map((letter) => {
          return (
            <button
              key={`keyboard-${letter}`}
              disabled={guessed.includes(letter)}
              className="letter"
              onClick={() => {
                keyPress(letter);
              }}
            >
              {letter}
            </button>
          );
        })}
      </div>

      <div className="word">
        {/* render the word being guessed */}
        {wordArray.map((letter, index) => {
          return (
            <button key={`word-${letter}${index}`} className="wordletter">
              {guessed.includes(letter) ? letter : " "}
            </button>
          );
        })}
      </div>

      <div className="reset">
        {score === 7 && rightGuesses !== uniqueLetters.length ? (
          <p>You're dead! But keep on guessing!!!</p>
        ) : null}
        {rightGuesses === uniqueLetters.length ? (
          <>
            {" "}
            <p>Well done clever clogs!</p>
            <button className="reset-button" onClick={resetGame}>
              reset game
            </button>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Guess;
