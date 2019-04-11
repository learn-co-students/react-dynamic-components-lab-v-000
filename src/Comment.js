// add Comment component here

import React, { Component } from 'react'

// export the class so it can be used in other files

export default class Comment extends Component {
  render() {
    return (
      <div className="comment">
      {this.props.commentText}
      </div>
    )
  }
}
