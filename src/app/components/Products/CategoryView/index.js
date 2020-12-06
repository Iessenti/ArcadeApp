import React from 'react';
import {View, Image} from 'react-native';
import styles from './indexCss';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';
import {MSemiBoldTextView} from '../../TextComponents';
import {featured_2} from '@images';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CategoryView = props => {
  const {text, image, onPress} = props;

  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View style={{...styles.container}}>
          <MSemiBoldTextView style={styles.text}>{text}</MSemiBoldTextView>
          <View style={styles.textContainer}>
            <Image source={image} style={styles.image} />
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

CategoryView.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};

CategoryView.defaultProps = {
  text: 'Clothing',
  image: featured_2,
};
export default CategoryView;
