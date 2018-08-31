import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    return (
      <div className="comment" style={{opacity: this.props.opacity}}>
          {this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity - 0.1}/> : null };
      </div>
    )
  }
}
