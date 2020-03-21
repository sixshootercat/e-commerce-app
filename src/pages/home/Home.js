import React from "react";
import "./home.scss";
import Directory from "../../components/directory/Directory";

const Home = ({ history }) => (
  <div className="homepage">
    <h1>Crown Clothing</h1>
    <Directory />
  </div>
);

export default Home;
