import React from 'react';
import styled from 'styled-components';
import Directory from 'components/directory/Directory';

const HomePage = () => {
  return (
    <>
      <Header>CRWN Clothing</Header>
      <Directory />
    </>
  );
};

const Header = styled.h2`
  font-size: 28px;
  margin-bottom: 30px;
  text-align: center;
`;

export default HomePage;
