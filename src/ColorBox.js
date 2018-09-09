import React, { Component } from 'react';

export default class ColorBox extends Component {
  render() {
    const opacity = this.props.opacity;
    return (
      <div className="color-box" style={{ opacity: this.props.opacity }}>
        {opacity < 0.2 ? null : <ColorBox opacity={opacity - 0.1} />}
      </div>
    );
  }
}
