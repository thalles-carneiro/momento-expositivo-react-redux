import React, { Component } from 'react';
import { Form, User } from './components';

class App extends Component {
  render() {
    return (
      <div>
        <h3>App React Redux</h3>
        <Form />
        <User />
      </div>
    );
  }
}

export default App;
