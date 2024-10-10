/* eslint-disable react/no-unstable-nested-components */
import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import Header from './components/Header';
import Home from './screens/Home';
import Friends from './screens/Friends';
import Groups from './screens/Groups';
import Profile from './screens/Profile';
import Notifications from './screens/Notifications';
import Menu from './screens/Menu';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <>
      <StatusBar
        backgroundColor="#FFFFFF"
        barStyle="dark-content"
      />
      <Header />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color}) => {
              let iconName;

              // Asignación del icono basado en el nombre de la ruta
              if (route.name === 'Home') {iconName = 'home';}
              else if (route.name === 'Friends') {iconName = 'account-multiple-outline';}
              else if (route.name === 'Groups') {iconName = 'account-group';}
              else if (route.name === 'Profile') {iconName = 'account-circle-outline';}
              else if (route.name === 'Notifications') {iconName = 'bell-outline';}
              else if (route.name === 'Menu') {iconName = 'menu';}

              return <MaterialCommunityIcons name={iconName} size={26} color={color} />;
            },
            tabBarShowLabel: false, // Oculta los labels (nombres) de las pestañas
          })}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Friends" component={Friends} />
          <Tab.Screen name="Groups" component={Groups} />
          <Tab.Screen name="Profile" component={Profile} />
          <Tab.Screen name="Notifications" component={Notifications} />
          <Tab.Screen name="Menu" component={Menu} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
