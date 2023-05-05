import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Animated,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';

const SplashScreen = ({navigation}) => {
  const zoomValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(zoomValue, {
      toValue: 0.5,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      navigation.navigate('LoginScreen');
    }, 2000);
  }, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E84334',
      }}>
      <Animated.Image
        source={require('../../../assets/splashlogo.png')}
        style={[styles.logo, {transform: [{scale: zoomValue}]}]}
      />
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  logo: {
    width: 450,
    height: 450,
  },
});
