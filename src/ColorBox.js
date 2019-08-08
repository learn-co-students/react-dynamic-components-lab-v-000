import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    const newOpacity = this.props.opacity - 0.1;
    if (this.props.opacity >= 0.2) {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {/* your conditional code here! */}
        <ColorBox opacity={newOpacity} />
        </div>
      )
    } else {
      return null
    }

  }

}
