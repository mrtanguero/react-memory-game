import React from 'react';
import './Scoreboard.css';

export default function Scoreboard({ score, movesLeft, handleBtnClick }) {
  let message = 'REACT MEMORY GAME';
  if (!movesLeft) message = 'Awwww, you failed 😢️';
  if (score === 6) message = 'Grejt skses! 👏️👏️👏️';

  return (
    <div className="scoreboard">
      <div className="moves">
        <h3>
          Moves
          <span>{movesLeft}</span>
        </h3>
      </div>
      <div className="message">
        <h2>{message}</h2>
        {message !== 'REACT MEMORY GAME' ? (
          <button onClick={handleBtnClick} className="btn">
            TRY AGAIN
          </button>
        ) : null}
      </div>
      <div className="score">
        <h3>
          Score
          <span>{score}</span>
        </h3>
      </div>
    </div>
  );
}
