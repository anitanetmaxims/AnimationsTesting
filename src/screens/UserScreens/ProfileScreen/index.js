import React, {Component} from 'react';
import {View, Image, StyleSheet, Animated} from 'react-native';

class ProfileScreen extends Component {
  state = {
    zoomValue: new Animated.Value(0),
  };

  componentDidMount() {
    Animated.timing(this.state.zoomValue, {
      toValue: 0.8,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }

  render() {
    const {zoomValue} = this.state;
    return (
      <View style={styles.container}>
        <Animated.Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREZ_wL9cp-XNKOszBoha9MKXU8XAoGLD6clg&usqp=CAU',
          }}
          style={[styles.logo, {transform: [{scale: zoomValue}]}]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 500,
    height: 500,
  },
});

export default ProfileScreen;
