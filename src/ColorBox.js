import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
      let currentOpacity = this.props.opacity;
    function fadingDivs() {
      if (currentOpacity >= .2) {
        return <ColorBox opacity={currentOpacity-.1} />
      }
    }
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
      {fadingDivs()}
      </div>
    )
  }
}
