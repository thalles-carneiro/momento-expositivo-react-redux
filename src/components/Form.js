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
        <div>
          <label htmlFor="name">
            Name:
            <br />
            <input
              name="name"
              type="text"
              value={ name }
              onChange={ this.handleChange }
            />
          </label>
        </div>

        <div>
          <label htmlFor="age">
            Age:
            <br />
            <input
              name="age"
              type="number"
              value={ age }
              onChange={ this.handleChange }
            />
          </label>
        </div>

        <div>
          <label htmlFor="email">
            E-mail:
            <br />
            <input
              name="email"
              type="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
        </div>
        <br />
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
