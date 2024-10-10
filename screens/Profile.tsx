import React from 'react';
import { Image, ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MainSeparator from '../components/MainSeparator';
import Highligths from '../components/Highlights';

const Container = styled.View`
  flex: 1;
`;

const Header = styled.View`
  background-color: #4267b2;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

const UserDetails = styled.View`
  align-items: center;
  margin-top: -75px;
`;

const UserName = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: black;
`;
const DescribitionContainer = styled.View`
  align-items: Left;
  margin-left:20px;
`;

const UserSubtitle = styled.Text`
  font-size: 14px;
  color: #666;
  left:60px;
  top:-48;
  flex-direction: row;
`;
const DescriptionTittle = styled.Text`
  font-size: 15px;
  color: black;
  left:60px;
  top:-50;
  font-weight: bold;
`;
const UserSubtitleImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 12px;
`;

const Avatar = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 80px;
  border-width: 4px;
  border-color: white;
  top:-3;
  left:0;
`;
const AvatarWhiteContainer = styled.View`
  width: 160px;
  height: 160px;
  border-radius: 80px;
  border-width: 6px;
  border-color: white;
  top:0;
  left:0;
  align-items: center;
`;
const AvatarBlueContainer = styled.View`
  width: 155px;
  height: 155px;
  border-radius: 80px;
  border-width: 5px;
  border-color: blue;
  top: -2;
  left:0;
  align-items: center;
`;


const CoverImage = styled.Image`
  width: 100%;
  height: 200px;
`;

const Input = styled.TextInput`
  height: 40px;
  width: 80%;
  padding: 0 8px;
  margin: 10px;
  border-radius: 30px;
  text-align: center; 
  background-color:#2f4a88;
`;
const TouchableIcon = styled.TouchableOpacity`
  height: 25px;
  width: 25px;
  left:300px;
  top:-80px;
`;
const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: -10px;
`;
const ButtonTextContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 40px;
  margin-top: -10px;
  margin-left:-15px;
`;

const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color:#DADADA;
  height: 70px;
  width: 70px;
  border-radius:50px;
  bottom:10px;
`;

const ButtonText = styled.Text`
  margin-top: 10px;
  font-size: 12px;
  color: black;
`;

const StoryHighlits = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: black;
  top:10px;
`;
const HightlightsRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 40px;
  margin-top: 5px;
  margin-left:-15px;
`;
const AddNew = styled.Text`
  margin-top: 10px;
  font-size: 18px;
  color: blue;
`;
const GreenCircle = styled.View`
  width: 25px;
  height: 25px;
  background-color: #10d24b; /* Verde */
  border-radius: 40px;
  border: 3px solid #ffffff; /* Borde blanco */
  position: absolute;
  bottom: 40px;
  left:250px;
  right: -2px;
  z-index: 1; /* Asegura que esté delante */
`;

const Profile = () => {
  return (
    <ScrollView>
      <Container>
        <Header>
          <MaterialCommunityIcons name="chevron-left" size={24} color="white" />
          <Input placeholder="Paola Mariselli"  placeholderTextColor="white" />
          <MaterialCommunityIcons name="account-box-multiple" size={24} color="white" />
        </Header>

        <CoverImage source={require('../assets/post4.jpg')} />
        <UserDetails>
          <AvatarWhiteContainer>
          <AvatarBlueContainer>
          <Avatar source={require('../assets/68.jpg')} />
          </AvatarBlueContainer>
          </AvatarWhiteContainer>
          <GreenCircle/>
          <UserName>Paola Mariselli</UserName>
        </UserDetails>
        <DescribitionContainer>
          <UserSubtitleImage source={require('../assets/68.jpg')} />
          <DescriptionTittle>Hunger</DescriptionTittle>
          <UserSubtitle>
            Florence + The Machine
            </UserSubtitle>
            <TouchableIcon>
              <MaterialCommunityIcons name="dots-horizontal" size={24} color="black" />
            </TouchableIcon>
        </DescribitionContainer>
        <ButtonContainer>
      <Button>
        <MaterialCommunityIcons name="plus-circle-outline" size={24} color="black" />
      </Button>

      <Button>
        <MaterialCommunityIcons name="format-list-bulleted" size={24} color="black" />
      </Button>

      <Button>
        <MaterialCommunityIcons name="pencil-outline" size={24} color="black" />
      </Button>

      <Button>
        <MaterialCommunityIcons name="dots-horizontal" size={24} color="black" />
      </Button>
    </ButtonContainer>
    <ButtonTextContainer>
    <ButtonText>Add Story</ButtonText>
    <ButtonText>Activity Log</ButtonText>
    <ButtonText>Edit Profile</ButtonText>
    <ButtonText>More</ButtonText>
    </ButtonTextContainer>
      </Container>
      <MainSeparator/>
      <HightlightsRow>
      <StoryHighlits>Story Hightlights</StoryHighlits>
      <AddNew>addNew</AddNew>
      </HightlightsRow>
      <Highligths/>

    </ScrollView>
  );
};

export default Profile;
