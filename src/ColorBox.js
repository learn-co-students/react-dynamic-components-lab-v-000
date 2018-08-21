import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    return(
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {this.renderColorBox()}
    </div>
    )
  }

  renderColorBox() {
    let newValue = this.props.opacity - 0.1
    if (this.props.opacity >= 0.2) {
      return <ColorBox opacity={newValue} />
    } else {
      return null
    }
  }

}
