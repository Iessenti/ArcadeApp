import {StyleSheet} from 'react-native';
import {Color, FontSize} from '@constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  image: {width: wp('25'), height: wp('40'), borderRadius: wp('8')},
  title: {
    fontSize: FontSize.Text12,
    width: wp('25'),
    textAlign: 'center',
    color: Color.textColor.secondary,
  },
});
