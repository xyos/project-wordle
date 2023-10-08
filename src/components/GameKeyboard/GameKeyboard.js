import React from "react";
import { checkGuess } from "../../game-helpers";

function GameKeyboard({ answer, guesses }) {

  const rows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  const keyStatus = rows.flat().reduce((acc, letter) => {
    acc[letter] = "";
    return acc;
  }, {});


  guesses.forEach((guess) => {
    const letters = checkGuess(guess, answer);
    letters.forEach(({ letter, status }) => {
      const currentStatus = keyStatus[letter];
      if (currentStatus === "" || currentStatus === "incorrect") {
        keyStatus[letter] = status;
      } else if (currentStatus === "misplaced" && status === "correct") {
        keyStatus[letter] = status;
      }
    });
  });

  return <div>
    {rows.map((row, index) => {
      return <div className="keyboard-row" key={index}>
        {row.map((letter) => {
          return <div className={`cell ${keyStatus[letter]}`} key={letter}>{letter}</div>
        })}
      </div>
    })}
  </div>;
}

export default GameKeyboard;
