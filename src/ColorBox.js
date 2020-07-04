import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const boxOpacity = this.props.opacity;
    // console.log(boxOpacity);

    return boxOpacity < 0.2 ? null : (
      <div className="color-box" style={{opacity: boxOpacity}}>
        <ColorBox opacity={boxOpacity - 0.1} />
      </div>
    )
  }

}

