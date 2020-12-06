import {StyleSheet} from 'react-native';
import {Color} from '@constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: wp('80'),
    borderRadius: wp('5'),
    backgroundColor: Color.light.blue,
    alignSelf: 'center',
  },
  header: {
    flex: 1,
    margin: wp('5'),
    flexDirection: 'row',
  },
  icon: {fontSize: wp('5'), color: Color.textColor.primary},
});
