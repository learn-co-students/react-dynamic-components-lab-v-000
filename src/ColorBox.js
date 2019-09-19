import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    const newColor = this.props.opacity - .1

       if (this.props.opacity >= 0.2) {
        return (
          <div className="color-box" style={{opacity: this.props.opacity}}>
            <ColorBox opacity={newColor}/>
          </div>
        );
      }  else {
            return null
          }
  }

}
