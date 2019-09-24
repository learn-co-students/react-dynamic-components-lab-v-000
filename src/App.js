import React, { Component } from 'react';
import BlogPost from './BlogPost';
import ColorBox from './ColorBox';

class App extends Component {
  render() {
    return (
      <div id="app">
          <BlogPost />
          <div id="seperator"></div>
          <div className="wrapper">
            <ColorBox opacity={1} />
          </div>
      </div>
    )
  }
}

export default App;
