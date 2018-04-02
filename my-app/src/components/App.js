import React, { Component } from 'react';
import '../styles/App.css';
import Card from './Card.js'

class App extends Component {
  constructor(props) {
  	super(props);
  }

  renderCards = () => {

  	if(!this.props.cardList) {
      return ':('
  	} else {
      let cards = this.props.cardList;
      let cardListFull = [];
      for (let a in cards) {
        cardListFull.push((<Card key = {a} cardData = {cards[a]}></Card>));
      }
      return cardListFull;
  	}
  }

  render() {
    return (
      <div className="App">
        <div className = "allCards">{this.renderCards()}</div>;
      </div>
    );
  }
}

export default App;