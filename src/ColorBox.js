import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    var newOpacity = this.props.opacity -.1
    if (this.props.opacity > .2) {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        <ColorBox opacity={newOpacity} />
      </div>
      )
    } else {
      return (
        null
      )
    }
  }
}
