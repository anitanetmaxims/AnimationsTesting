import {View, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/UserScreens/HomeScreen';
import ProfileScreen from '../screens/UserScreens/ProfileScreen';
import images from '../constants/images';


const Tab = createBottomTabNavigator();
const BottomtabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarActiveTintColor: '#008751',
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../../../src/assets/icon1.png')}
              style={{size: size, tintColor: color}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../../../src/assets/icon2.png')}
              style={{size: size, tintColor: color}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomtabNavigation;
