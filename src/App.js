import React, { Component } from 'react';
import Card from './components/Card';
import './App.css';
import Scoreboard from './components/Scoreboard';

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
    movesLeft: 5,
    score: 0,
    noOfMovesPlayed: 0,
    randomArray: shuffle([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]),
    currentMove: [],
    cardsOpen: Array(12).fill(false),
    timeout: null,
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  resetMove = () => {
    console.log('Ušao u glavni dio resetMove() funkcije');
    const newCardsOpen = [...this.state.cardsOpen];
    this.state.currentMove.forEach((move) => {
      newCardsOpen[move] = false;
    });
    this.setState({
      cardsOpen: newCardsOpen,
      currentMove: [],
      timeout: null,
    });
  };

  // Async zbog toga što treba da sačeka jedan setState
  onClickHandle = async (ind) => {
    // Ako je karta već otvorena, iskuliraj klik
    if (this.state.cardsOpen[ind]) {
      return;
    }

    const newCardsOpen = [...this.state.cardsOpen];
    newCardsOpen[ind] = !this.state.cardsOpen[ind];

    await this.setState({
      noOfMovesPlayed: this.state.noOfMovesPlayed + 1,
      cardsOpen: newCardsOpen,
    });

    // Ako je prvi potez, poništi prethodne
    // (u slučaju da je treći potez kliknut prije isteka timeouta)
    if (this.state.noOfMovesPlayed === 1) {
      console.log('No of moves === 1');
      if (this.state.timeout) {
        clearTimeout(this.state.timeout);
        this.resetMove();
      }
    }

    // Evidentiraj trenutni potez radi poređenja
    this.setState({ currentMove: [...this.state.currentMove, ind] });

    if (this.state.noOfMovesPlayed === 2) {
      this.setState({ noOfMovesPlayed: 0 });
      if (
        this.state.randomArray[ind] ===
        this.state.randomArray[this.state.currentMove[0]]
      ) {
        this.setState({
          score: this.state.score + 1,
          currentMove: [],
        });
        if (this.state.cardsOpen.every((el) => el)) console.log('Victory!');
      } else {
        this.setState({
          timeout: setTimeout(this.resetMove, 2000),
          movesLeft: this.state.movesLeft - 1,
        });

        if (!this.state.movesLeft) console.log('Game over!');
      }
    }
  };

  renderCardList = () => {
    return this.state.randomArray.map((num, ind) => {
      return (
        <Card
          key={ind}
          index={ind}
          value={num}
          isRotated={this.state.cardsOpen[ind]}
          state={this.state}
          onClick={this.onClickHandle}
        />
      );
    });
  };

  render() {
    return (
      <div className="app">
        <Scoreboard score={this.state.score} movesLeft={this.state.movesLeft} />
        {this.renderCardList()}
      </div>
    );
  }
}
