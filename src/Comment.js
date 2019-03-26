// add Comment component here
import React, { Component } from "react";

export class Comment extends Component {
  render() {
    return <div className="comment">{this.props.commentText}</div>;
  }
}

export default Comment;
