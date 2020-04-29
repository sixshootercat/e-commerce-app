import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { selectCurrentUser } from 'redux/selectors/userSelectors';
import { useSelector } from 'react-redux';

import HomePage from 'pages/home/HomePage';
import ShopPage from 'pages/shop/ShopPage';
import SignInSignUp from 'pages/sign-in-sign-up/SignInSignUpPage';
import CheckOutPage from 'pages/checkout/CheckOutPage';
import Header from 'components/header/Header';

const App = (props) => {
  const currentUser = useSelector(selectCurrentUser);

  // useEffect(() => {
  // const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
  //   if (userAuth) {
  //     const userRef = await createUserProfileDocument(userAuth);
  //     userRef.onSnapshot((snapShot) => {
  //       dispatch(
  //         setCurrentUser({
  //           id: snapShot.id,
  //           ...snapShot.data(),
  //         })
  //       );
  //     });
  //   }
  //   dispatch(setCurrentUser(userAuth));
  // });
  // return () => {
  //   unsubscribeFromAuth();
  // };
  // }, []);

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
