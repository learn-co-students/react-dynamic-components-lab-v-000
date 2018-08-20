import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
  	let Opacity;
  	if (this.props.opacity > 0.2) {
  		Opacity = <ColorBox opacity={this.props.opacity - 0.1}/>
  		Opacity = <ColorBox opacity={this.props.opacity - 0.1}/>
  	} else {
  		return null
  	}
  		
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
      {Opacity}
      </div>
    )
 }
}
