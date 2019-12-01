import React, { Component } from 'react';

export default class ColorBox extends Component {
  conditionallyRender() {
    if (this.props.opacity >= 0.2) {
      const newOpacity = this.props.opacity - 0.1
      return <ColorBox opacity={newOpacity} />
    }
  }

  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        { this.conditionallyRender() }
      </div>
    )
  }

}
