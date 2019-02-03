import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    const currentOpacity = this.props.opacity

    return (
      
      <div className="color-box" style={{opacity: currentOpacity}}>
        { (currentOpacity > 0.2)
          ? <ColorBox opacity={currentOpacity - .1} />
          : null
        }
      </div>
    )
  }
  
}
