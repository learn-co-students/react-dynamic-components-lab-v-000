//your code here
import React, { Component } from "react";

export default class Commment extends Component {
  render() {
    return <div className="comment">{this.props.commentText}</div>;
  }
}
