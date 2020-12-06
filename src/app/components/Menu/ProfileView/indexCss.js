import {StyleSheet} from 'react-native';
import {Color} from '@constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {alignItems: 'center', marginBottom: hp('2')},
  image: {width: wp('20'), height: wp('20'), borderRadius: wp('10')},
  name: {marginTop: hp('1'), marginBottom: hp('0')},
});
