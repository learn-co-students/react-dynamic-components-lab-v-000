import React, { Component } from "react";

export default class ColorBox extends Component {
  render() {
    const { opacity } = this.props;
    let reduceOpacity = opacity - 0.1;
    return (
      <div className="color-box" style={{ opacity }}>
        {opacity >= 0.2 ? <ColorBox opacity={reduceOpacity} /> : null}
      </div>
    );
  }
}
