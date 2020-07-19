import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { selectCurrentUser } from 'redux/selectors/userSelectors';
import { useSelector, useDispatch } from 'react-redux';
import { checkUserSession } from 'redux/actions/userActions';

import Header from 'containers/header/Header';
import Spinner from 'components/spinner/Spinner';
import PageNotFound from 'components/page-not-found/PageNotFound';
import ErrorBoundary from 'components/error-boundary/ErrorBoundary';

const HomePage = lazy(() => import('routes/home/HomePage'));
const ShopPage = lazy(() => import('routes/shop/ShopPage'));
const CheckOutPage = lazy(() => import('routes/checkout/CheckOutPage'));
const ContactPage = lazy(() => import('routes/contact/ContactPage'));
const SignInPage = lazy(() => import('routes/sign-in/SignInPage'));
const SignUpPage = lazy(() => import('routes/sign-up/SignUpPage'));

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <>
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckOutPage} />
            <Route exact path='/contact' component={ContactPage} />

            <Route
              exact
              path='/signin'
              render={() =>
                currentUser ? <Redirect to='/' /> : <SignInPage />
              }
            />
            <Route exact path='/signup' component={SignUpPage} />
            <Route path='/' component={PageNotFound} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default App;
