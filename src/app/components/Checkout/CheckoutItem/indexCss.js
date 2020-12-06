import {StyleSheet} from 'react-native';
import {Color, FontSize} from '@constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    width: wp('80'),
    backgroundColor: Color.white,
    borderRadius: wp('5'),
    alignSelf: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: FontSize.Text18,
    fontFamily: 'Montserrat-SemiBold',
    color: Color.textColor.primary,
  },
  imgContainer: {
    flex: 25,
    backgroundColor: 'transparent',
    alignItems: 'center',
    marginBottom: hp('2'),
    marginTop: hp('2'),
    justifyContent: 'center',
    flexDirection: 'row',
  },
  img: {width: wp('13'), height: hp('11'), alignSelf: 'center'},
  midContainer: {
    flex: 60,
    backgroundColor: 'transparent',
    marginTop: hp('2'),
    marginStart: wp('2'),
  },
  productId: {
    color: Color.textColor.secondary,
    marginTop: hp('0.5'),
    fontSize: FontSize.Text12,
    marginBottom: hp('0.5'),
  },
  colorAndSizeContainer: {flex: 1, flexDirection: 'row'},
  colorContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  colorTxt: {
    position: 'relative',
    fontSize: FontSize.Text14,
    fontFamily: 'Montserrat-Regular',
    alignSelf: 'flex-start',
    color: Color.textColor.primary,
  },
  colorView: {
    height: wp('4'),
    marginStart: wp('3'),
    width: wp('4'),
    borderRadius: wp('4'),
    marginEnd: wp('0'),
  },
  sizeContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // marginStart: wp('10'),
  },
  sizeTxt: {
    position: 'relative',
    fontSize: FontSize.Text14,
    fontFamily: 'Montserrat-Regular',
    alignSelf: 'flex-start',
    color: Color.textColor.primary,
  },
  sizeTxtVal: {
    position: 'relative',
    fontSize: FontSize.Text14,
    fontFamily: 'Montserrat-SemiBold',
    alignSelf: 'flex-start',
    marginStart: wp('1'),
    color: Color.textColor.primary,
  },
  priceContainer: {flexDirection: 'row', marginBottom: hp('2')},
  plusAndMinusButtonContainer: {
    flex: 20,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  pmInnerContainer: {
    width: wp('10'),
    height: hp('8'),
    alignSelf: 'center',
    backgroundColor: Color.light.blue,
    borderRadius: wp('5'),
  },
  iconContainer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: hp('2.2'),
    alignSelf: 'center',
    color: Color.textColor.primary,
  },

});
