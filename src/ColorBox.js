import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    const newVal = this.props.opacity;

    if (newVal >= 0.2) {
      return ( <div className = "color-box"
        style = {
          {
            opacity: newVal
          }
        } > {
          <ColorBox opacity={newVal - 0.1} />
        } </div>
      );
    } else {
      return null;
    }
    
  }
  
}
