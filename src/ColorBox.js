import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    const new_opc = this.props.opacity - 0.1;
    if (this.props.opacity > 0.2) {
      return (
        <div className="color-box" style={{opacity: 1}}>
          <ColorBox opacity={new_opc} />
        </div>)
    } else if  (this.props.opacity < 0.2) {
        return null
    }


  }

}
