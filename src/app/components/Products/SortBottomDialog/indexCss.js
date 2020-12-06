import {StyleSheet} from 'react-native';
import {Color} from '@constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    width: wp('90'),
    height: hp('30'),
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  filterItem: {
    alignItems: 'center',
    borderRadius: wp('5'),
    marginStart: wp('5'),
    marginEnd: wp('5'),
    paddingTop: wp('2'),
    paddingBottom: wp('2'),
  },
  closeContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    position: 'absolute',
    top: wp('3'),
    right: wp('3'),
  },
});
