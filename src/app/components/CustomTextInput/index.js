import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './indexCss';
import {Color} from '@constants';
import PropTypes from 'prop-types';

const CustomTextInput = props => {
  const {inputStyle, input, value, onPress} = props;
  let bdrColor = null;
  const {isError} = props;
  if (isError) {
    bdrColor = {borderColor: Color.red};
  }
  return (
    <TextInput
      {...props}
      style={{...styles.input, ...props.style, ...bdrColor}}
      onPress={onPress}
    />
  );
};

CustomTextInput.propTypes = {
  styles: PropTypes.object,
  onTe: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onPress: PropTypes.func,
};

export default CustomTextInput;
