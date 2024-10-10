import React from 'react';
import { Animated, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import fakeStories from '../data/fakeStories';
import Avatar from './Avatar';
import * as Animation from '../animations/StoryAnimations'

const Container = styled.View`
  width: 100%;
  height: 230px;
  flex-direction: row;
  align-items: center;
  background:#ffffff;
`;
const FakeCard = styled.View`
  width: 110px;
  height: 200px;
  margin-left:10px;
  align-items: center;
  background:#ffffff;
`;
const PersonalCard = styled.View`
  width: 110px;
  height: 200px;
  margin-right:10px;
  position:absolute;
  background:#ffffff;
  border-radius:10px;
  x-index:10;
  border: 1px solid #DDDDDD;
  z-index:1;
`;
const PersonalCardStory = styled.View`
  width: 100%px;
  height: 130px;
  border-radius:10px;
  border-bottom-left-radius:0;
  border-bottom-right-radius:0;
  position:absolute;
  top:0px;
  left:0px;
`;
const PersonalCardIcon = styled.View`
  width: 34px;
  height: 34px;
  border-radius: 17px;
  background: #3a86e9;
  border-width: 3px;
  border-color: #FFFFFF;
  align-items: center;
  position: absolute;
  top: 115px;
  left: 40px;
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


const UserCardPlus = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background: #3a86e9;
  align-items: center;
  position: absolute;
  top: 115px;
  left: 40px;
`;

const UserCardFooter = styled.View`
  position: absolute;
  width: 100%;
  height: 35%;
  top: 130px;
  left: 0px;
  background: ${(props) => (props.profile ? '#FFFFFF' : 'rgba(255, 255, 255, 0)')};
`;

const UserOnCard = styled.View`
  position: absolute;
  top: 8px;
  left: 8px;
  background: #FFFFFF;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;


const Text = styled.Text`
  font-size: 11px;
  font-weight: bold;
  margin: 0 12px;
  top: -10px;
  padding-top: ${(props) => (props.profile ? '165px' : '45px')};
  text-align: center;
  color: ${(props) => (props.profile ? '#000000' : '#FFFFFF')};
`;


const Story = () => {
    return (
      <>
        <Container>
        <PersonalCard as={Animated.View} style={{
  top: Animation.cardTop,
  left: Animation.cardLeft,
  height: Animation.cardHeight,
  borderRadius: Animation.cardRadius,
  borderBottomLeftRadius: Animation.cardLeftRadius,
  borderBottomRightRadius: Animation.cardRightRadius,
  borderTopLeftRadius: Animation.cardLeftRadius,
  borderTopRightRadius: Animation.cardRightRadius,
}}>
  <PersonalCardStory as={Animated.Image}
    source={require('../assets/story.jpg')}
    style={{
      top: Animation.imageTop,
      left: Animation.imageLeft,
      width: Animation.imageWidth,
      height: Animation.imageHeight,
      marginRight: Animation.imageMargin,
      marginTop: Animation.imageMargin,
      borderRadius: Animation.imageRadius,
      borderBottomLeftRadius: Animation.imageBottomRadius,
      borderBottomRightRadius: Animation.imageBottomRadius,
      borderTopRightRadius: Animation.imageTopRadius,
      borderTopLeftRadius: Animation.imageTopRadius,
    }}
  />
  <Text as={Animated.Text}
    profile={true}
    style={{
      opacity: Animation.textOpacity,
      scale: Animation.textScale,
    }}>
    Crear una historia
  </Text>
  <PersonalCardIcon as={Animated.View} style={{
    transform: [{ scale: Animation.iconScale }],
    top: Animation.iconTop,
    left: Animation.iconLeft,
  }}>
    <MaterialCommunityIcons name="plus" size={28} color="#FFFFFF" />
  </PersonalCardIcon>
</PersonalCard>
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
  <FakeCard />
  {fakeStories.map((story, i) => {
    return (
      <UserCard key={i.toString()}>
        <UserCardStory source={story.source} />
        <UserCardFooter profile={false}>
          <Text profile={false}>{story.name}</Text>
        </UserCardFooter>
        <UserOnCard>
          <Avatar
                    source={story.user}
                    story={true}
                    checked={story.checked} online={undefined}          />
        </UserOnCard>
      </UserCard>
    );
  })}
</Animated.ScrollView>

        </Container>
      </>
    );
  };
  export default Story;


