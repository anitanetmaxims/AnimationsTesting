import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import COLORS from '../../../utilis/theme';
import FONTSIZES from '../../../utilis/fontsize';

export const styles = StyleSheet.create({
  horizontalLine: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255 ,0.3)',
    alignSelf: 'stretch',
    marginVertical: 10,
  },

  headlinetext: {
    color: COLORS.grey,
    fontSize: 14,
  },
  subtextstyle: {
    color: COLORS.white,
    fontSize: 16,
    marginTop: 5,
  },
});
