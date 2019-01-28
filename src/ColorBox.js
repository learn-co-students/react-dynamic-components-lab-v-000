import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    if (this.props.opacity >= 0.1) {
      return (
        <div className="color-box" style={{opacity: this.props.opacity}}>
          <ColorBox opacity={(this.props.opacity * 10 - 0.1 * 10) / 10 } />
        </div>
      );
    } else {
      return null;
    }
  }
}
