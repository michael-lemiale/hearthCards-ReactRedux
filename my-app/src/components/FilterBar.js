import React, { Component } from 'react';
import '../styles/ResultPanel.css';

class FilterBar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			filterTypes: ['mana', 'rarity', 'set', 'type', 'attack', 'health'],
			mana: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
		};
	}

	shouldDisplay = () => {
		if (this.props.nClass) {
			return '';
		} else {
			return 'hidden';
		}
	}

	capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
	}

	switchFilters = () => {
		
	}

	createFilterOptions = () => {
		const validFilterTypes = this.state.filterTypes
		let returnedFilters = [] 
		for (let a in validFilterTypes) {
			returnedFilters.push(<div key={a} className='filterOption'>
														{this.capitalizeFirstLetter(validFilterTypes[a])}
													</div>);
		}
		return returnedFilters;
	}

  
  render() {
    return (
      <div className={`FilterBar ${this.shouldDisplay()}`}>
      	<div className='filterTypes'>{this.createFilterOptions()}</div>
      	<div className='currentFilter'></div>
      </div>
    );
  }
}

export default FilterBar;