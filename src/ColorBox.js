import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    let value = this.props.value; 
    let increment = 1; 
    let comparison = value * increment; 

    if (this.props.value > 0.2) {
      increment = increment - 0.1;  
      return (
        <div className="color-box" style={{opacity: 2}}>
          {/* your conditional code here! */}
        </div>
      )
    } else {
    return null; 
  }
  }
}
