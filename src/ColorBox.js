import React, { Component } from 'react';

export default class ColorBox extends Component {


  render() {
    var precise = x => Number.parseFloat(x).toPrecision(1);
    let renderColorBox;
    const originalVal = +(precise(this.props.opacity - 0))
    const newVal = +(precise(this.props.opacity - 0.1))

    if (this.props.opacity > 0.2) {
      renderColorBox = <ColorBox opacity={newVal} />
    } else {
      renderColorBox = null
    }
    return (
      <div className="color-box" style={{opacity: originalVal}}>
        { renderColorBox }
      </div>
    )
  }

}
