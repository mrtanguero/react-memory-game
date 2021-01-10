import React, { Component } from 'react';
import Card from './components/Card';
import './App.css';

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export default class App extends Component {
  state = {
    noOfMoves: 0,
    randomArray: shuffle([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]),
    currentMove: [],
    cardsOpen: Array(12).fill(false),
  };

  renderCardList = () => {
    console.log(this.state);
    return this.state.randomArray.map((num, ind) => {
      return (
        <Card
          key={ind}
          index={ind}
          value={num}
          isRotated={this.state.cardsOpen[ind]}
          onClick={this.onClickHandle}
        />
      );
    });
  };

  onClickHandle = (ind) => {
    const newCardsOpen = [...this.state.cardsOpen];
    newCardsOpen[ind] = !this.state.cardsOpen[ind];
    this.setState({ cardsOpen: newCardsOpen });
  };

  render() {
    return <div className="app">{this.renderCardList()}</div>;
  }
}
