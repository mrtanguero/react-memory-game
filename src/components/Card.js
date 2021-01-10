import React from 'react';
import './Card.css';

export default function Card({ index, value, isRotated, onClick }) {
  const onCardClick = () => {
    onClick(index);
  };

  return (
    <div onClick={onCardClick} className={`card ${isRotated ? 'rotated' : ''}`}>
      <div className="card__side card__side--front">
        <img src={require('../img/logo.png').default} alt="Logo" />
      </div>
      <div className="card__side card__side--back">
        <img
          src={require(`../img/${value}.png`).default}
          alt={'Image ' + value}
        />
      </div>
    </div>
  );
}
