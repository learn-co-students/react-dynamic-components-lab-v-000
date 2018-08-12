import React, { Component } from 'react';
import BlogPost from './BlogPost.js';

export default class ColorBox extends Component {

  render() {
    if (this.props.opacity >= .2) {
      return (
        <div className="color-box" style={{opacity: this.props.opacity}}>
          <ColorBox opacity={this.props.opacity - .1} />
        </div>
    )}
    else {
      return null
      }
  }
}
