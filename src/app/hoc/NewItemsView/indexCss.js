import {StyleSheet} from 'react-native';
import {Color, FontSize} from '@constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: wp('80'),
    alignSelf: 'center',
    backgroundColor: Color.white,
    borderRadius: wp('5'),
    marginBottom: hp('1'),
  },
  counterContainer: {flex: 2, backgroundColor: 'transparent'},
  txtContainer: {marginStart: wp('5')},
  mainTxt: {
    fontSize: FontSize.Text16,
  },
  imgContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  image: {
    width: wp('20'),
    height: hp(10),
    marginTop: wp('5'),
    alignSelf: 'center',
  },
  btnContainer: {
    marginStart: wp('5'),
    marginEnd: wp('5'),
    marginTop: hp('2'),
    marginBottom: hp('1'),
  },
});
