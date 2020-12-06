import {StyleSheet} from 'react-native';
import {Color} from '@constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    width: wp('50'),
    height: hp('6'),
    backgroundColor: Color.white,
    borderRadius: wp('3'),
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: hp('1'),
  },
  menuIcon: {
    marginStart: wp('5'),
    fontSize: wp('5'),
    color: Color.textColor.primary,
  },
});
