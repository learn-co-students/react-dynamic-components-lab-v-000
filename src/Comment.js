import React, { Component } from 'react';

class Comment extends Component {
  render() {
    const { commentText } = this.props;
    
    return (
      <div className="comment">
        {commentText}
      </div>
    )
  }
}

export default Comment;
