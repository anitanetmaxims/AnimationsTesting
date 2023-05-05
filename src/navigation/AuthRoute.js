import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/AuthScreens/SplashScreen';
import LoginScreen from '../screens/AuthScreens/LoginScreen';
import ForgetPasswordScreen from '../screens/AuthScreens/ForgetPasswordScreen';
import VerifyOtpScreen from '../screens/AuthScreens/VerifyOtpScreen';
import ResetPasswordScreen from '../screens/AuthScreens/ResetPasswordScreen';
import ThankyouScreen from '../screens/AuthScreens/ThankyouScreen';
import ResendScreen from '../screens/AuthScreens/ResendScreen';
import Splash from '../screens/AuthScreens/Splash/SplashScreen';

const Stack = createNativeStackNavigator();
const AuthRoute = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SplashScreen" component={Splash} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="ForgetScreen" component={ForgetPasswordScreen} />
      <Stack.Screen name="VerifyOtpScreen" component={VerifyOtpScreen} />
      <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
      <Stack.Screen name="ThankyouScreen" component={ThankyouScreen} />
      <Stack.Screen name="ResendScreen" component={ResendScreen} />
    </Stack.Navigator>
  );
};

export default AuthRoute;
