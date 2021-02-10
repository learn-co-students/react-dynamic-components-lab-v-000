import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    return (
      <div className="color-box" style={{opacity: 0.5 }}>
        {/* your conditional code here! */}
        return this.props.opacity < 0.2 ? null :
        (
          <div>
            <Opacity value={opacity - 0.1} />
          </div>
        )
      </div>
    )
  }

}

