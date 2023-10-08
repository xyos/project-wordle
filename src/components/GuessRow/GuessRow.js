import React from "react";
import { checkGuess } from "../../game-helpers";

function GuessRow({ answer, guess }) {
  const letters = checkGuess(guess, answer);
  return (
    <p className="guess">
      {letters.map(({ letter, status }, index) => (
        <span
          key={index}
          className={`cell ${letter === " " ? "" : status}`.trim()}
        >
          {letter}
        </span>
      ))}
    </p>
  );
}

export default GuessRow;
