import React, { Component } from 'react';

export default class ColorBox extends Component {
  render() {
    function renderColorBox(opacity){
      const boxOpacity = opacity;
      if (boxOpacity >= 0.2){
        return <ColorBox opacity={boxOpacity - 0.1} style={{opacity: boxOpacity}}/>
      } else {
        return null;
      }
    }

    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {renderColorBox(this.props.opacity)};
      </div>
    )
  } 
}
