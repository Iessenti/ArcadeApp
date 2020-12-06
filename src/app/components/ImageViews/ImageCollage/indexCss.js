import {StyleSheet} from 'react-native';
import {COLORS} from '@constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {FontSize} from '@constants';

export default StyleSheet.create({
  txtContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('5'),
  },
  description: {
    fontSize: FontSize.Text12,
    marginStart: wp('10'),
    marginEnd: wp('10'),
    marginTop: hp('3'),
    textAlign: 'center',
  },
  imgContainer: {
    flex: 1,
    height: hp('50'),
    marginStart: wp('4'),
    marginEnd: wp('4'),
    marginTop: hp('5'),
    flexDirection: 'row',
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'column',
  },
  image1: {
    width: wp('40'),
    height: hp('40'),
    alignSelf: 'center',
    borderRadius: wp('5'),
  },
  secondImageContainer: {
    flex: 1,
    marginTop: hp('0'),
    alignItems: 'center',
  },
  image2: {
    width: wp('40'),
    height: hp('27'),
    borderBottomLeftRadius: wp('5'),
    borderTopLeftRadius: wp('5'),
  },
  thirdImageContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  image3: {
    borderTopRightRadius: wp('5'),
    borderBottomLeftRadius: wp('5'),
    marginTop: hp('2'),
    width: wp('40'),
    height: wp('40'),
  },
});
