import {View, Text, Platform, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from '../../../components/CustomTextInput';
import {globalstyles} from '../../globalstyles';
import images from '../../../constants/images';
import CustomButton from '../../../components/CustomButton';
import {ToastMessage} from '../../../utilis/toast';
import COLORS from '../../../utilis/theme';
import {styles} from './style';

export default function LoginScreen({navigation}) {
  const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const PASSWORD_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (email.length == 0) {
      ToastMessage('error', 'Email is required ');
    }
    //  else if (email != EMAIL_REGEX) {
    //   ToastMessage('error', 'Enter a valid E-mail Id.');
    // }
    else if (password.length == 0) {
      ToastMessage('error', 'Password is required ');
    } else {
      navigation.navigate('AppRoute');
    }
  };

  return (
    <View style={[globalstyles.container]}>
      <View style={[globalstyles.maincontainer]}>
        <View
          style={{
            marginTop: Platform.OS == 'ios' ? 120 : 100,
          }}>
          <Image style={styles.mainlogostyle} source={images.mainLogo} />
          <View style={{alignItems: 'center', marginTop: 30}}>
            <Text style={styles.headlinetext}>Log In</Text>
          </View>

          <View style={{marginTop: 30, alignItems: 'center'}}>
            <CustomTextInput
              label={'Email'}
              width={'90%'}
              placeholder="e.g , tobydrake@gmail.com"
              onChangeText={text => setEmail(text)}
              value={email}
            />
            <CustomTextInput
              label={'Password'}
              width={'90%'}
              placeholder="Password"
              onChangeText={text => setPassword(text)}
              value={password}
            />
          </View>
          <View style={styles.forgetviewstyle}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgetScreen')}>
              <Text style={styles.forgettextstyle}>Forget Password ?</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity onPress={() => handleSubmit()}>
              <CustomButton text={'Login'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
