// add Comment component here
import React, { Component } from 'react';
export default class BlogPost extends Component {
  render() {
  		return (
      <div className="comment">
        {this.props.commentText}
      </div>)
  }
}
