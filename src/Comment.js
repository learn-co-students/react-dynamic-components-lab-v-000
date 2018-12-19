// add Comment component here
import React, { Component } from 'react';
export default  class Commment extends React.Component{
    render() {
        return (
            <div className="comment">
                {this.props.commentText}
            </div>
        )
    }
}



