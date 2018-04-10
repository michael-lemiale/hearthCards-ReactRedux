import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import filter from '@fortawesome/fontawesome-free-solid/faFilter';
import druidJPG from'../img/druid.jpg';
import hunterJPG from '../img/hunter.jpg';
import mageJPG from '../img/mage.jpg';
import paladinJPG from '../img/paladin.jpg';
import priestJPG from '../img/priest.jpg';
import rogueJPG from '../img/rogue.jpg';
import shamanJPG from '../img/shaman.jpg';
import warlockJPG from '../img/warlock.jpg';
import warriorJPG from '../img/warrior.jpg';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: ['druid', 'hunter', 'mage', 'paladin', 'priest', 'rogue',
                  'shaman', 'warlock', 'warrior'],
      classImgs: {druid: druidJPG, hunter: hunterJPG, mage: mageJPG, paladin: paladinJPG, 
                  priest: priestJPG, rogue: rogueJPG, shaman: shamanJPG, warlock: warlockJPG,
                  warrior: warriorJPG}
    };
  }

  handleClickFilterBar = () => {
    this.props.moveCards(!this.props.shouldMove.nClass);
  }

  createClassFilters = () => {
    const validClasses = this.state.classes;
    let returnedClasses = [];
    for (let a in validClasses) {
      let currClass = validClasses[a];
      returnedClasses.push(<img className='classFilter' key={a} src={this.state.classImgs[currClass]}
                              onClick={() => {this.props.filterCardsClass(currClass)}} />);
    }
    return returnedClasses;
  }

  render() {
    return (
      <div className="Header">
       	<div className="leftSide">
        		<h1>Hearthstone Cards</h1>
        		<FontAwesomeIcon className="filter" icon={filter} onClick={this.handleClickFilterBar} />
        </div>
        <div className="rightSide">
          <div className="classFilters">{this.createClassFilters()}</div>
        	<input type="text" className="searchText" name="searchField" placeholder="Search Cards"/>
        </div>
      </div>
    );
  }
}

export default Header;