import {StyleSheet} from 'react-native';
import {Color} from '@constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {flex: 1, flexDirection: 'row', justifyContent: 'center'},
  thumbnail: {
    backgroundColor: Color.light.blue,
    borderColor: Color.white,
    borderWidth: wp('0.2'),
    height: wp('20'),
    width: wp('20'),
  },
  plusIconContainer: {
    backgroundColor: Color.white,
    borderRadius: wp('5'),
    elevation: 2,
    zIndex: 5,
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: wp('5'),
    height: wp('5'),
  },
  plusIcon: {
    color: Color.darknavy,
    fontSize: wp('5'),
  },
});
