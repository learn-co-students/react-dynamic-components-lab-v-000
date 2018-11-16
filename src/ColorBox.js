import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    let parentOpacity = this.props.opacity;
    function disappearingColorBoxes(){
      if (parentOpacity >= .2){
        return <ColorBox opacity={(parentOpacity - .1)} />
      }
    }

    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {disappearingColorBoxes()}
      </div>
    )
  }
}
