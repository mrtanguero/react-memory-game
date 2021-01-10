import React, { Component } from 'react';
import Card from './components/Card';
import './App.css';

export default class App extends Component {
  state = {
    movesPlayed: 0,
    randomArray: [],
    currentMove: [],
    cardsOpen: [],
    isRotated: false, // TODO: testing
  };

  onClickHandle = (e) => {
    console.log(e);
    this.setState({ isRotated: !this.state.isRotated });
  };

  render() {
    return (
      <div>
        <Card
          value="1"
          isRotated={this.state.isRotated}
          onClick={this.onClickHandle}
        />
      </div>
    );
  }
}
