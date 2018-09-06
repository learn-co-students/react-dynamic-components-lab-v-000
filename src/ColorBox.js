import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
      {this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity - 0.1} /> : null}
      </div>
    )
  }
}

//ANSWER:
// <div className="color-box" style={{opacity: this.props.opacity}}>
// {this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity - 0.1} /> : null}
// </div>
//
// <div className="color-box" style={{opacity: 2}}>
//   if ({this.props.opacity <= .2}) {
//    null
//   }
//   else (return {<ColorBox opacity={this.props.opacity -.1}/>
//  })
// </div>
