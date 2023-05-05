import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {globalstyles} from '../../globalstyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomTextInput from '../../../components/CustomTextInput';
import images from '../../../constants/images';
import CustomButton from '../../../components/CustomButton';
import COLORS from '../../../utilis/theme';
import { ToastMessage } from '../../../utilis/toast';
import {styles} from './style';

export default function VerifyOtpScreen({navigation}) {
  const [otp, setOTP] = useState('');

  const handleSubmit = () => {
    if (otp.length == 0) {
      ToastMessage('error', 'OTP is required ');
    } else {
      navigation.navigate('ResetPasswordScreen');
    }
  };

  return (
    <KeyboardAwareScrollView style={{flex: 1, backgroundColor: '#191919'}}>
      <View style={[globalstyles.container]}>
        <View style={[globalstyles.maincontainer]}>
          <View
            style={{
              marginTop: Platform.OS === 'ios' ? 60 : 15,
              marginLeft: Platform.OS === 'ios' ? 10 : 5,
            }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="arrowleft" size={30} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
          <View>
            <View style={{marginTop: 50}}>
              <Image style={styles.mainlogostyle} source={images.mainLogo} />
            </View>
            <View
              style={{
                marginTop: 50,
              }}>
              <Text style={styles.headlinetext}>Get Your Code</Text>
              <Text style={styles.subtextstyle}>
                Please enter the 6 digit code that{'\n'}send to your email
                address.
              </Text>
            </View>
            <View style={{marginTop: 30, marginBottom: 10}}>
              <CustomTextInput
                label={'Enter Otp'}
                width={'90%'}
                placeholder="Enter Otp"
                onChangeText={text => setOTP(text)}
                value={otp}
              />
            </View>
            <View style={styles.resendtextviewstyle}>
              <Text
                style={{
                  color: COLORS.grey,
                }}>
                If you don't receive code
              </Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{color: COLORS.white}}> Resend</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={() => handleSubmit()}>
                <CustomButton text={'Verify and Proceed'} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
