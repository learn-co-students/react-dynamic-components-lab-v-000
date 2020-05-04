import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const opacity = this.props.opacity
    const newOpacity = opacity - 0.1
    return (
      opacity < 0.2 ? null : (
        <div className="color-box" style={{opacity: opacity}}>
          <ColorBox opacity = {newOpacity} />
        </div>
      )
    )
  }

}

