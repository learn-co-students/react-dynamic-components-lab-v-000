import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="comment">
        {this.props.commentText}
      </div>
    );
  }
}

export default App;
