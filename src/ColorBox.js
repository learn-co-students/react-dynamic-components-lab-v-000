import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
	let opty = this.props.opacity - .1;

    if(this.props.opacity >= 0.2) {
    	return(
    		<div className="color-box" style={{opacity: this.props.opacity}}>
    			<ColorBox opacity={opty} />
    		</div>
    		);
    } else {
    	return false;
    }

  }
  
}
