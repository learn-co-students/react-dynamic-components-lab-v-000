import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {

    let boxOpacity = this.props.opacity;

    if (boxOpacity > 0.2)
      return (
        <div className="color-box" style={{opacity: boxOpacity}}>
          <ColorBox opacity = {boxOpacity - 0.1}/>
        </div>
      )
    return (null);
  }

}
