import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';
import AppRoute from './navigation/Navigator';
import AuthRoute from './navigation/AuthRoute';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {/* <Stack.Screen name="AuthRoute" component={AuthRoute} /> */}
        <Stack.Screen name="AppRoute" component={AppRoute} />
      </Stack.Navigator>
      <Toast
        type={'success'}
        position="bottom"
        bottomOffset={40}
        visibilityTime={4000}
        autoHide={true}
      />
    </NavigationContainer>
  );
};

export default App;
