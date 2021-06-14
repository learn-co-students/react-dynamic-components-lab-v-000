//your code here
import React, { Component } from 'react';

// no need to modify anything in here. The second test is looking for the returned JSX from this component
class Comment extends Component {
  render() {
    return (
        <div className="comment">{this.props.commentText}</div>
    );
  }
}

export default Comment;