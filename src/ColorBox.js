import React, { Component } from 'react';

export default class ColorBox extends Component {
  render() {
    var new_opacity = this.props.opacity - 0.1
    var the_return_value = null
    if (this.props.opacity >= 0.2) {
      the_return_value = <ColorBox opacity={new_opacity}/>
    }
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {the_return_value}
      </div>
    )
  }
}
