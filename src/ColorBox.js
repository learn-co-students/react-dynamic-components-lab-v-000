import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    //debugger;
    const newValue = this.props.opacity - 0.1
    if (this.props.opacity > 0.2) {
      //debugger;
        return (
            <div className="color-box" style={{opacity: newValue+0.1}}>
              <ColorBox opacity={newValue} />
            </div>
        );
    } else {
        return null;
    }
    //return (
    //  <div className="color-box" style={{opacity: 2}}>
    //<ColorBox opacity={newValue} />
    //  </div>
    //)
  }

}
