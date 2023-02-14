import React, { Component } from 'react'
import withTooltip from './withTooltip';
import Tooltip from '../Tooltip';

class Movie extends Component {
  render() {
    return (
      <div>
        Movie 
        {this.props.showTooltip && <div>Some tooltip</div>}
        <Tooltip />
      </div>
      
    );
  }
}

export default withTooltip(Movie);