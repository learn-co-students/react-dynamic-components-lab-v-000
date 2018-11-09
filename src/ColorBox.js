import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    const opValue = this.props.opacity - 0.1;
    const newOp = Math.round(10*opValue)/10
    console.log(newOp);
    if (newOp > 0){
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        <ColorBox opacity={newOp}/>
      </div>
    )
  }else {
    return null;
  }
  }
}
