// In App.js in a new project

import * as React from 'react';
import 'react-native-reanimated';
import 'react-native-gesture-handler';
import {MotiView} from 'moti';
import {useReducer} from 'react';
import {StyleSheet, Pressable, View, Image, Dimensions} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {Easing} from 'react-native-reanimated';

const _color = '#F26B5F';
const _size = 650;

const wp = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

export default function QRScanScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E84334',
      }}>
      <View style={[styles.dot, styles.center]}>
        {[...Array(3).keys()].map(index => {
          return (
            <MotiView
              from={{opacity: 1, scale: 1}}
              animate={{opacity: 0.2, scale: 4}}
              transition={{
                type: 'timing',
                duration: 1500,
                easing: Easing.out(Easing.ease),
                delay: index * 300,
                loop: true,
              }}
              key={index}
              style={[StyleSheet.absoluteFillObject, styles.dot]}
            />
          );
        })}

        <Image
          style={{
            width: 80,
            height: 80,
          }}
          source={require('../../../assets/sLogo.png')}
        />

        {/* <Feather name="phone-outgoing" size={32} color="#fff" /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dot: {
    justifyContent: 'center',
    // height: _size,
    // width: _size,
    borderRadius: _size,
    backgroundColor: _color,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
