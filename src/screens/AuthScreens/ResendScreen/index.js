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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function ResendScreen({navigation}) {
  const [email, setEmail] = useState('');

  return (
    <KeyboardAwareScrollView style={{flex: 1, backgroundColor: '#191919'}}>
      <View style={[globalstyles.container]}>
        <View style={[globalstyles.maincontainer]}>
          <View
            style={{
              marginTop: Platform.OS === 'ios' ? 60 : 15,
              marginLeft: Platform.OS === 'ios' ? 20 : 15,
            }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="arrowleft" size={30} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
              marginBottom: Platform.OS === 'ios' ? 70 : 25,
            }}>
            <View style={{marginTop: 0}}>
              {/* <Image
                style={{
                  width: 220,
                  height: 40,
                  resizeMode: 'stretch',
                  alignSelf: 'center',
                }}
                source={images.mainLogo}
              /> */}
            </View>
            <View
              style={{
                marginTop: 50,
              }}>
              <Text
                style={[
                  {fontSize: 24, textAlign: 'center', color: COLORS.white},
                ]}>
                Check your mail
              </Text>
              <Text
                style={[
                  {
                    fontSize: 16,
                    marginTop: 10,
                    textAlign: 'center',
                    width: wp('90%'),
                    color: COLORS.white,
                  },
                ]}>
                We have sent a password recover {'\n'} instructions to your
                email.
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',

                marginTop: 20,
                width: wp('80%'),
                marginBottom: 30,
              }}>
              <Text style={[globalstyles.font16, {color: '#A8A8A8'}]}>
                Didn’t receive the the email?
              </Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text
                  style={[
                    globalstyles.font16,
                    {color: COLORS.red, textDecorationLine: 'underline'},
                  ]}>
                  {'  '}
                  Click to resend
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
