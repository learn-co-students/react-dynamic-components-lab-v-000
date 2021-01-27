//your code here
import React, { Component } from 'react'
import BlogPost from './BlogPost';

class Comment extends Component {
    render() {
        return(
        
            <div className="comment">
                <Comment commentText={"When we speak we are afraid our words will not be heard or welcomed. But when we are silent, we are still afraid. So it is better to speak. - Audrey Lorde"}/>
                <Comment commentText={'I am no longer accepting the things I cannot change. I am changing the things I cannot accept. - Angela Davis'}/>
                <Comment commentText={"If you don't understand, ask questions. If you're uncomfortable about asking questions, say you are uncomfortable about asking questions and then ask anyway. It's easy to tell when a question is coming from a good place. Then listen some more. Sometimes people just want to feel heard. Here's to possibilities of friendship and connection and understanding. - Chimamanda Ngozi Adichie"}/>
               
               {this.props.commentText}
            </div>
          
        );
    }
}
export default Comment;