import {StyleSheet} from 'react-native';
import {Color} from '@constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {flex: 1, flexDirection: 'row', justifyContent: 'center'},
  thumbnail: {
    backgroundColor: Color.light.blue,
    width: wp('80'),
    height: wp('100'),
    borderRadius: wp('5'),
  },
});
