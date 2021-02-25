import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    let opacityValue = this.props.opacity;
    return (
      <div className="color-box" style={{ opacity: opacityValue }}>
        { opacityValue >= 0.2 ? <ColorBox opacity={(opacityValue - 0.1)} /> : null }
      </div>
    )
  }

}

/* PSEUDOCODE
Receive an opacity value (OV)
If OV >= 0.2
  Call ColorBox component's render method recursively inside itself
  Pass a new OV to this method
  The new OV should be reduced by 0.1
If OV < 0.2
  The render method returns null
*/

