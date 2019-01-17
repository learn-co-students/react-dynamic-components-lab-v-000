import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {

      if(this.props.opacity >= 0.2){
        console.log(value)
        return (
      <div className="color-box" style={{opacity: 2}}>

          <ColorBox opacity = {this.props.opacity - .1}/>

      </div>)
    }else{ return null}

  }

}
