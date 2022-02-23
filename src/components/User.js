import React, { Component } from 'react';
import { connect } from 'react-redux';

class User extends Component {
  render() {
    const { user } = this.props;
    const { name, age, email } = user;

    return (
      <section>
        <h3>User Infos</h3>
        <p>Name: <span>{ name }</span></p>
        <p>Age: <span>{ age }</span></p>
        <p>E-mail: <span>{ email }</span></p>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
});

export default connect(mapStateToProps, null)(User);
