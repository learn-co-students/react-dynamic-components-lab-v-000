// add Comment component here
// eslint-disable-next-line
import React, { Component } from 'react';

class Comment extends React.Component {
    render(){
        return (
            <div className="comment">
            {this.props.commentText}
            </div>
        )
    }
}


export default Comment;