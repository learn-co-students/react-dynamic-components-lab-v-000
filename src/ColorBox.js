import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    const newValue = this.props.opacity * 100;

    if (newValue >= 20) {
      return (
        <div className="color-box" style={{opacity: this.props.opacity}}>
          < ColorBox opacity={(newValue - 10) / 100} />
        </div>
      );
    } else {
      return null;
    }

  }
}
