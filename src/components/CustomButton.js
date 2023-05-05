import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import COLORS from '../utilis/theme';

export default function CustomButton({text}) {
  return (
    <View style={{marginTop: 20}}>
      <View
        style={{
          width: wp('90%'),
          height: 50,
          backgroundColor: COLORS.red,
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: COLORS.white,
          }}>
          {text}
        </Text>
      </View>
      <View style={{marginTop: 10}}></View>
    </View>
  );
}
