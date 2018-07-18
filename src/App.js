import React, { Component } from 'react';
import './App.css';
// import SearchTabularData from './SearchTabularData';
// import SearchData from './SearchData';
// import FetchData from './FetchData';

import FetchApi from './fetchApi'

class App extends Component {
  render() {
    return (
      <div className="App">
        <FetchApi />
      </div>
    );
  }
}

export default App;
