import React from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components/native';
import fakeStories from '../data/fakeStories';
import * as Animation from '../animations/StoryAnimations';

const Container = styled.View`
  width: 100%;
  height: 230px;
  flex-direction: row;
  align-items: center;
  background:#ffffff;
`;

const UserCard = styled.View`
  width: 110px;
  height: 200px;
  margin-right: 10px;
  position: relative;
`;

const UserCardStory = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 10px;
`;


const UserCardFooter = styled.View`
  position: absolute;
  width: 100%;
  height: 35%;
  top: 130px;
  left: 0px;
  background: ${(props) => (props.profile ? '#FFFFFF' : 'rgba(255, 255, 255, 0)')};
`;



const Highligths = () => {
    return (
      <>
        <Container>
<Animated.ScrollView
  horizontal
  showsHorizontalScrollIndicator={false}
  style={{ paddingLeft: 10, flexDirection: 'row' }}
  scrollEventThrottle={5}
  onScroll={Animated.event(
    [
      {
        nativeEvent: { contentOffset: { x: Animation.scroll_x } },
      },
    ]
  )}
>

  {fakeStories.map((story, i) => {
    return (
      <UserCard key={i.toString()}>
        <UserCardStory source={story.source} />
        <UserCardFooter profile={false}>
        </UserCardFooter>
      </UserCard>
    );
  })}
</Animated.ScrollView>

        </Container>
      </>
    );
  };
  export default Highligths;


