import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import filter from '@fortawesome/fontawesome-free-solid/faFilter';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () => {
    this.props.moveCards(!this.props.shouldMove.nClass)
  }

  render() {
    return (
      <div className="Header">
       	<div className="leftSide">
        		<h1>Hearthstone Cards</h1>
        		<FontAwesomeIcon className="filter" icon={filter} onClick={this.handleClick} />
        </div>
        <div className="rightSide">
        	<input type="text" className="searchText" name="searchField" placeholder="Search Cards"/>
        </div>
      </div>
    );
  }
}

export default Header;