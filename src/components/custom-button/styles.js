import styled from 'styled-components';

export const StyledButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: ${({ isGoogleSignIn, inverted }) =>
    isGoogleSignIn ? '#4285f4' : inverted ? 'white' : 'black'};
  color: ${({ inverted }) => (inverted ? 'black' : 'white')};
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: 0.2s;

  &:hover {
    background-color: ${({ isGoogleSignIn, inverted }) =>
      isGoogleSignIn ? '#357ae8' : inverted ? 'black' : 'white'};
    color: ${({ inverted, isGoogleSignIn }) =>
      inverted || isGoogleSignIn ? 'white' : 'black'};
    border: ${({ isGoogleSignIn }) =>
      isGoogleSignIn ? 'none' : '1px solid black'};
  }
`;

// .custom-button {
//   min-width: 165px;
//   width: auto;
//   height: 50px;
//   letter-spacing: 0.5px;
//   line-height: 50px;
//   padding: 0 35px 0 35px;
//   font-size: 15px;
//   background-color: black;
//   color: white;
//   text-transform: uppercase;
//   font-family: 'Open Sans Condensed';
//   font-weight: bolder;
//   border: none;
//   cursor: pointer;
//   display: flex;
//   justify-content: center;
//   transition: 0.4s;

//   &:hover {
//     background-color: white;
//     color: black;
//     border: 1px solid black;
//   }

//   &.google-sign-in {
//     background-color: #4285f4;
//     color: white;

//     &:hover {
//       background-color: #357ae8;
//       border: none;
//     }
//   }

//   &.inverted {
//     background-color: white;
//     color: black;
//     border: 1px solid black;

//     &:hover {
//       background-color: black;
//       color: white;
//       border: none;
//     }
//   }
// }
