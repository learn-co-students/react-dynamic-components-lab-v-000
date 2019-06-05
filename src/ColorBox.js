import React, { Component } from 'react';
import App from './App';

export default class ColorBox extends Component {
  
  render() {
    const newOpacity = this.props.opacity - 0.1;
    // setting new variable to hold value from parent App.js
    if (this.props.opacity >= 0.2){
      return (
        <div className="color-box" style={{opacity: this.props.opacity}}>
          {/* this refers to ColorBox component */}
          {/* need style because is actually what gets rednered to html */}
          <ColorBox opacity={newOpacity} />
        </div>
        
      );
    } else if (this.props.opacity < 0.2){
      return null
    }
  }
}

//test all of this;
// test this out in log as lesson says
// probably need to put className info from below in div
// try it all otu anyway and have fun with it!
// 
  //   return (
  //     <div className="color-box" style={{opacity: 2}}>
  //       {this.props.opacity}
          
  //     </div>
  //   )
  // }
  
