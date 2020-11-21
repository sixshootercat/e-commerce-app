import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Input } from "components";
import { CustomButton, FormInput } from "components";
import { signUpStart } from "redux/actions/userActions";
import "./sign-up.scss";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

toast.configure();

export const toastNotification = (msg) => {
  toast.error(<p>{msg}</p>, {
    position: toast.POSITION.BOTTOM_CENTER,
    autoClose: 3500,
    pauseOnHover: false,
    hideProgressBar: true,
  });
};

const SignUp = () => {
  const [userCreds, setUserCreds] = useState({
    email: "",
    displayName: "",
    password: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();
  const inputEl = useRef();

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toastNotification("Passwords must match");
      return;
    }
    dispatch(signUpStart({ email, password, displayName }));
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setUserCreds({ ...userCreds, [name]: value });
  };

  const { displayName, email, password, confirmPassword } = userCreds;

  return (
    <div className="sign-up">
      <div className="title">
        <h2>Sign Up</h2>
        <span style={{ fontSize: "18px" }}>
          Sign up with your email and password
        </span>
      </div>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          ref={inputEl}
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Name"
          required
        />
        <Input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <Input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <Input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />

        <CustomButton type="submit">SIGN UP</CustomButton>

        <div className="sign-up-message">
          <span>
            Already have an account?{" "}
            <Link to="/signin">
              <strong>Sign in Here</strong>
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
