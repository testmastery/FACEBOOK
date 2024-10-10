import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Avatar from './Avatar';
import fakeUsers from '../data/fakedata.js';

const Container = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: row;
  align-items: center;
  background: #FFFFFF;
`;

const Room = styled.TouchableOpacity`
  width: 100px;
  height: 40px;
  flex-direction: row;
  align-items: center;
  border: 1px solid #82b1dd;
  border-radius: 20px;
  padding: 0 15px;
  margin-right: 12px;
`;

const Text = styled.Text`
  color: #1777ff;
  font-size: 12px;
  padding-left: 6px;
  width: 80%;
  flex-wrap: wrap;
`;

const User = styled.View`
  margin-right: 12px;
`;
const Users = () => {
    return (
      <Container>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingLeft: 12 }}
        >
          <Room>
            <MaterialCommunityIcons name="video-plus" size={26} color="#A748EE" />
            <Text>Crear sala</Text>
          </Room>
          {fakeUsers.map((elem, i) => {
            return (
              <User key={i.toString()}>
                <Avatar source={elem.source} online={elem.online} />
              </User>
            );
          })}
        </ScrollView>
      </Container>
    );
  };
  export default Users;
