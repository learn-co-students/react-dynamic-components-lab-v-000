import React, { Component } from 'react';

export default class Comment extends Component {
  
  render() {
    return (
      <div className="comment">
        {/* your conditional code here! */}
        {this.props.commentText}
      </div>
    )
  }
  
}


