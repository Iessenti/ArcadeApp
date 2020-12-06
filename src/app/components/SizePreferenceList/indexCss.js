import {StyleSheet} from 'react-native';
import {Color, FontSize} from '@constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  box: {width: wp('20'), alignItems: 'center'},
  touchableRound: {
    width: wp('15'),
    height: wp('15'),
    borderRadius: wp('15'),
    borderColor: Color.white,
    borderWidth: wp('0.2'),
  },
  text: {
    width: wp('30'),
    marginStart: wp('2'),
  },
  roundFlatlist: {justifyContent: 'space-around', marginStart: wp('0')},
  titleFlatList: {
    justifyContent: 'space-between',

    marginTop: hp('1'),
  },
  item: {
    fontSize: FontSize.Text14,
    fontFamily: 'Montserrat-SemiBold',
  },
});
