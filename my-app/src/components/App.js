import React, { Component } from 'react';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
  	super(props);
    this.state = {cardList: []};
  }

  renderCards = () => {
  	if(!this.props.cardList) {
  		console.log(this.props.cardList);
  		console.log('nada');
  	} else {
  		console.log(this.props.cardList);
  	}
  } 

  render() {
    return (
      <div className="App">
      	{this.renderCards()}
      </div>
    );
  }
}

export default App;
