import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
  	let current_opacity = this.props.opacity
  	if(current_opacity > 0.2) {
  		return (
      		<div className="color-box" style={{opacity: 1}}>
      			<ColorBox opacity={current_opacity -= 0.1} />
      		</div>
      		);
  	} else {
  		return null;
  	}
  }
 }