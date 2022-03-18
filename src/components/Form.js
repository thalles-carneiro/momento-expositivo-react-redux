import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setUserInfos } from '../redux/reducers/userSlice';

const Form = () => {
  const [user, setUser] = useState({ name: '', age: 0, email: '' });
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(setUserInfos(user));

    setUser({ name: '', age: 0, email: '' });
  }

  const { name, age, email } = user;

  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <label htmlFor="name">
          Name:
          <br />
          <input
            name="name"
            type="text"
            value={ name }
            onChange={ handleChange }
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
            onChange={ handleChange }
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
            onChange={ handleChange }
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

export default Form;
