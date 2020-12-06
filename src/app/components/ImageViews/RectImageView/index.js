import React from 'react';
import {View} from 'react-native';
import {Thumbnail} from 'native-base';
import styles from './indexCss';
import {useNavigation} from '@react-navigation/native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const RectImageView = props => {
  const {onPress, image} = props;
  return (
    <>
      <View style={{...styles.container, ...props.containerStyle}}>
        <TouchableWithoutFeedback onPress={onPress}>
          <Thumbnail
            source={image}
            large
            square
            style={{...styles.thumbnail, ...props.style}}
          />
        </TouchableWithoutFeedback>
      </View>
    </>
  );
};

RectImageView.propTypes = {};

RectImageView.defaultProps = {};
export default RectImageView;
