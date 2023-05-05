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

export default function ThankyouScreen({navigation}) {
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
          // style={[
          //   globalstyles.authbg,
          //   {
          //     alignItems: "center",
          //   },
          // ]}
          >
            <View style={{marginTop: 50}}>
              <Image
                style={{
                  width: 220,
                  height: 40,
                  resizeMode: 'stretch',
                  alignSelf: 'center',
                }}
                source={images.mainLogo}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 150,
                marginBottom: 40,
                // flex: 1,
              }}>
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
                Password reset{'\n'}Your password has been successfully reset
              </Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <CustomButton text={'CHANGE PASSWORD'} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
