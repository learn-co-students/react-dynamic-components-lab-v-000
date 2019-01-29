import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
  //  const newValue = this.props.opacity * 2;

           if (this.props.opacity >= .2) {
               return (
                     <div className="color-box" style={{opacity: this.props.opacity}}>
                        <ColorBox opacity={this.props.opacity - 0.1} />
                   </div>
               );
           } else {
               return null;
           }
       }
   }
