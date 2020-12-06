import {StyleSheet} from 'react-native';
import {Color, FontSize} from '@constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  imgContainer: {
    width: wp('80'),
    alignSelf: 'center',
    height: hp('40'),
    backgroundColor: Color.white,
    borderRadius: wp('5'),
  },
  img: {width: wp('80'), height: hp('25'), borderRadius: wp('5')},
  closeIcon: {
    color: Color.textColor.primary,
    alignSelf: 'flex-end',
    position: 'absolute',
    right: wp('5'),
    top: wp('3'),
  },
  btnContainer: {alignItems: 'center', marginTop: hp('-2')},
  text: {
    color: Color.textColor.secondary,
    fontFamily: 'Montserrat-Regular',
    marginStart: wp('10'),
    marginEnd: wp('10'),
    marginTop: hp('3'),
    textAlign: 'center',
  },
});
