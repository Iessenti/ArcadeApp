import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Color} from '@constants';

export default {
  filter: {
    borderRadius: 10,
    backgroundColor: Color.darknavy,
    backgroundDarker: Color.darknavy,
    backgroundPlaceholder: Color.darknavy,
    textColor: Color.white,
    backgroundProgress: Color.darknavy,
    raiseLevel: 1,
  },
  sort: {
    borderRadius: 10,
    backgroundColor: Color.white,
    backgroundDarker: Color.white,
    backgroundPlaceholder: Color.white,
    textColor: Color.darknavy,
    backgroundProgress: Color.white,
    raiseLevel: 1,
  },
  general: {
    borderRadius: 10,
    backgroundColor: Color.darknavy,
    backgroundDarker: Color.darknavy,
    backgroundPlaceholder: Color.darknavy,
    textColor: Color.white,
    backgroundProgress: Color.darknavy,
    raiseLevel: 0,
  },
  tags: {
    borderRadius: 10,
    backgroundColor: Color.light.blue,
    backgroundDarker: Color.light.blue,
    backgroundPlaceholder: Color.light.blue,
    textColor: Color.white,
    borderWidth: 1,
    borderColor: '#eff2fb',
    backgroundProgress: Color.light.blue,
    raiseLevel: 1,
  },
  selectedTags: {
    borderRadius: 10,
    backgroundColor: Color.purpleplum,
    backgroundDarker: Color.purpleplum,
    backgroundPlaceholder: Color.purpleplum,
    textColor: Color.white,
    backgroundProgress: Color.purpleplum,
    raiseLevel: 1,
  },
  textStyle: {
    filter: {
      color: Color.white,
    },
    sort: {
      color: Color.textColor.primary,
    },
    general: {
      color: Color.white,
    },
    tags: {
      color: Color.textColor.secondary,
    },
    selectedTags: {
      color: Color.white,
    },
  },
};
