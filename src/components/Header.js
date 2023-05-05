import {View, Text} from 'react-native';
import React from 'react';

export default function Header({text}) {
  return (
    <View
      style={{
        height: 90,
        backgroundColor: 'red',
      }}>
      <Text>{text}</Text>
    </View>
  );
}
