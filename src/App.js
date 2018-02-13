import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { DatePicker } from '@progress/kendo-dateinputs-react-wrapper';
import '@progress/kendo-ui';
import '@progress/kendo-theme-default/all.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dateTime: new Date()
    };

    this.onChange = this.onChange.bind(this);
  }

  /**
   * 
   * @param {*} e 
   */
  onChange(e) {
    const value = e.sender.value();
    console.log(value);
    this.setState({
      dateTime: value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
