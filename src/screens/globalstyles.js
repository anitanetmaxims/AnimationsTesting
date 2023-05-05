import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const globalstyles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp('100%'),
    height: hp('100%'),
    backgroundColor: '#191919',
    margin: 0,
    padding: 0,
  },
  maincontainer: {
    flex: 1,
    padding: 10,
    // marginHorizontal:20,
    paddingHorizontal:20
  },

  // All font sizes

  font12: {
    fontSize: 12,
  },

  font10: {
    fontSize: 10,
  },
  font13: {
    fontSize: 13,
  },
  font14: {
    fontSize: 14,
  },
  font16: {
    fontSize: 16,
  },
  font18: {
    fontSize: 18,
  },

  font20: {
    fontSize: 20,
  },
  font24: {
    fontSize: 24,
  },
  font22: {
    fontSize: 22,
  },
  font32: {
    fontSize: 32,
  },
  font35: {
    fontSize: 35,
  },
  font100: {
    fontSize: 100,
  },
});
