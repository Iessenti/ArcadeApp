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
    backgroundColor: Color.purpleplum,
    borderRadius: wp('5'),
    width: wp('80'),
    height: hp('10'),
    alignSelf: 'center',
    margin: wp('5'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {marginStart: wp('5'), color: Color.white},
});
