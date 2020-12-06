/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {Thumbnail} from 'native-base';
import styles from './indexCss';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';
import {men} from '@images';
import {MSemiBoldTextView} from '@components/TextComponents';
import {FontSize} from '@constants';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const SquareImageView = props => {
  const {image, text, isLeft, onPress, textStyle} = props;
  return (
    <>
      <View style={{...styles.container, ...props.containerStyle}}>
        <View>
          <TouchableWithoutFeedback onPress={onPress}>
            <Thumbnail
              source={image}
              large
              square
              style={{...styles.thumbnail, ...props.style}}
            />
          </TouchableWithoutFeedback>
          <View style={isLeft ? styles.leftPosition : styles.rightPosition}>
            <MSemiBoldTextView style={{fontSize: FontSize.Text24}}>
              {text}
            </MSemiBoldTextView>
          </View>
        </View>
      </View>
    </>
  );
};

SquareImageView.propTypes = {
  image: PropTypes.number,
  text: PropTypes.string,
  isLeft: PropTypes.bool,
  onPress: PropTypes.func,
};

SquareImageView.defaultProps = {
  image: men,
};
export default SquareImageView;
