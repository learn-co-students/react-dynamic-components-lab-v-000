import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    const newOpacity = this.props.opacity - 0.1
    return (
      <div className="color-box" style={{opacity : 2}}>
        {this.props.opacity >= 0.2 ? <ColorBox opacity={newOpacity} /> : null}
        {console.log(this.props.opacity)}
      </div>
    )
  }

}
