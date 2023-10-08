import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessSlots from "../GuessSlots/GuessSlots";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [guess, setGuess] = React.useState("");

  const handleGuess = (event) => {
    event.preventDefault();
    setGuesses([...guesses, guess]);
    setGuess("");
  };

  return (
    <>
      <GuessSlots answer={answer} guesses={guesses} />
      <GuessInput guess={guess} handleGuess={handleGuess} setGuess={setGuess} />
    </>
  );
}

export default Game;
