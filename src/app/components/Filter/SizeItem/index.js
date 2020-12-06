import React from 'react';
import {View} from 'react-native';
import styles from './indexCss';
import PropTypes from 'prop-types';
import {Color} from '@constants';
import {useNavigation} from '@react-navigation/native';
import {MSemiBoldTextView} from '@components/TextComponents';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SizeItem = props => {
  const {toggle, isSelected, text} = props;
  return (
    <>
      <TouchableOpacity onPress={toggle}>
        <View
          style={{
            ...styles.container,
            backgroundColor: isSelected ? Color.purpleplum : Color.white,
          }}>
          <MSemiBoldTextView
            style={{color: isSelected ? Color.white : Color.textColor.primary}}>
            {text}
          </MSemiBoldTextView>
        </View>
      </TouchableOpacity>
    </>
  );
};

SizeItem.propTypes = {
  isSelected: PropTypes.bool,
  toggle: PropTypes.func,
};

SizeItem.defaultProps = {
  isSelected: false,
  text: 'XL',
};
export default SizeItem;
