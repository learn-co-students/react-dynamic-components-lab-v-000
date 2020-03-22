import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [

    ]
  }

  render() {
    // let opacity = <div></div>
    // if (this.props.opacity >= 0.2) {
    //   opacity = <ColorBox opacity={this.props.opacity - 0.1} />
    // } else {
    //   opacity = null
    // }
    return (
      <div className="color-box" style={{opacity: this.props.opacity /*replace null with the value*/}}>
        {
          // const newValue = this.props.opacity
         this.props.opacity >= 0.2 ? (
              <ColorBox opacity={this.props.opacity - 0.1} />
          ) : null
        }
        //ternary operator.  for the conditional
      </div>
    )
  }

}
