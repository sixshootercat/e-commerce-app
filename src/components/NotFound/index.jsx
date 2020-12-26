import React from "react";
import { Link } from "react-router-dom";
import { Container, Message } from "./styles";
import { CustomButton } from "components";

const message = "404 - Page Not Found";

const PageNotFound = () => {
  return (
    <Container>
      <Message>{message.toLocaleUpperCase()}</Message>
      <Link to="/">
        <CustomButton data-testid="back-home">Back Home</CustomButton>
      </Link>
    </Container>
  );
};
export default PageNotFound;
