import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GameResult({ answer, guesses, resetGame }) {
  const won = guesses.includes(answer);
  const lost = guesses.length === NUM_OF_GUESSES_ALLOWED;
  const numGuesses = guesses.length;
  const bannerClass = won ? "happy" : lost ? "sad" : "";
  return won || lost ? (
    <div className={`banner ${bannerClass}`}>
      <div>
        {won && (
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{numGuesses} guesses</strong>.
          </p>
        )}
        {lost && (
          <>
            <p>
              Sorry, the correct answer is <strong>{answer}</strong>.
            </p>
          </>
        )}
      </div>
      <button className="reset-game" onClick={resetGame}>
        Play Again
      </button>
    </div>
  ) : null;
}

export default GameResult;
