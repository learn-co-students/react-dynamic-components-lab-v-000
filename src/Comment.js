//your code here
import React from 'react'

class Comment extends React.Component {
    render(){
        return(
            <div className="comment">
                {this.props.commentText}
            </div>
        )
    }
}

export default Comment