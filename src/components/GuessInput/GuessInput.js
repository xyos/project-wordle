import React from "react";

function GuessInput({ guess, handleGuess, setGuess }) {
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => handleGuess(event)}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        autoComplete="off"
        maxLength={5}
        pattern="[A-Za-z]{5}"
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
        id="guess-input"
        type="text"
      />
    </form>
  );
}

export default GuessInput;
