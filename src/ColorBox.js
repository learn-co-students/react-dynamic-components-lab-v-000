import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    const newOpacity = this.props.opacity - 0.1
    console.log(newOpacity)
    if (this.props.opacity >= 0.2 ) {
      return(
      <div className="color-box" style={{opacity: 1}}>
        <ColorBox opacity={newOpacity} />
      </div>
    )
    } else {
    return null
    }
  }
}
