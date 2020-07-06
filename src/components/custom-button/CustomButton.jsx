import React from 'react';
import { StyledButton } from './styles';

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <StyledButton
    inverted={inverted}
    isGoogleSignIn={isGoogleSignIn}
    {...otherProps}
  >
    {children}
  </StyledButton>
);

export default CustomButton;
