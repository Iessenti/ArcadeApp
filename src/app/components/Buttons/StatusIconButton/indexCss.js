import {StyleSheet} from 'react-native';
import {Color, FontSize} from '@constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    width: wp('10'),
    height: wp('15'),
    borderRadius: wp('3'),
    justifyContent: 'center',
    margin: wp('3'),
    alignItems: 'center',
  },
  doneIcon: {
    fontSize: hp('2'),
    color: Color.green,
  },
  doneContainer: {
    position: 'absolute',
    top: wp('2'),
    left: wp('2'),
    backgroundColor: Color.white,
    borderRadius: wp('10'),
  },
});
