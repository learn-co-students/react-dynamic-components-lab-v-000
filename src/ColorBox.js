import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    let opacity = this.props.opacity
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        { (opacity >= 0.2) ? <ColorBox opacity={opacity -= 0.1} /> : null }
      </div>
    )
  }

}

