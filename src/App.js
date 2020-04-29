import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { selectCurrentUser } from 'redux/selectors/userSelectors';
import { useSelector, useDispatch } from 'react-redux';
import { checkUserSession } from 'redux/actions/userActions';

import HomePage from 'pages/home/HomePage';
import ShopPage from 'pages/shop/ShopPage';
import SignInSignUp from 'pages/sign-in-sign-up/SignInSignUpPage';
import CheckOutPage from 'pages/checkout/CheckOutPage';
import Header from 'components/header/Header';

const App = props => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckOutPage} />
        <Route
          exact
          path='/signin'
          render={() => (currentUser ? <Redirect to='/' /> : <SignInSignUp />)}
        />
      </Switch>
    </>
  );
};

export default App;
