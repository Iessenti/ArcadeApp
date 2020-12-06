import {StyleSheet} from 'react-native';
import {Color, FontSize} from '@constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {flex: 1},
  header: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: hp('5'),
    paddingBottom: hp('2'),
    borderBottomEndRadius: wp('5'),
    borderBottomStartRadius: wp('5'),
  },
  headerIconContainer: {flexDirection: 'row', alignItems: 'center', flex: 1},
  headerIcon: {marginStart: wp('5'), color: Color.textColor.primary},
  headerIconDown: {marginStart: wp('1'), color: Color.textColor.primary},
  otherIconView: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    marginEnd: wp('5'),
  },
  productContainer: {
    flexDirection: 'row',
    width: wp('50'),
  },
  clothingText: {
    alignSelf: 'center',
    fontSize: FontSize.Text24,
    fontFamily: 'Montserrat-SemiBold',
    marginTop: hp('3'),
    color: Color.textColor.primary,
  },
  sortFilterView: {
    marginTop: hp('2'),
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  flatlistContainer: {marginTop: hp('1'), marginBottom: hp('38')},
});
