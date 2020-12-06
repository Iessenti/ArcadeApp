/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './indexCss';
import PropTypes from 'prop-types';
import {Color} from '@constants';
import {useNavigation} from '@react-navigation/native';
import {MRegularTextView} from '@components/TextComponents';

const HeightWeightInputBox = props => {
  const {text, onChangeText, value} = props;
  return (
    <>
      <View style={styles.container}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <MRegularTextView style={{color: Color.textColor.secondary}}>
            {text}
          </MRegularTextView>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={text => onChangeText(text)}
              value={value}
            />
          </View>
        </View>
      </View>
    </>
  );
};

HeightWeightInputBox.propTypes = {
  text: PropTypes.string,
  onChangeText: PropTypes.func,
  value: PropTypes.string,
};

HeightWeightInputBox.defaultProps = {
  value: '151',
};
export default HeightWeightInputBox;
