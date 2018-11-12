import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
      if(this.props.opacity >= 0.2) {
          const opac = this.props.opacity - 0.1;
          return (
              <div className="color-box" style={{opacity: this.props.opacity}}>
                <ColorBox opacity={opac} />
              </div>
          )
      }else {
          return (
              null
          )
      }
    }

}
