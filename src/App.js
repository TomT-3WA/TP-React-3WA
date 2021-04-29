import logo from './logo.svg';
import './App.css';

import { Component } from 'react';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Je suis App
          </p>
        </header>
      </div>
    );
  }
}

export default App;
