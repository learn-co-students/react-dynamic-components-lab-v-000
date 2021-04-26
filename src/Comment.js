import React, { Component } from 'react';

export default class Comment extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    return (
      <div className="comment">{this.props.commentText}</div>
    )
  }

}