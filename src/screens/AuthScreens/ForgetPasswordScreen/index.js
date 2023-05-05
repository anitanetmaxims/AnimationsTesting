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
import {ToastMessage} from '../../../utilis/toast';
import {styles} from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function ForgetPasswordScreen({navigation}) {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (email.length == 0) {
      ToastMessage('error', 'Email is required ');
    } else {
      navigation.navigate('VerifyOtpScreen');
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
              <Text style={styles.headlinetext}>Forgot Password</Text>
              <Text style={styles.subtextstyle}>
                Please enter your register email address.{'\n'}We'll send
                instructions to help{'\n'}reset your password.
              </Text>
            </View>
            <View style={{marginTop: 30, marginBottom: 10}}>
              <CustomTextInput
                label={'Email'}
                width={'90%'}
                placeholder="e.g , tobydrake@gmail.com"
                onChangeText={text => setEmail(text)}
                value={email}
              />
            </View>

            <View>
              <TouchableOpacity onPress={() => handleSubmit()}>
                <CustomButton text={'Send OTP'} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
