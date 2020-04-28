import React from 'react';

import Directory from 'components/directory/Directory';
import './homepage.scss';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'redux/selectors/userSelectors';

const Home = () => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <>
      {!currentUser ? <Redirect to='/signin' /> : null}
      <h2 className='title'>CRWN Clothing</h2>
      <Directory />
    </>
  );
};

export default Home;
