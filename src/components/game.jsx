import React, { useEffect, useState } from 'react';
import s from './game.module.css';

const Game = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('???');
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const choices = ['Rock', 'Paper', 'Scissors'];

  useEffect(() => {
    if (playerChoice && computerChoice) {
      checkOutcome(playerChoice, computerChoice);
    }
  }, [playerChoice, computerChoice]);

  const setChoice = (value) => {
    const genComputerChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(genComputerChoice);
    setPlayerChoice(value);
  };

  const checkOutcome = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      setResult("It's a tie!");
    } else if (
      (playerChoice === 'Paper' && computerChoice === 'Rock') ||
      (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
      (playerChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
      setResult('Player win!');
      setPlayerScore((prev) => prev + 1);
    } else {
      setResult('Computer wins!');
      setComputerScore((prev) => prev + 1);
    }
  };

  const reset = () => {
    setResult('???');
    setComputerChoice(null);
    setPlayerChoice(null);
    setPlayerScore(0);
    setComputerScore(0);
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}>Rock🗿-Paper📃-Scissors✂️</h1>
      <div className={s.game}>
        <div className={s.choices}>
          <button className={s.choiceBtn} onClick={() => setChoice('Rock')}>
            Rock
          </button>
          <button className={s.choiceBtn} onClick={() => setChoice('Paper')}>
            Paper
          </button>
          <button className={s.choiceBtn} onClick={() => setChoice('Scissors')}>
            Scissors
          </button>
        </div>
        {playerChoice && computerChoice && (
          <div className={s.result}>
            <p className={s.resultText}>You chose: {playerChoice}</p>
            <p className={s.resultText}>Computer chose: {computerChoice}</p>
            <hr />
            <p className={s.resultText}>{result}</p>
          </div>
        )}
        <div className={s.score}>
          <p className={s.scoreText}>Player score: {playerScore}</p>
          <p className={s.scoreText}>Computer score: {computerScore}</p>
        </div>
        <button onClick={reset} className={s.resetBtn}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Game;
