import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [

    ]
  }

  render() {
    let opacity = <div></div>
    if (this.props.opacity >= 0.2) {
      opacity = <ColorBox opacity={this.props.opacity - 0.1} />
    } else {
      opacity = null
    }
    return (
      <div className="color-box" style={{opacity: this.props.opacity /*replace null with the value*/}}>
        {opacity}
        // if opacity => 0.2, colorbox shoulder render another colorbox, opacity prop sbhould be passed to child
        // passed opacity hould be reduced by 0.1
        // if less than 0.2
        // don't render another colorbox, should retur null
      </div>
    )
  }

}
