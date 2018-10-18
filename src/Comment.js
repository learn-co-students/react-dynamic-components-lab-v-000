// add Comment component here
import React from 'react';
import BlogPost from './BlogPost'

export default class Comment extends React.Component {
    render(){
        return(
            <div id="comments">
                {this.props.commentText}
            </div>

        )
    }
}

