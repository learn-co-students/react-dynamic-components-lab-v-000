import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    let opacCurrent = this.props.opacity * 100
    let opacNew = (opacCurrent -10) / 100
    if (opacCurrent >= 20) {
      return (
      <div className="color-box" style={{opacity: this.props.opacity}} >
          <ColorBox opacity={opacNew} />
      </div>
      )
    } else {
      return null;
      } 
   }
  
}
