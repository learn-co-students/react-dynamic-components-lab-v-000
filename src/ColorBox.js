import React, { Component } from 'react';
import { timingSafeEqual } from 'crypto';

export default class ColorBox extends Component {
  
  render() {
    let innerBox = null;
    if (this.props.opacity > 0.2){
      innerBox = <ColorBox opacity={this.props.opacity - 0.1} />;
    }

    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {innerBox}
      </div>
    )
  }
  
}
