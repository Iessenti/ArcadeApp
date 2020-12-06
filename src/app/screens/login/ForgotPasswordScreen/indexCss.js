import {StyleSheet} from 'react-native';
import {Color, FontSize} from '@constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {flex: 1, backgroundColor: Color.bg},
  heading: {
    fontSize: FontSize.Text20,
    color: Color.textColor.primary,
    fontFamily: 'Montserrat-SemiBold',
  },
  headingContainer: {marginTop: hp('2'), flexDirection: 'row'},
  form: {marginTop: hp('5')},
  labelContainer: {
    marginStart: wp('10'),
    marginBottom: hp('1'),
    marginTop: hp('1'),
  },
  label: {
    fontSize: FontSize.Text14,
    color: Color.textColor.secondary,
    fontFamily: 'Montserrat-Regular',
  },
  loginBtn: {
    alignSelf: 'center',
    marginTop: hp('5'),
    marginBottom: hp('2'),
  },
});
