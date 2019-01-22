import React, {Component} from 'react';

export default class Coment extends Component {
  
  render(){
    return (
        <div className="comment">
          {this.props.commentText}
        </div>
      )
  }
  
}