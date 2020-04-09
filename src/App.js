import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/selectors/userSelectors';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/actions/userActions';

import HomePage from './pages/home/HomePage';
import ShopPage from './pages/shop/ShopPage';
import SignInSignUp from './pages/sign-in-sign-up/SignInSignUpPage';
import CheckOutPage from './pages/checkout/CheckOutPage';
import Header from './components/header/Header';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { dispatch } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      dispatch(setCurrentUser(userAuth));
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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
            render={() =>
              this.props.currentUser ? <Redirect to='/' /> : <SignInSignUp />
            }
          />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(App);
