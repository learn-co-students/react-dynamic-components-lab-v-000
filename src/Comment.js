import React, { Component } from 'react';

export default class X extends Component {
    render () {
        return (
            <div className="comment">
                {this.props.commentText}
            </div>
        );
    }
}