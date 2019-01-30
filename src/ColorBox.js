import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    console.log(this)
    console.log(this.props.opacity)
    return (

      <div className="color-box" style={{ opacity: this.props.opacity }}>
        {this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity - 0.1} /> : null}
      </div>
    )
  }

}