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
    timeout: null,
  };

  componentDidUpdate() {
    console.log(this.state);
  }

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

  resetMove = () => {
    // Ako nije bilo poteza dotad iskuliraj
    // TODO: trebalo bi da ovo sad ne treba, provjeri
    // if (!this.state.currentMove.length) return;

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

  onClickHandle = async (ind) => {
    // Ako je karta već otvorena, iskuliraj klik
    if (this.state.cardsOpen[ind]) {
      return;
    }
    const newCardsOpen = [...this.state.cardsOpen];
    newCardsOpen[ind] = !this.state.cardsOpen[ind];
    await this.setState({
      noOfMoves: this.state.noOfMoves + 1,
      cardsOpen: newCardsOpen,
    });

    // Ako je prvi potez, poništi prethodne
    // (u slučaju da je treći potez kliknut prije isteka timeouta)
    if (this.state.noOfMoves === 1) {
      console.log('No of moves === 1');
      if (!this.state.timeout) {
        clearTimeout(this.state.timeout);
        this.resetMove();
      }
    }

    // Evidentiraj trenutni potez radi poređenja
    this.setState({ currentMove: [...this.state.currentMove, ind] });

    if (this.state.noOfMoves === 2) {
      this.setState({ noOfMoves: 0 });
      if (
        this.state.randomArray[ind] ===
        this.state.randomArray[this.state.currentMove[0]]
      ) {
        this.setState({ currentMove: [] });
      } else {
        this.setState({ timeout: setTimeout(this.resetMove, 2000) });
      }
    }
  };

  render() {
    return <div className="app">{this.renderCardList()}</div>;
  }
}
