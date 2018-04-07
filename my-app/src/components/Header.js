import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import filter from '@fortawesome/fontawesome-free-solid/faFilter';

class Header extends Component {
  render() {
    return (
      <div className="Header">
     	<div className="leftSide">
      		<h1>Hearthstone Cards</h1>
      		<FontAwesomeIcon className="filter" icon={filter} />
      	</div>
      	<div className="rightSide">
      		<input type="text" className="searchText" name="searchField" placeholder="Search Cards"/>
      	</div>
      </div>
    );
  }
}

export default Header;