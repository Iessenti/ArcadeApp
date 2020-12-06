import {StyleSheet} from 'react-native';
import {Color, FontSize} from '@constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: hp('1'),
  },
  textContainer: {
    marginTop: hp('2'),
    flex: 1,
    alignItems: 'center',
    marginBottom: hp('2'),
  },
  title: {
    fontSize: FontSize.Text24,
    fontFamily: 'Montserrat-SemiBold',
    color: Color.textColor.primary,
  },
  description: {
    fontSize: FontSize.Text14,
    marginBottom: hp('1'),
    fontFamily: 'Montserrat-Regular',
    color: Color.textColor.primary,
  },
});
