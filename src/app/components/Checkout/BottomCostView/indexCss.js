import {StyleSheet} from 'react-native';
import {Color, FontSize} from '@constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    width: wp('100'),
    backgroundColor: Color.darknavy,
    borderTopLeftRadius: wp('5'),
borderTopRightRadius: wp('5'),
  },
  txtContainer: {
    marginTop: hp('2'),
    marginStart: wp('5'),
    marginEnd: wp('5'),
  },
  subTxtContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  totalTxt: {
    color: Color.white,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: FontSize.Text16,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp('2'),
    marginBottom: hp('2'),
  },
});
