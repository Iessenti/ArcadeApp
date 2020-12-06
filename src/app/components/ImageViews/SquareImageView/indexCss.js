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
    justifyContent: 'center',
    marginBottom: hp('5'),
  },
  rightPosition: {position: 'absolute', top: hp('5'), right: wp('5')},
  leftPosition: {position: 'absolute', top: hp('5'), left: wp('5')},
  thumbnail: {
    backgroundColor: Color.light.blue,
    width: wp('80'),
    height: wp('80'),
    borderRadius: wp('5'),
  },
});
