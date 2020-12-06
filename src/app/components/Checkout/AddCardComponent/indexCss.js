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
    fontFamily: 'Montserrat-SemiBold',
    color: Color.textColor.primary,
  },
  address: {
    color: Color.textColor.secondary,
    fontSize: FontSize.Text12,
    fontFamily: 'Montserrat-Regular',
    marginBottom: hp('2'),
    marginTop: hp('1'),
  },
  iconContainer: {
    flex: 12,
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('7'),
    height: wp('10'),
    justifyContent: 'center',
    borderRadius: wp('3'),
    backgroundColor: Color.light.purple,
  },
  icon: {color: Color.purpleplum, fontSize: wp('5')},
});
