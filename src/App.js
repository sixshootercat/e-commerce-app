import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { selectCurrentUser } from 'redux/selectors/userSelectors';
import { useSelector, useDispatch } from 'react-redux';
import { checkUserSession } from 'redux/actions/userActions';

import Header from 'components/header/Header';
import Spinner from 'components/spinner/Spinner';
import PageNotFound from 'components/page-not-found/PageNotFound';

const HomePage = lazy(() => import('pages/home/HomePage'));
const ShopPage = lazy(() => import('pages/shop/ShopPage'));
const CheckOutPage = lazy(() => import('pages/checkout/CheckOutPage'));
const ContactPage = lazy(() => import('pages/contact/ContactPage'));
const SignInPage = lazy(() => import('pages/sign-in/SignInPage'));
const SignUpPage = lazy(() => import('pages/sign-up/SignUpPage'));

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <>
      <Header />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckOutPage} />
          <Route exact path='/contact' component={ContactPage} />

          <Route
            exact
            path='/signin'
            render={() => (currentUser ? <Redirect to='/' /> : <SignInPage />)}
          />
          <Route exact path='/signup' component={SignUpPage} />
          <Route path='*' component={PageNotFound} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
