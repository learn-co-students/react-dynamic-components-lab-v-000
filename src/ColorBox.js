import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    //debugger
    const opac = this.props.opacity - 0.1;
    //debugger
    if (opac >= 0.1) {
      return (
        <div className="color-box" style={{opacity: 1}}>
          {<ColorBox opacity={opac} /> }
        </div>
      )
    } else {
            return null;
        }
    // return (
    //   <div className="color-box" style={{opacity: this.props.opacity}}>
    //     { }
    //   </div>
    // )
  }

}
