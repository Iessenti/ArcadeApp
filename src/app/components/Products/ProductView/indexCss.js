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
  bgFav: {
    width: wp('10'),
    height: wp('10'),
    borderRadius: wp('10'),
    position: 'absolute',
    backgroundColor: Color.white,
    bottom: hp('1'),
    left: hp('1'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  favIcon: {borderRadius: wp('10'), marginTop: hp('0.5'), fontSize: wp('5')},
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
});
