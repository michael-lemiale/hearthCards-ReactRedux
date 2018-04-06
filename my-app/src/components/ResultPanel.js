import React, { Component } from 'react';

class ResultPanel extends Component {
  constructor(props) {
  	super(props);
  }

  render() {
    return (
      <div className="ResultPanel">
      	{this.props.children}
      </div>
    );
  }
}

export default ResultPanel;