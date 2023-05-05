import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import COLORS from '../../../utilis/theme';
import FONTSIZES from '../../../utilis/fontsize';

export const styles = StyleSheet.create({
  mainlogostyle: {
    width: 220,
    height: 40,
    resizeMode: 'stretch',
    alignSelf: 'center',
  },

  headlinetext: {
    fontSize: FONTSIZES.font18,
    color: COLORS.white,
    textAlign: 'center',
    fontWeight: '600',
  },
  modalview1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 20,
  },
  modalview2: {
    height: 400,
    width: '90%',
    backgroundColor: '#FFF',
    alignItems: 'center',
    borderRadius: 25,
  },
  modalimage: {
    height: 80,
    width: 80,
    resizeMode: 'contain',
    marginTop: 40,
  },
  modalheading: {
    color: COLORS.black,
    textAlign: 'center',
    fontWeight: '500',
    fontSize: FONTSIZES.font18,
  },
  modalsubheading: {
    textAlign: 'center',
    fontWeight: '500',
    color: COLORS.grey,
    fontSize: FONTSIZES.font13,
  },
  modalokaybtn: {
    backgroundColor: COLORS.red,
    width: wp('70%'),
    marginTop: 30,
    borderRadius: 15,
    paddingTop: 15,
    paddingBottom: 15,
    alignItems: 'center',
  },
  modalokaybtntext: {
    fontWeight: '500',
    color: COLORS.white,
    fontSize: FONTSIZES.font16,
  },
});
