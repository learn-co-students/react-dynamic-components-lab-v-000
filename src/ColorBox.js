import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    const newValue = this.props.opacity * 10;
    console.log(newValue)
       if (newValue >= 2) {
           return (
               <div className="color-box" style={{opacity: newValue/10}}>
                 <ColorBox opacity={(newValue - 1)/10} />
               </div>
           );
       } else {
           return null;
       }
  }

}
