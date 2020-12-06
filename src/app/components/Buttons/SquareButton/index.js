/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import AwesomeButton from 'react-native-really-awesome-button';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './indexCss';
import {Sort, Filter} from '@images';
/**
 *
 * @param {type,width,height,textSize,containerStyle} props
 */

const SquareButton = props => {
  const {
    type,
    width,
    height,
    textSize,
    containerStyle,
    style,
    SvgImage,
    textStyle,
    isSelected,
  } = props;
  const sizeObj = {
    width: width ? width : wp('40'),
    height: height ? height : hp('5'),
    textSize: textSize ? textSize : hp('1'),
  };

  if (type == 'sort') {
    return (
      <AwesomeButton
        {...styles[type]}
        {...sizeObj}
        {...props}
        {...style}
        style={containerStyle}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <View
            style={{flex: 1, alignItems: 'flex-start', marginStart: wp('4')}}>
            <Sort height={hp('2')} width={hp('2')} />
          </View>
          <Text
            style={{
              position: 'absolute',
              fontSize: hp('1.5'),
              fontFamily: 'Montserrat-SemiBold',
              alignSelf: 'center',
              ...styles.textStyle[type],
              ...textStyle,
            }}>
            Sort
          </Text>
        </View>
      </AwesomeButton>
    );
  }
  if (type == 'filter') {
    return (
      <AwesomeButton
        {...styles[type]}
        {...sizeObj}
        {...props}
        {...style}
        style={containerStyle}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <View
            style={{flex: 1, alignItems: 'flex-start', marginStart: wp('4')}}>
            <Filter height={hp('1.5')} width={hp('2')} />
          </View>
          <Text
            style={{
              position: 'absolute',
              fontSize: hp('1.5'),
              fontFamily: 'Montserrat-SemiBold',
              alignSelf: 'center',
              ...styles.textStyle[type],
              ...textStyle,
            }}>
            Filter
          </Text>
        </View>
      </AwesomeButton>
    );
  }
  if (type == 'general') {
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
              fontSize: hp('1.5'),
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
  if (type == 'tags') {
    let tempType = 'tags';
    if (isSelected) {
      tempType = 'selectedTags';
    }
    return (
      <AwesomeButton
        {...styles[tempType]}
        {...sizeObj}
        {...props}
        style={containerStyle}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <Text
            style={{
              position: 'absolute',
              fontSize: hp('1.5'),
              fontFamily: 'Montserrat-Regular',
              alignSelf: 'center',
              ...styles.textStyle[tempType],
              ...textStyle,
            }}>
            {props.children}
          </Text>
        </View>
      </AwesomeButton>
    );
  }
  console.log(props.children);
  if (SvgImage) {
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
              fontSize: hp('1.5'),
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
              fontSize: hp('1.5'),
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

SquareButton.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  textSize: PropTypes.number,
};

SquareButton.defaultProps = {
  type: 'general',
  disabled: false,
  width: wp('40'),
  height: hp('5'),
  textSize: hp('1.5'),
};

export default SquareButton;
