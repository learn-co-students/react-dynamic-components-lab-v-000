import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
        const value = this.props.opacity;


        return (
          <div className="color-box" style={{opacity: value}}>
             {value >= .2 ? <ColorBox opacity = {value - 0.1} /> : null}
          </div>
        );

  }

}
