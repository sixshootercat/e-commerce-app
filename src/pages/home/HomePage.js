import React from "react";
import { HomePageContainer } from "./homepage.styles";
import Directory from "../../components/directory/Directory";

const Home = () => (
  <HomePageContainer>
    <h1>Crown Clothing</h1>
    <Directory />
  </HomePageContainer>
);

export default Home;
