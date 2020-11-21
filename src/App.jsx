import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./globalStyles.scss";
import { selectCurrentUser } from "redux/selectors/userSelectors";
import { useSelector, useDispatch } from "react-redux";
import { checkUserSession } from "redux/actions/userActions";

import { Header } from "containers";
import { Spinner } from "components";
import { NotFound } from "components";
import { ErrorBoundary } from "components";

const HomePage = lazy(() => import("pages/Home"));
const ShopPage = lazy(() => import("pages/Shop"));
const CheckOutPage = lazy(() => import("pages/Checkout"));
const ContactPage = lazy(() => import("pages/Contact"));
const SignInPage = lazy(() => import("pages/SignIn"));
const SignUpPage = lazy(() => import("pages/SignUp"));

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
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckOutPage} />
            <Route exact path="/contact" component={ContactPage} />

            <Route
              exact
              path="/signin"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInPage />
              }
            />
            <Route exact path="/signup" component={SignUpPage} />
            <Route path="/" component={NotFound} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default App;
