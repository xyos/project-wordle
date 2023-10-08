import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GuessRow from "../GuessRow/GuessRow";

const EMPTY_GUESS = "     ";

function GuessSlots({ answer, guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => {
        const guess = guesses[index] || EMPTY_GUESS;
        return <GuessRow key={index} answer={answer} guess={guess} />;
      })}
    </div>
  );
}

export default GuessSlots;
