// add Comment component here
import React, { Component } from 'react';


 export default class Comment extends React.Component {
	render() {
	return(
		<div className="comment">
			{this.props.commentText}
		</div>
		);
	}
}
