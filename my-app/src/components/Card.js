import React, { Component } from 'react';
import '../styles/Card.css';

class Card extends Component {
  constructor(props) {
  	super(props);
  }

  imgErr(e) {
    e.target.parentNode.classList.add('hidden');
  }

  render() {
    return (
      <div className="Card">
      	<img onError={this.imgErr} src={this.props.cardData.img}/>
      </div>
    );
  }
}

export default Card;