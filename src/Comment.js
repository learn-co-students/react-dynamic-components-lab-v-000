// add Comment component here
import React, { Component } from 'react';

class Comment extends React.Component {
  render() {
    return(
      <div className="comment">
      {this.props.commentText}
      </div>
    )// end return
  } // end render

}// end class

export default Comment ;
