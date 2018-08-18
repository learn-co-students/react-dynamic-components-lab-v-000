import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
      let currentOpacity = this.props.opacity;

      if (currentOpacity >= 0.2) {
        currentOpacity -= 0.1;
        return (
          <div className="color-box" style={{opacity: currentOpacity + 0.1}}>
            {
              <ColorBox opacity={currentOpacity} />
            }
          </div>
        )
      } else {
        return null
      }
  }
  
}
