import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [

    ]
  }

  render() {
    return (
      <div className="color-box" style={{opacity: null /*replace null with the value*/}}>
        { if (this.props.opacity >= 0.2) {

        } else {
          
        }
      }
      </div>
    )
  }

}
