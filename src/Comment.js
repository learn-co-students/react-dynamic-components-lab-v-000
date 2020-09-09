import React, { Component } from 'react';

export default class Comment extends Component {
    render() {
        return (
            <div class="comment">
                {this.props.commentText}
            </div>
        )
    }
}