import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    const opacityLevel = this.props.opacity - 0.1
    debugger
    
    if (this.props.opacity > 0.2) {
    	return (
    		<div className="color-box" style={{opacity: this.props.opacity}}>
    			<ColorBox opacity={opacityLevel} />
    		</div>

    	)    	
    } else {
    	return null
    }
  }
  
}
