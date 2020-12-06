import {StyleSheet} from 'react-native';
import {Color} from '@constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Color.white,
    borderRadius: wp('3'),
    marginStart: wp('5'),
    marginEnd: wp('5'),
    padding: wp('5'),
    height: hp('8'),
  },
  count: {flex: 1, marginStart: wp('5'), alignItems: 'flex-end'},
});
