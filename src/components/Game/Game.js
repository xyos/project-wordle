import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GuessInput from "../GuessInput/GuessInput";
import GuessSlots from "../GuessSlots/GuessSlots";
import GameResult from "../GameResult/GameResult";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [guess, setGuess] = React.useState("");

  const handleGuess = (event) => {
    event.preventDefault();
    if (guesses.length <= NUM_OF_GUESSES_ALLOWED) {
      setGuesses([...guesses, guess]);
      setGuess("");
    }
  };

  return (
    <>
      <GuessSlots answer={answer} guesses={guesses} />
      <GuessInput guess={guess} handleGuess={handleGuess} setGuess={setGuess} />
      <GameResult answer={answer} guesses={guesses} />
    </>
  );
}

export default Game;
