import React from 'react';
import styled from 'styled-components/native';

const Separator = styled.View`
  width: 100%;
  height: 10px;

  border-width:3px;
  border-color:white;

`;

const MainSeparator = () => {
  return (
    <Separator />
  );
};

export default MainSeparator;
