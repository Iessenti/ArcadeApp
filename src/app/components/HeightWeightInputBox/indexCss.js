import {StyleSheet} from 'react-native';
import {Color} from '@constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    marginTop: hp('1'),
    marginBottom: hp('1'),
    marginStart: wp('5'),
    marginEnd: wp('5'),
    width: wp('80'),
    alignSelf: 'center',
    height: hp('8'),
    backgroundColor: Color.white,
    borderRadius: wp('5'),
    flexDirection: 'row',
  },
  inputContainer: {
    backgroundColor: Color.light.pink,
    paddingLeft: wp('7'),
    paddingRight: wp('7'),
    paddingTop: wp('0'),
    paddingBottom: wp('0'),
    borderRadius: wp('3'),
  },
  input: {
    color: Color.fushia,
    marginTop: wp('3'),
    marginBottom: wp('3'),
  },
});
