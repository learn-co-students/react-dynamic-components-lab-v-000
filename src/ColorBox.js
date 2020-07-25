import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const newValue = this.props.opacity - 0.1;
    return this.props.opacity < 0.2 ? null : (
      <div className="color-box" style={{opacity: this.props.opacity }}>
        <ColorBox opacity = {newValue}/>
      </div>)
  }

}
