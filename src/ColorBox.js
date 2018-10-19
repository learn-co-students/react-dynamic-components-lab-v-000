import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    const newValue = this.props.value 0.1;
    return (
      <div className="color-box" style={{opacity: 2}}>
       
      if (this.props.value < 2 {
          return (
              <div>
                  <ColorBox value={newValue} />
              </div>
          );
      } else {
          return null;
      }
      }
              {this.props.opacity}
            </div>
          )
        }
  
}
