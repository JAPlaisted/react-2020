import React, { Component } from 'react'
import withTooltip from './withTooltip';

class Tool extends Component {
  render() {
    return (
      <div className="component">
        Tool 
        {this.props.showTooltip && <div> + tooltip</div>}
      </div>
      
    );
  }
}

export default withTooltip(Tool);