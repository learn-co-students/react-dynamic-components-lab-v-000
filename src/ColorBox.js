import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity - 0.1} /> : null }
      </div>
    )
  }
}

// Set up condition such that color-box is rendered, and opacity - 0.1 when opacity is >= 0.2
// Point back to the beginning of the condition after each loop
