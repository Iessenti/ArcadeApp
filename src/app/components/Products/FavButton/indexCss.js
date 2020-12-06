import {StyleSheet} from 'react-native';
import {Color} from '@constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    width: wp('12'),
    height: wp('12'),
    borderRadius: wp('3'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    borderRadius: wp('10'),
    marginTop: hp('0.5'),
    fontSize: wp('7'),
  },
});
