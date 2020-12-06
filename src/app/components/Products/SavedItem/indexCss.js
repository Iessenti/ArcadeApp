import {StyleSheet} from 'react-native';
import {Color, FontSize} from '@constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {marginBottom: hp('2'), width: wp('40')},
  imgContainer: {
    width: wp('40'),
    height: wp('80'),
    marginStart: wp('5'),
    marginBottom: hp('1'),
  },
  image: {width: wp('40'), height: wp('80')},
  txtContainer: {marginStart: wp('5')},
  title: {
    color: Color.textColor.secondary,
    fontSize: FontSize.Text14,
  },
  price: {
    color: Color.textColor.primary,
    fontSize: FontSize.Text16,
    marginTop: hp('0.5'),
  },
  btnContainer: {marginTop: hp('1'), marginBottom: hp('1')},
});
