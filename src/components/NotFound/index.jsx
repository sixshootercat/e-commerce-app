import React from "react";
import { Link } from "react-router-dom";
import { Container, Message } from "./styles";

import { CustomButton } from "components";

const PageNotFound = () => {
  const message = "404 - Page Not Found";

  return (
    <Container>
      <Message>{message.toLocaleUpperCase()}</Message>
      <Link to="/">
        <CustomButton>Back Home</CustomButton>
      </Link>
    </Container>
  );
};
export default PageNotFound;
