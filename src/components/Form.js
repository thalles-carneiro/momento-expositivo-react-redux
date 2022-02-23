import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setUserInfos } from '../redux/actions';

class Form extends Component {
  state = {
    name: '',
    age: 0,
    email: '',
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { userDispatch } = this.props;

    const userInfos = this.state;

    userDispatch(userInfos);

    this.setState({
      name: '',
      age: 0,
      email: '',
    });
  }

  render() {
    const { name, age, email } = this.state;

    return (
      <form onSubmit={ this.handleSubmit }>
        <input
          name="name"
          type="text"
          value={ name }
          onChange={ this.handleChange }
        />
        <input
          name="age"
          type="number"
          value={ age }
          onChange={ this.handleChange }
        />
        <input
          name="email"
          type="email"
          value={ email }
          onChange={ this.handleChange }
        />
        <button type="submit">
          Submit
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userDispatch: (user) => dispatch(setUserInfos(user)),
});

export default connect(null, mapDispatchToProps)(Form);
