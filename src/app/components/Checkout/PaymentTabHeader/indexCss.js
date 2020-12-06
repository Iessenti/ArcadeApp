import {StyleSheet} from 'react-native';
import {Color} from '@constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    width: wp('80'),
    height: wp('15'),
    backgroundColor: Color.white,
    borderRadius: wp('15'),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingStart: wp('2'),
  },
  activeItemContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('40'),
    height: wp('12'),
    marginEnd: wp('2'),
    marginStart: wp('0'),
    borderRadius: wp('15'),
    backgroundColor: Color.light.pink,
  },
  inActiveItemContainer: {flex: 1, alignItems: 'center'},
  activeTxtContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  inactiveIcon: {fontSize: wp('5'), color: Color.textColor.secondary},
  activeIcon: {
    fontSize: wp('5'),
    color: Color.fushia,
  },
  activeTxt: {
    color: Color.fushia,
    fontFamily: 'Montserrat-SemiBold',
    marginStart: wp('2'),
  },
});
