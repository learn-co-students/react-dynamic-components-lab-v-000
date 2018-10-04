import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render(opacity) {
    const newOpacity = this.props.opacity - 0.1;
    if (this.props.opacity < 0.2) {
      return null;
    } else {
      return (
        <div className="color-box" style={{opacity: this.props.opacity}}>
        <ColorBox opacity={newOpacity} />
        </div>
      )
    }
  }
  
}
