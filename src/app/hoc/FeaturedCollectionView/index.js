/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import styles from './indexCss';
import {useNavigation} from '@react-navigation/native';
import {RectImageView} from '@components';
import {featured_1} from '@images';
import {MSemiBoldTextView, MRegularTextView} from '@components/TextComponents';
import {RoundedButton} from '../../components';

const FeaturedCollectionView = props => {
  const {image, title, description, showBtn, onPress} = props;
  return (
    <>
      <View key="container" style={styles.container}>
        <RectImageView image={image} onPress={onPress} />
        <View key="textContainer" style={styles.textContainer}>
          <MSemiBoldTextView style={styles.title}>{title}</MSemiBoldTextView>
          <MRegularTextView style={styles.description}>
            {description}
          </MRegularTextView>
          {showBtn && (
            <RoundedButton type="primary" onPress={onPress}>
              Shop Now
            </RoundedButton>
          )}
        </View>
      </View>
    </>
  );
};

FeaturedCollectionView.propTypes = {};

FeaturedCollectionView.defaultProps = {
  image: featured_1,
  title: 'Weathered Textured',
  description: 'Under is the new outer',
  showBtn: false,
};
export default FeaturedCollectionView;
