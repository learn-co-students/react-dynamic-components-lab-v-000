import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
      let NowOpacity= this.props.opacity;
      function CurrentColor() {
      if (NowOpacity >=0.2) {
        return <ColorBox opacity={NowOpacity-0.1} />
        }
      }
      return (
        <div className="color-box" style={{opacity: this.props.opacity}}>
        {CurrentColor()}
      </div>
    )
  }

}
