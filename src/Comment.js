import React, { Component } from "react";
// are we missing an import?

export default class Comment extends Component {
  render() {
    return <div className="comment">{this.props.commentText}</div>;
  }
}
