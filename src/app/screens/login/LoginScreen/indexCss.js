import {StyleSheet} from 'react-native';
import {Color, FontSize} from '@constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: hp("5"),
    paddingBottom: hp("2"),
    borderBottomEndRadius: wp("5"),
    borderBottomStartRadius: wp("5"),
  },
  headerIconContainer: { flexDirection: "row", alignItems: "center", flex: 1 },
  headerIcon: { marginStart: wp("5"), color: Color.textColor.primary },
  container: {flex: 1, backgroundColor: Color.bg},
  heading: {
    fontSize: FontSize.Text20,
    color: Color.textColor.primary,
    fontFamily: 'Montserrat-SemiBold',
  },
  headingContainer: {alignItems: 'center'},
  imgContainer: {alignSelf: 'center', marginTop: hp('5')},
  profile: {
    width: hp('15'),
    height: hp('15'),
    borderRadius: hp('15'),
  },
  form: {marginTop: hp('5')},
  labelContainer: {marginStart: wp('10'), marginBottom: hp('1')},
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
    fontSize: FontSize.Text16,
    marginEnd: wp('7'),
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