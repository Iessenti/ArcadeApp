import {StyleSheet} from 'react-native';
import {Color} from '@constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    width: wp('80'),
    borderRadius: wp('5'),
    backgroundColor: Color.light.blue,
    alignSelf: 'center',
  },
  header: {
    margin: wp('5'),
    flexDirection: 'row',
  },
  icon: {fontSize: wp('5'), color: Color.textColor.primary},
  colorView: {
    height: wp('4'),
    width: wp('4'),
    borderRadius: wp('4'),
    marginEnd: wp('0'),
  },
  pickerContainer: {flex: 1, alignItems: 'center'},
  picker: {width: wp('50'), height: hp('30')},
});
