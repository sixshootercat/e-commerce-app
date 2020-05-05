import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import FormInput from 'components/form-input/FormInput';
import CustomButton from 'components/custom-button/CustomButton';
import { signUpStart } from 'redux/actions/userActions';

import './sign-up.scss';

const SignUp = (props) => {
  const [userCreds, setUserCreds] = useState({
    email: '',
    displayName: '',
    password: '',
    confirmPassword: '',
  });

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = userCreds;

    dispatch(signUpStart({ email, password, displayName }));

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setUserCreds({ ...userCreds, [name]: value });
  };

  const { displayName, email, password, confirmPassword } = userCreds;

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
