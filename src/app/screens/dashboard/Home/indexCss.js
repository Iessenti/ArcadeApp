import {StyleSheet} from 'react-native';
import {Color, FontSize} from '@constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  clothsCollectionContainer: {
    marginStart: wp('2'),
    marginBottom: wp('2'),
  },
    youMayLikeView: { marginStart: wp("5"), marginBottom: hp("5") },
    recommendedView: { marginStart: wp("5") },
});
