import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { DatePicker } from '@progress/kendo-dateinputs-react-wrapper';
import '@progress/kendo-ui';
import '@progress/kendo-theme-default/dist/all.css';

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
        <div className="date-picker">
          <DatePicker 
            min={ new Date(2018, 1, 1)}
            max={ new Date(2019, 1, 1)}
            format={ "yyyy/MM/dd" }
            change={this.onChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
