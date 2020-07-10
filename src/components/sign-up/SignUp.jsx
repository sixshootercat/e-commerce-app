import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import FormInput from 'components/form-input/FormInput';
import CustomButton from 'components/custom-button/CustomButton';
import { signUpStart } from 'redux/actions/userActions';

import './sign-up.scss';

const SignUp = () => {
  const [userCreds, setUserCreds] = useState({
    email: '',
    displayName: '',
    password: '',
    confirmPassword: '',
  });

  const dispatch = useDispatch();
  const inputEl = useRef();

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      <div className='title'>
        <h2>Sign Up</h2>
        <span style={{ fontSize: '18px' }}>
          Sign up with your email and password
        </span>
      </div>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          ref={inputEl}
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
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </div>

        <div className='sign-up-message'>
          <span>
            Already have an account?{' '}
            <Link to='/signin'>
              <strong>Sign in Here</strong>
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
