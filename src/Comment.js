import React, { Component } from 'react';
import App from './App';



export default class Comment extends Component {
    render() {
        return (
            <div className="comment">{this.props.commentText}</div>
        )
    }
}
