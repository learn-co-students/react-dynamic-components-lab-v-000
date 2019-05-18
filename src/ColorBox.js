import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {

    const op = this.props.opacity
    const nOp = op - .1


    if(nOp >= .1){
      return(
        <div className="color-box" style={{opacity: this.props.opacity}}>
            <ColorBox opacity={nOp} />
        </div>
      )
    }else{
      return null
    }
  }


}
