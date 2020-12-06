import {StyleSheet} from 'react-native';
import {Color, FontSize} from '@constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {},
  logoutIcon: {
    marginEnd: wp('2'),
    fontSize: wp('5'),
    color: Color.textColor.primary,
  },
  logoutContainer: {
    position: 'absolute',
    marginStart: wp('8'),
    bottom: hp('2'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemContainer: {
    marginTop: hp('1'),
    marginStart: wp('2'),
    marginEnd: wp('2'),
    marginBottom: hp('0'),
  },
  menuBlueContainer: {
    backgroundColor: Color.light.blue,
    borderRadius: wp('5'),
    flex: 1,
    alignSelf: 'center',
    marginBottom: hp('3'),
    width: '90%',
  },
});
