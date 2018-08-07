import React, { Component } from 'react';


//Here's how you render a ColorBox component....
//Also, export it so other classes can call it
export default class ColorBox extends Component {
  
  render() {
    const op=this.props.opacity
    if(op >= 0.2){
      return (
        <div className="color-box" style={{opacity: op}}>
            <ColorBox opacity={op-0.1}/>
        </div>
      )
    } else {
      return null
    }
  }
  
}
