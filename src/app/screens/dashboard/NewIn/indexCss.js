import {StyleSheet} from 'react-native';
import {Color, FontSize} from '@constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    backgroundColor: Color.light.blue,
    borderRadius: wp('5'),
    paddingTop: hp('2'),
    paddingStart: wp('5'),
    marginTop: hp('2'),
    paddingEnd: wp('5'),
    paddingBottom: hp('2'),
    marginStart: wp('10'),
    marginEnd: wp('10'),
  },
  item: {marginBottom: hp('2')},
  heading: {marginStart: wp('10'), marginTop: hp('2')},
});
