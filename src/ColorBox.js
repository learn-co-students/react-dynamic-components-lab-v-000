import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {/* account for js 0.1 finicky behavior */}
        {/* if (logic) ? true-result : false-logic */}
        {/* prevent infinite loop, prevent infinite loop, prevent infinite loop */}
        {this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity - 0.1} /> : null }
        
      </div>
    )
  }
  
}
