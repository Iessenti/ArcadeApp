/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';
import {Icon} from 'native-base';
import styles from './indexCss';
import PropTypes from 'prop-types';
import {Color} from '@constants';
import {useNavigation} from '@react-navigation/native';

const FavButton = props => {
  const {favToggle, isFav} = props;
  return (
    <>
    <TouchableWithoutFeedback onPress={favToggle}>
      <View
        style={{
          backgroundColor: Color.sunnyday,
          ...styles.container,
        }}>
        <Icon
          name="heart"
          type="AntDesign"
          style={{color: isFav ? Color.fushia : Color.white, ...styles.icon}}
        />
      </View>
    </TouchableWithoutFeedback>
    </>
  );
};

FavButton.propTypes = {
  favToggle: PropTypes.func,
  isFav: PropTypes.bool,
};

FavButton.defaultProps = {
  isFav: true,
};
export default FavButton;
