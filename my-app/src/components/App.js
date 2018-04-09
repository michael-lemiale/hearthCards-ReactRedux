import React, { Component } from 'react';
import '../styles/App.css';
import Card from './Card.js';
import HeaderContainer from '../containers/HeaderContainer.js';
import ResultPanelContainer from '../containers/ResultPanelContainer.js';
import FilterBarContainer from '../containers/FilterBarContainer.js';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import spinner from '@fortawesome/fontawesome-free-solid/faSpinner';

class App extends Component {
  constructor(props) {
  	super(props);
    this.state = {};
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
      return <FontAwesomeIcon className="spin" icon={spinner} />;
    }
    else {
      return '';
    }
  }

  render() {
    return (
      <div className="App">
        <HeaderContainer></HeaderContainer>
        <FilterBarContainer></FilterBarContainer>
        <ResultPanelContainer>
          <div className ="loading">{this.showLoading()}</div>
          <div className = "allCards">{this.renderCards()}</div>
        </ResultPanelContainer>
      </div>
    );
  }
}

export default App;