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
    fontSize: FontSize.Text14,
    fontFamily: 'Montserrat-Regular',
  },
  address: {
    color: Color.textColor.secondary,
    fontSize: FontSize.Text12,
    fontFamily: 'Montserrat-Regular',
    marginBottom: hp('2'),
    marginTop: hp('1'),
  },
  cardNumber: {
    marginStart: wp('2'),
    color: Color.textColor.primary,
    fontFamily: 'Montserrat-Regular',
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
