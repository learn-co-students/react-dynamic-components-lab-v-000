import React, { Component } from 'react';

export default class ColorBox extends Component {

  render () {
    const newOpacity = (this.props.opacity - 0.1).toFixed(1)
    console.log(newOpacity)
    if (this.props.opacity >= 0.2) {
      return (
        <div className="color-box">
          <ColorBox opacity={newOpacity} />
        </div>
      )
    } else {
      return null
    }
  }
}
