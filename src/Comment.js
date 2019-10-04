import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Comment extends Component {
  render () {
    return (
      <div className="comment">
        {this.props.commentText}
      </div>
    );
  };
};

Comment.PropTypes = {
  commentText: PropTypes.string.isRequired
};
