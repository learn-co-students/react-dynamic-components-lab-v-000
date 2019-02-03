import React, { Component } from 'react';

class Comment extends Component {
  
  render() {
    const commentText = this.props.commentText

    return (
      <div class="Comment">
        {commentText}
      </div>
    )
  }
}

export default Comment;