import React, { Component } from 'react';
// add Comment component here
export default class Comment extends Component {

  render() {
    return (
      <div className="comment">
        {this.props.commentText}
      </div>
    )
  }

}
