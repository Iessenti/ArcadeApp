import {StyleSheet} from 'react-native';
import {Color, FontSize} from '@constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    width: wp('70'),
    backgroundColor: Color.white,
    borderRadius: wp('5'),
    padding: wp('3'),
    marginTop: hp('1'),
    marginBottom: hp('1'),
    alignSelf: 'center',
    flexDirection: 'row',
  },
  addrLabel: {
    fontSize: FontSize.Text18,
    fontFamily: 'Montserrat-SemiBold',
    color: Color.textColor.primary,
  },
  address: {
    color: Color.textColor.secondary,
    fontSize: FontSize.Text16,
    fontFamily: 'Montserrat-Regular',
    marginBottom: hp('2'),
    marginTop: hp('1'),
  },
  iconContainer: {
    width: wp('8'),
    height: wp('12'),
    borderRadius: wp('2'),
    marginEnd: wp('2'),
    backgroundColor: Color.light.purple,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: hp('2'),
    alignSelf: 'center',
    color: Color.purpleplum,
  },
});
