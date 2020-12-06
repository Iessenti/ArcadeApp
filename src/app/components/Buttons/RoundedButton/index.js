/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import AwesomeButton from 'react-native-really-awesome-button';
import {Color} from '@constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './indexCss';
/**
 *
 * @param {type,width,height,textSize,containerStyle} props
 */

const RoundedButton = props => {
  const {
    type,
    width,
    height,
    textSize,
    containerStyle,
    text,
    color,
    style,
    SvgImage,
    textStyle,
    onPress
  } = props;
  const sizeObj = {
    width: width ? width : wp('40'),
    height: height ? height : hp('5'),
    textSize: textSize ? textSize : hp('3'),
  };
  if (type == 'colorButton') {
    return (
      <AwesomeButton
        {...styles[type]}
        {...sizeObj}
        {...props}
        {...style}
        style={containerStyle}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Text
            style={{
              position: 'relative',
              fontSize: hp('1.7'),
              fontFamily: 'Montserrat-SemiBold',
              alignSelf: 'flex-start',
              ...styles.textStyle[type],
              ...textStyle,
            }}>
            {props.children}
          </Text>
          <View
            style={{
              height: wp('4'),
              width: wp('4'),
              borderRadius: wp('4'),
              backgroundColor: color,
              marginEnd: wp('0'),
            }}
          />
        </View>
      </AwesomeButton>
    );
  } else if (SvgImage) {
    return (
      <AwesomeButton
        {...styles[type]}
        {...sizeObj}
        {...props}
        {...style}
        style={containerStyle}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <View style={{flex: 1, alignItems: 'center', marginEnd: wp('0')}}>
            <SvgImage height={hp('2.5')} width={hp('2.5')} />
          </View>
          <Text
            style={{
              position: 'absolute',
              fontSize: hp('2'),
              fontFamily: 'Montserrat-SemiBold',
              alignSelf: 'center',
              ...styles.textStyle[type],
              ...textStyle,
            }}>
            {props.children}
          </Text>
        </View>
      </AwesomeButton>
    );
  } else {
    return (
      <AwesomeButton
        {...styles[type]}
        {...sizeObj}
        {...props}
        style={containerStyle}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <Text
            style={{
              position: 'absolute',
              fontSize: hp('2'),
              fontFamily: 'Montserrat-SemiBold',
              alignSelf: 'center',
              ...styles.textStyle[type],
              ...textStyle,
            }}>
            {props.children}
          </Text>
        </View>
      </AwesomeButton>
    );
  }
};

RoundedButton.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  textSize: PropTypes.number,
  onPress: PropTypes.func
};

RoundedButton.defaultProps = {
  type: 'primaryOrange',
  disabled: false,
  width: wp('40'),
  height: hp('5'),
  textSize: hp('1.5'),
  color: Color.sunnyday,
};

export default RoundedButton;
