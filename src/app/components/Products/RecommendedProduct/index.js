import React from 'react';
import {View, Image} from 'react-native';
import styles from './indexCss';
import {useNavigation} from '@react-navigation/native';
import {featured_1} from '@images';
import {MRegularTextView} from '@components/TextComponents';

const RecommendedProduct = props => {
  const {image, title} = props;
  return (
    <>
      <View>
        <Image source={image} style={styles.image} />
        <MRegularTextView style={styles.title} numberOfLines={2}>
          {title}
        </MRegularTextView>
      </View>
    </>
  );
};

RecommendedProduct.propTypes = {};

RecommendedProduct.defaultProps = {
  image: featured_1,
  title: 'Dress is the new world,who am i to tell what to do',
};
export default RecommendedProduct;
