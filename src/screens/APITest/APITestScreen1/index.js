import {View, Text, TouchableOpacity, Button, Alert} from 'react-native';
import React from 'react';
import {AnimationClient} from '../../../utilis/ApiServices';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function APITestScreen1() {
  const on_hit = async () => {
    const response = await AnimationClient.post('user/login', {
      email: 'vivek.netmaxims@gmail.com',
      provider: 'LOCAL',
      password: 'Mansi@123',
      role: 'organization',
    });
    console.log('login......', JSON.stringify(response.data));
  };

  return (
    <View>
      <Text>APITestScreen21</Text>
      <Button title="Press me" onPress={() => on_hit()} />
    </View>
  );
}
