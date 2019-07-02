import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    const newOpacity = this.props.opacity - 0.1;

    if (this.props.opacity >= 0.2) {
      return (
        <div className="color-box" style={{opacity: this.props.opacity}}>
          <ColorBox opacity={newOpacity}/>
        </div>
      )  
    } else {
      return (
        null
      )
    }
  }
}


// class Example extends Component {
//   render() {
//       const newValue = this.props.value * 2;

//       if (this.props.value < 100) {
//           return (
//               <div>
//                   <Example value={newValue} />
//               </div>
//           );
//       } else {
//           return null;
//       }
//   }
// }

// if the opacity value is greater than or equal to 0.2:
// the ColorBox component should render another ColorBox itself (recursive components!)
// an opacity prop should be passed to the child
// the passed opacity prop should be reduced by 0.1
// if the opacity value is less than 0.2:
// do not render another ColorBox (or else we would have infinite ColorBoxes rendering!)
// instead, render null
