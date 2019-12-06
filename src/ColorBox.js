import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    console.log(this.props.opacity)
    let newOpacity = (Math.round(this.props.opacity * 10) / 10) - .1;
    {
      return this.props.opacity <= .1 ? null : (
        <div className="color-box" style={{ opacity: this.props.opacity }}>
          <ColorBox opacity={newOpacity} />
        </div>
      )
    }
  }

}
