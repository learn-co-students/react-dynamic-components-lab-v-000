import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    const boxOpacity = this.props.opacity
    const reducedOpacity = this.props.opacity - 0.1

    if (boxOpacity >= 0.2){
      return (
        <div className="color-box" style={{opacity: boxOpacity}}>
          <ColorBox opacity={reducedOpacity} />
        </div>
      )
    } else if (boxOpacity < 0.2){
      return (
        null
      )
    }
    
  }
  
}
