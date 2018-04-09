import React, { Component } from 'react';
import '../styles/ResultPanel.css';

class ResultPanel extends Component {
  constructor(props) {
  	super(props);
  }

  shouldMove = () => {
    if (this.props.nClass) {
      return 'moveRight';
    } else {
      return '';
    }
  }

  render() {
    return (
      <div className={`ResultPanel ${this.shouldMove()}`}>
      	{this.props.children}
      </div>
    );
  }
}

export default ResultPanel;