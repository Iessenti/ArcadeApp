import {StyleSheet} from 'react-native';
import {Color} from '@constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: hp('6.5'),
    backgroundColor: Color.white,
    borderRadius: wp('3'),
    alignSelf: 'center',
    width: wp('70'),
    alignItems: 'center',
    flexDirection: 'row',
  },
  imgContainer: {
    backgroundColor: Color.light.blue,
    width: hp('5.5'),
    height: hp('5.7'),
    margin: hp('0.5'),
    borderRadius: wp('3'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: hp('5'),
    height: hp('5'),
    alignContent: 'center',
    alignSelf: 'center',
    borderRadius: wp('3'),
  },
});
