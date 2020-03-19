import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/actions/userActions";

import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/header/Header";
import SignInPage from "./pages/signin-page/SignInPage";

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
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
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.currentUser ? <Redirect to="/" /> : <SignInPage />
            }
          />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
