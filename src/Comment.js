// add Comment component here

import React, { Component } from 'react'    //Import the class React::Component from 'react' package

class Comment extends Component {
    render(){
        return(
            <div className="comment">
                {this.props.commentText}
            </div>
        )
    }
}

export default Comment