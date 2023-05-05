import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import COLORS from '../utilis/theme';

export default function CustomTextInput({
  label,
  width,
  height,
  placeholder,
  keyboardType,
  onChangeText,
  value,
  maxLength,
}) {
  return (
    <View style={{marginTop: 20}}>
      <View>
        <Text
          style={{
            color: COLORS.white,
          }}>
          {label}
        </Text>
      </View>
      <View style={{marginTop: 10}}>
        <TextInput
          style={{
            width: wp(`${width}`),
            height: 50,
            backgroundColor: '#2B2B2B',
            borderRadius: 5,
            paddingLeft: 12,
            color: '#FFFFFF',
            fontSize: 13,
          }}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={COLORS.grey}
          keyboardType={keyboardType}
          maxLength={maxLength}
          value={value}
        />
      </View>
    </View>
  );
}
