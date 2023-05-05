import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
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

export default function ResetPasswordScreen({navigation}) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [password, setPassword] = useState('');
  const [password_confirmation, setpassword_confirmation] = useState('');

  const handleSubmit = () => {
    if (password.length < 8) {
      ToastMessage('error', 'Password must be at least 8 characters long.');
    } else if (password_confirmation != password) {
      ToastMessage('error', 'Confirm password do not match.');
    } else {
      setIsSuccess(!isSuccess);
    }
  };

  return (
    <KeyboardAwareScrollView
      style={[
        isSuccess ? {opacity: 0.6} : {opacity: 1},
        ,
        {flex: 1, backgroundColor: '#191919'},
      ]}>
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
              <Text style={styles.headlinetext}>Enter New Password</Text>
            </View>
            <View style={{marginTop: 30, marginBottom: 10}}>
              <CustomTextInput
                label={'New Password'}
                width={'90%'}
                placeholder="New Password"
                onChangeText={text => setPassword(text)}
                value={password}
              />
              <CustomTextInput
                label={'Confirm Password'}
                width={'90%'}
                placeholder="Confirm Password"
                onChangeText={text => setpassword_confirmation(text)}
                value={password_confirmation}
              />
            </View>

            <View>
              <TouchableOpacity onPress={() => handleSubmit()}>
                <CustomButton text={'Change Password'} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <Modal
        animationType="fade"
        // animationType={"slide"}
        transparent={true}
        visible={isSuccess}
        onRequestClose={() => {
          setIsSuccess(false);
        }}>
        <View style={styles.modalview1}>
          <View style={styles.modalview2}>
            <TouchableOpacity onPress={() => setIsSuccess(!isSuccess)}>
              <Image
                style={styles.modalimage}
                //   source={require("../../../../assets/Auth/success.png")}
              />
            </TouchableOpacity>
            <View
              style={{
                marginTop: 20,
              }}>
              <Text style={styles.modalheading}>
                Your password has been {'\n'} changed!{' '}
              </Text>
            </View>
            <View
              style={{
                marginTop: 20,
              }}>
              <Text
                style={[
                  globalstyles.font13,
                  globalstyles.greytext,
                  {textAlign: 'center', fontWeight: '500'},
                ]}>
                Your password has been changed {'\n'} successfully, do you want
                to log in too?
              </Text>
            </View>

            <View style={styles.modalokaybtn}>
              <TouchableOpacity
                onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={styles.modalokaybtntext}>Okay</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </KeyboardAwareScrollView>
  );
}
