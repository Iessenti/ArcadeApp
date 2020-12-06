import {StyleSheet} from 'react-native';
import {Color} from '@constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    width: wp('10'),
    height: wp('13'),
    borderRadius: wp('3'),
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
