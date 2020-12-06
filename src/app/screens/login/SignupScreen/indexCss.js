import {StyleSheet} from 'react-native';
import {Color, FontSize} from '@constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {flex: 1, backgroundColor: Color.bg},
  heading: {
    fontSize: FontSize.Text22,
    color: Color.textColor.primary,
    fontFamily: 'Montserrat-SemiBold',
    marginTop: hp('0.2'),
  },
  headingContainer: {marginTop: hp('2'), flexDirection: 'row'},
  imgContainer: {alignSelf: 'center', marginTop: hp('2')},
  profile: {
    width: hp('13'),
    height: hp('13'),
    borderRadius: hp('15'),
  },
  form: {marginTop: hp('2')},
  labelContainer: {
    marginStart: wp('9'),
    marginBottom: hp('1'),
    marginTop: hp('1'),
  },
  label: {
    fontSize: FontSize.Text14,
    color: Color.textColor.secondary,
    fontFamily: 'Montserrat-Regular',
  },
  pwdLabelContainer: {
    marginStart: wp('10'),
    marginBottom: hp('1'),
    marginTop: hp('2'),
    flexDirection: 'row',
  },
  pwdLabel: {
    flex: 1,
    fontSize: FontSize.Text14,
    color: Color.textColor.secondary,
    fontFamily: 'Montserrat-Regular',
  },
  forgot: {
    fontSize: FontSize.Text14,
    marginEnd: wp('10'),
    color: Color.purpleplum,
    fontFamily: 'Montserrat-SemiBold',
  },
  loginBtn: {
    alignSelf: 'center',
    marginTop: hp('2'),
    marginBottom: hp('2'),
  },
  donthaveaccount: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginStart: wp('20'),
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  donthaveaccountTxt: {
    flex: 1,
    fontSize: FontSize.Text16,
    alignItems: 'flex-end',
    textAlign: 'right',
    color: Color.textColor.secondary,
    fontFamily: 'Montserrat-Regular',
  },
  signup: {
    flex: 1,
    fontSize: FontSize.Text18,
    marginEnd: wp('5'),
    marginStart: wp('2'),
    textAlign: 'center',
    justifyContent: 'flex-start',
    color: Color.textColor.primary,
    fontFamily: 'Montserrat-SemiBold',
    alignSelf: 'center',
  },
  errorContainer: {alignItems: 'center'},
  error: { marginTop: hp('2'), color: '#ff2d88', fontSize: FontSize.Text16,},
});
