import React, { Component } from 'react';
import { Form, User } from './components';

class App extends Component {
  render() {
    return (
      <div>
        <h1>App React Redux</h1>
        <Form />
        <User />
      </div>
    );
  }
}

export default App;
