import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
    ]
  }

 // Using the ColorBox component again below

  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {this.props.opacity >= 0.2 ? <ColorBox opacity ={this.props.opacity - 0.1} /> : null}
      </div>
    )
  }

}
