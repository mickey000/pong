import React, { Component } from 'react';
import Playground from 'components/Playground.react';
import Header from 'components/Header.react';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Playground />
      </div>
    );
  }
}

export default App;
