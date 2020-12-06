import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Color} from '@constants';
import {FontSize} from '@constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: wp('80'),
    height: hp('6'),
    backgroundColor: Color.light.blue,
    color: Color.textColor.primary,
    fontSize: FontSize.Text14,
    borderColor: Color.inputTextBorder,
    borderRadius: wp('10'),
    alignSelf: 'center',
    borderWidth: 1,
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
