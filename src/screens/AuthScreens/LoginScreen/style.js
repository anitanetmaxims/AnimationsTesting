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
    fontSize: FONTSIZES.font30,
    color: COLORS.white,
    fontWeight: '600',
  },
  subtextstyle: {
    fontSize: FONTSIZES.font16,
    marginTop: 10,
    color: COLORS.white,
  },

  forgetviewstyle: {
    alignItems: 'flex-end',
    marginTop: 10,
    marginBottom: 20,
  },
  forgettextstyle: {
    color: '#FFFFFF',
    textDecorationLine: 'underline',
  },
});
