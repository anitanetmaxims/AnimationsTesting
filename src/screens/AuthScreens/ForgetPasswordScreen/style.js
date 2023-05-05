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
  subtextstyle: {
    fontSize: FONTSIZES.font16,
    marginTop: 10,
    color: COLORS.white,
    textAlign: 'center',
    width: wp('90%'),
  },
});
