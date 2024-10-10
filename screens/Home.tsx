import React from 'react';
import styled from 'styled-components/native';

import ToolBar from '../components/ToolBar';
import MainSeparator from '../components/MainSeparator';
import Users from '../components/Users';
import Story from '../components/Story';
import Post from '../components/Post';

const View = styled.View`
  flex: 1;
`;

const Scroll = styled.ScrollView`
  flex: 1;
`;

const Home = () => {
  return (
    <Scroll>
      <ToolBar />
      <MainSeparator />
      <Users />
      <MainSeparator />
      <Story />
      <MainSeparator />
      <Post />
    </Scroll>
  );
};

export default Home;
