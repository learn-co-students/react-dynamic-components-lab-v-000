import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
  	if (this.props.opacity < .2){
  		return null
  	} else {
  		return (
  			 <div className="color-box" style={{opacity: 1}}>
      		<ColorBox opacity={this.props.opacity-.1} />
      	</div>
  			)
  	}
    
  }
  
}
