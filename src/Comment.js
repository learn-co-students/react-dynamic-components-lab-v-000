import React, {Component} from 'react'

export class Comment extends Component{
  render(){
    return(
    <div>
    {this.props.commentText}
    </div>
    )
  }
}
