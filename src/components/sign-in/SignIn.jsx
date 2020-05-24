import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import FormInput from 'components/form-input/FormInput';
import CustomButton from 'components/custom-button/CustomButton';
import { googleSignInStart, emailSignInStart } from 'redux/actions/userActions';

import './sign-in.scss';

const SignIn = () => {
  const [userCreds, setUserCreds] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const inputEl = useRef();

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(emailSignInStart({ email, password }));
    setUserCreds({ ...userCreds, email: '', password: '' });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserCreds({ ...userCreds, [name]: value });
  };

  const { email, password } = userCreds;

  return (
    <div className='sign-in'>
      <div className='title'>
        <h2>Sign In</h2>
        <span>Sign in with your email and password</span>
      </div>

      <form onSubmit={handleSubmit}>
        <FormInput
          ref={inputEl}
          name='email'
          type='email'
          onChange={handleChange}
          value={email}
          label='Email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        />

        <div className='buttons'>
          <CustomButton type='submit'> Sign in </CustomButton>
          <CustomButton
            type='button'
            onClick={() => dispatch(googleSignInStart())}
            isGoogleSignIn
          >
            Sign in With Google
          </CustomButton>
        </div>
        <div className='sign-up-message'>
          <span>
            Dont have an account?{' '}
            <Link to='/signup'>
              <strong>Sign up Here</strong>
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
