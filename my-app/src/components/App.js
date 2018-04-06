import React, { Component } from 'react';
import '../styles/App.css';
import Card from './Card.js';
import Header from './Header.js';
import ResultPanelContainer from '../containers/ResultPanelContainer.js';

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

  showLoading = () => {
    if (this.props.isFetching) {
      console.log('loading');
      return '../img/background_img_2.jpg';
    }
    else {
      return '';
      console.log('not loading');
    }
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <ResultPanelContainer>
          <div className = "loadIcon"><img src={this.showLoading()}/></div>
          <div className = "allCards">{this.renderCards()}</div>
        </ResultPanelContainer>
      </div>
    );
  }
}

export default App;