import {StyleSheet} from 'react-native';
import {Color, FontSize} from '@constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  thumbnail: {
    height: wp('40'),
    width: wp('40'),
    borderRadius: wp('5'),
  },
  textContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: wp('40'),
    width: wp('40'),
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mask: {
    position: 'absolute',
    height: wp('40'),
    left: 0,
    width: wp('40'),
    borderRadius: wp('5'),
    opacity: 0.5,
    backgroundColor: Color.black,
  },
});
