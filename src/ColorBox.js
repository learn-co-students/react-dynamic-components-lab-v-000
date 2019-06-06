import React, { Component } from 'react';

export default class ColorBox extends Component  {
    render() {
        var newOpacityValue = (this.props.opacity);
        if (this.props.opacity >= 0.2) {
          (newOpacityValue = (this.props.opacity -0.1))
          console.log(this)
            return (
                <div className="color-box" style={{opacity: this.props.opacity}}>
                    <ColorBox opacity={newOpacityValue} />
                </div>
            );
        } else {
            return null;
        }
    }
}
