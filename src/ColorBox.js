import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {

     const value = this.props.opacity;
     const newValue = value - .1;
     let show;

      if (newValue >= .02) {   
        show = < ColorBox opacity={newValue} />
      } else {
        show =  null
      }

    return (
      <div className="color-box" style={{opacity: value}}>            
          {show} 
      </div>     
             
      )
    }
  }


