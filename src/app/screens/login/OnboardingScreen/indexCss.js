import {StyleSheet} from 'react-native';
import {Color, FontSize} from '@constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {},
  scrollView: {
    backgroundColor: Color.bg,
    flex: 1,
  },
  btn: {
    marginTop: hp('2'),
    position: 'absolute',
    bottom: hp('10'),
    alignSelf: 'center',
  },
});
