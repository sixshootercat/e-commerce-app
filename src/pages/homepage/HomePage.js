import React from "react";
import "./homepage.scss";
import Directory from "../../components/directory/Directory";

const HomePage = ({ history }) => (
  <div className="homepage">
    <h1>Welcome to my Homepage</h1>
    <Directory />
  </div>
);

export default HomePage;
