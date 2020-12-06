import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Color} from '@constants';

export default {
  primary: {
    borderRadius: 25,
    backgroundColor: Color.fushia,
    backgroundDarker: Color.fushia,
    backgroundPlaceholder: Color.fushia,
    textColor: Color.white,
    backgroundProgress: Color.fushia,
    raiseLevel: 1,
  },
  secondary: {
    borderRadius: 25,
    backgroundColor: Color.white,
    backgroundDarker: Color.white,
    backgroundPlaceholder: Color.white,
    textColor: Color.darknavy,
    backgroundProgress: Color.white,
    raiseLevel: 1,
  },
  colorButton: {
    borderRadius: 25,
    backgroundColor: Color.white,
    backgroundDarker: Color.white,
    backgroundPlaceholder: Color.white,
    textColor: Color.darknavy,
    backgroundProgress: Color.white,
    raiseLevel: 1,
  },
  disabledGray: {
    borderRadius: 25,
    backgroundColor: Color.disabledGray,
    backgroundDarker: Color.disabledGray,
    backgroundPlaceholder: Color.disabledGray,
    textColor: Color.white,
    backgroundProgress: Color.disabledGray,
    raiseLevel: 0,
  },
  imgIcon: {
    borderRadius: 25,
    backgroundColor: Color.fushia,
    backgroundDarker: Color.fushia,
    backgroundPlaceholder: Color.fushia,
    textColor: Color.white,
    backgroundProgress: Color.fushia,
    raiseLevel: 1,
  },
  textStyle: {
    secondary: {
      color: Color.darknavy,
    },
    primary: {
      color: Color.white,
    },
    disabledGray: {
      color: Color.white,
    },
    imgIcon: {
      color: Color.white,
    },
  },
};
