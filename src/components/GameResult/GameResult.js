import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GameResult({ answer, guesses }) {
  const won = guesses.includes(answer);
  const lost = guesses.length === NUM_OF_GUESSES_ALLOWED;
  const numGuesses = guesses.length;
  const bannerClass = won ? "happy" : lost ? "sad" : "";
  return won || lost ? (
    <div className={`banner ${bannerClass}`}>
      <p>
        {won && (
          <>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{numGuesses} guesses</strong>.
          </>
        )}
        {lost && (
          <>
            <p>
              Sorry, the correct answer is <strong>{answer}</strong>.
            </p>
          </>
        )}
      </p>
    </div>
  ) : null;
}

export default GameResult;
