import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GuessInput from "../GuessInput/GuessInput";
import GuessSlots from "../GuessSlots/GuessSlots";
import GameResult from "../GameResult/GameResult";
import GameKeyboard from "../GameKeyboard/GameKeyboard";

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);
  const [guess, setGuess] = React.useState("");

  console.log("answer", answer);

  const handleGuess = (event) => {
    event.preventDefault();
    if (
      guesses.length <= NUM_OF_GUESSES_ALLOWED &&
      !guesses.includes(answer) &&
      !guesses.includes(guess)
    ) {
      setGuesses([...guesses, guess]);
      setGuess("");
    }
  };

  const resetGame = () => {
    setAnswer(sample(WORDS));
    setGuesses([]);
    setGuess("");
  };

  return (
    <>
      <GuessSlots answer={answer} guesses={guesses} />
      <GuessInput guess={guess} handleGuess={handleGuess} setGuess={setGuess} />
      <GameResult answer={answer} guesses={guesses} resetGame={resetGame} />
      <GameKeyboard answer={answer} guesses={guesses} />
    </>
  );
}

export default Game;
