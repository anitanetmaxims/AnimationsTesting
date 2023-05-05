import {
  View,
  Platform,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomDrawer from '../components/CustomDrawer';
import {useNavigation} from '@react-navigation/native';
import images from '../constants/images';
import COLORS from '../utilis/theme';

// main Screens

import HomeScreen from '../screens/UserScreens/HomeScreen';
import ProfileScreen from '../screens/UserScreens/ProfileScreen';
import QRScanScreen from '../screens/UserScreens/QRScanSceen';

// Guest Screens
import GuestScreen from '../screens/UserScreens/GuestScreen';
import GuestDeatilsScreen from '../screens/UserScreens/GuestDetailsScreen';

// API'S Screen
import APITestScreen1 from '../screens/APITest/APITestScreen1';
import APITestScreen2 from '../screens/APITest/APITestScreen2';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const screenWidth = Dimensions.get('screen').width;

const screenOptionStyle = {
  headerStyle: {
    // backgroundColor: '#E84334',
    // height : hp('7%')
    flex: 1,
  },
  headerTitleAlign: 'flex-start',
  // headerTintColor: 'white',
};

const AppRoute = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  const navigation = useNavigation();

  const onDrawer = () => {
    navigation.toggleDrawer();
  };

  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Events"
        component={HomeScreen}
        options={{
          title: 'Menu',

          headerTitleStyle: {
            fontSize: 20,
            fontWeight: '600',
            headerTitleStyle: {textAlign: 'left'},

            // fontSize:hp('2.5%')
          },

          headerLeft: () => (
            <SafeAreaView
              style={
                {
                  // marginTop: 50
                }
              }>
              <View
                style={{
                  flexDirection: 'row',
                  marginRight: 10,
                }}>
                <TouchableOpacity
                // onPress={() => onDrawer()}
                >
                  <MaterialCommunityIcons name="menu" size={35} color="#FFF" />
                </TouchableOpacity>
              </View>
            </SafeAreaView>
          ),
          headerRight: () => (
            <SafeAreaView
              style={
                {
                  // marginTop: 50
                }
              }>
              {/* <View
                style={{
                  flexDirection: 'row',
                  marginRight: 10,
                }}>
                <TouchableOpacity onPress={() => onDrawer()}>
                  <MaterialCommunityIcons name="menu" size={35} color="#FFF" />
                </TouchableOpacity>
              </View> */}
            </SafeAreaView>
          ),
        }}
      />
      <Stack.Screen name="GuestScreen" component={GuestScreen} />
      <Stack.Screen name="GuestDetailsScreen" component={GuestDeatilsScreen} />
    </Stack.Navigator>
  );
};

const ScanStack = () => {
  const navigation = useNavigation();

  const onDrawer = () => {
    navigation.toggleDrawer();
  };
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="QRScanScreen"
        component={QRScanScreen}
        options={{
          title: 'Logo',

          headerTitleStyle: {
            fontSize: 20,
            fontWeight: '600',
            headerTitleStyle: {textAlign: 'left'},

            // fontSize:hp('2.5%')
          },

          headerLeft: () => (
            <SafeAreaView
              style={
                {
                  // marginTop: 50
                }
              }>
              <View
                style={{
                  flexDirection: 'row',
                  marginRight: 10,
                }}>
                <TouchableOpacity
                // onPress={() => onDrawer()}
                >
                  <MaterialCommunityIcons name="menu" size={35} color="#FFF" />
                </TouchableOpacity>
              </View>
            </SafeAreaView>
          ),
          headerRight: () => (
            <SafeAreaView
              style={
                {
                  // marginTop: 50
                }
              }>
              {/* <View
              style={{
                flexDirection: 'row',
                marginRight: 10,
              }}>
              <TouchableOpacity onPress={() => onDrawer()}>
                <MaterialCommunityIcons name="menu" size={35} color="#FFF" />
              </TouchableOpacity>
            </View> */}
            </SafeAreaView>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  const navigation = useNavigation();

  const onDrawer = () => {
    navigation.toggleDrawer();
  };
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: 'ZoomOut',

          headerTitleStyle: {
            fontSize: 20,
            fontWeight: '600',
            headerTitleStyle: {textAlign: 'left'},

            // fontSize:hp('2.5%')
          },

          headerLeft: () => (
            <SafeAreaView
              style={
                {
                  // marginTop: 50
                }
              }>
              <View
                style={{
                  flexDirection: 'row',
                  marginRight: 10,
                }}>
                <TouchableOpacity
                // onPress={() => onDrawer()}
                >
                  <MaterialCommunityIcons name="menu" size={35} color="#FFF" />
                </TouchableOpacity>
              </View>
            </SafeAreaView>
          ),
          headerRight: () => (
            <SafeAreaView
              style={
                {
                  // marginTop: 50
                }
              }>
              {/* <View
              style={{
                flexDirection: 'row',
                marginRight: 10,
              }}>
              <TouchableOpacity onPress={() => onDrawer()}>
                <MaterialCommunityIcons name="menu" size={35} color="#FFF" />
              </TouchableOpacity>
            </View> */}
            </SafeAreaView>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const APIStack = () => {
  const navigation = useNavigation();

  const onDrawer = () => {
    navigation.toggleDrawer();
  };
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="APIScreen1"
        component={APITestScreen1}
        options={{
          title: 'API Test',

          headerTitleStyle: {
            fontSize: 20,
            fontWeight: '600',
            headerTitleStyle: {textAlign: 'left'},

            // fontSize:hp('2.5%')
          },

          headerLeft: () => (
            <SafeAreaView
              style={
                {
                  // marginTop: 50
                }
              }>
              <View
                style={{
                  flexDirection: 'row',
                  marginRight: 10,
                }}>
                <TouchableOpacity
                // onPress={() => onDrawer()}
                >
                  <MaterialCommunityIcons name="menu" size={35} color="#FFF" />
                </TouchableOpacity>
              </View>
            </SafeAreaView>
          ),
          headerRight: () => (
            <SafeAreaView
              style={
                {
                  // marginTop: 50
                }
              }>
              {/* <View
              style={{
                flexDirection: 'row',
                marginRight: 10,
              }}>
              <TouchableOpacity onPress={() => onDrawer()}>
                <MaterialCommunityIcons name="menu" size={35} color="#FFF" />
              </TouchableOpacity>
            </View> */}
            </SafeAreaView>
          ),
        }}
      />
      <Stack.Screen
        name="APIScreen2"
        component={APITestScreen2}
        options={{
          title: 'API Test',

          headerTitleStyle: {
            fontSize: 20,
            fontWeight: '600',
            headerTitleStyle: {textAlign: 'left'},

            // fontSize:hp('2.5%')
          },

          headerLeft: () => (
            <SafeAreaView
              style={
                {
                  // marginTop: 50
                }
              }>
              <View
                style={{
                  flexDirection: 'row',
                  marginRight: 10,
                }}>
                <TouchableOpacity
                // onPress={() => onDrawer()}
                >
                  <MaterialCommunityIcons name="menu" size={35} color="#FFF" />
                </TouchableOpacity>
              </View>
            </SafeAreaView>
          ),
          headerRight: () => (
            <SafeAreaView
              style={
                {
                  // marginTop: 50
                }
              }>
              {/* <View
              style={{
                flexDirection: 'row',
                marginRight: 10,
              }}>
              <TouchableOpacity onPress={() => onDrawer()}>
                <MaterialCommunityIcons name="menu" size={35} color="#FFF" />
              </TouchableOpacity>
            </View> */}
            </SafeAreaView>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const BottomtabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        // tabBarActiveTintColor: COLORS.white,
        // tabBarInactiveTintColor: '#FFA9A1',

        // height: Platform.OS !== 'android' ? 550 : 50,
        headerShown: false,
        tabBarStyle: {
          // backgroundColor: COLORS.red,
          height: Platform.OS !== 'android' ? 90 : 50,
          paddingTop: 5,
        },
        tabBarLabelStyle: {
          fontWeight: '400',
          fontSize: 13,
          fontStyle: 'normal',
          // marginBottom: 5,

          // marginBottom: -10,
        },
      }}>
      <Tab.Screen
        name="Menu"
        component={HomeStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={images.eventsIcon}
              style={{
                height: 25,
                width: 25,
                resizeMode: 'contain',
                tintColor: color,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Logo"
        component={ScanStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={images.scanIcon}
              style={{
                height: 25,
                width: 25,
                resizeMode: 'contain',
                tintColor: color,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ZoomOut"
        component={ProfileStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={images.profileIcon}
              style={{
                height: 25,
                width: 25,
                resizeMode: 'contain',
                tintColor: color,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="APITest"
        component={APIStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={images.profileIcon}
              style={{
                height: 25,
                width: 25,
                resizeMode: 'contain',
                tintColor: color,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="BottomTabNavigation"
      // drawerContent={props => <CustomDrawer {...props} />}

      drawerContent={evt => {
        return <CustomDrawer />;
      }}
      // screenOptions={{
      //   swipeEnabled: false,
      //   headerShown: false,
      //   drawerStyle: {
      //     width: screenWidth * 0.85,
      //   },
      // }}
      screenOptions={{
        swipeEnabled: false,
        headerShown: false,
        drawerPosition: 'left',
        headerStyle: {
          backgroundColor: '#E84334',
        },
        headerTitleAlign: 'flex-start',
        headerTintColor: 'white',
      }}>
      <Drawer.Screen
        name="BottomTabNavigation"
        component={BottomtabNavigation}
      />
    </Drawer.Navigator>
  );
};

export default AppRoute;
