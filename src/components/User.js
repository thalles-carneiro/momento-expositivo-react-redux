import React from 'react';
import { useSelector } from 'react-redux';

const User = () => {
  const user = useSelector((state) => state.userReducer.user);
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

export default User;
