import React, { Component } from 'react'
import withTooltip from './withTooltip';

class Movie extends Component {
  render() {
    return (
      <div className="component">
        Movie 
        {this.props.showTooltip && <div>Some tooltip</div>}
      </div>
      
    );
  }
}

export default withTooltip(Movie);