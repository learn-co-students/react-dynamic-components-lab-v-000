import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    let opacity = this.props.opacity;
    if (opacity >= 0.2) {
      return (
        <div className="color-box" style={{opacity}}>
          <ColorBox opacity={opacity - 0.1} />
        </div>
      );
    } else {
      return null;
    }
  }
}