import React from 'react';
import {View} from 'react-native';
import styles from './indexCss';
import PropTypes from 'prop-types';
import {Color} from '@constants';
import {useNavigation} from '@react-navigation/native';
import {Thumbnail} from 'native-base';
import {featured_1} from '@images';
import {MRegularTextView} from '@components/TextComponents';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ClothesCollectionView = props => {
  const {onPress, text, image} = props;
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View>
          <View>
            <Thumbnail
              key="thumbnail"
              square
              large
              source={image}
              style={styles.thumbnail}
            />
            <View key="mask" style={styles.mask} />

            <View key="textContainer" style={styles.textContainer}>
              <MRegularTextView style={{color: Color.white}}>
                {text}
              </MRegularTextView>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

ClothesCollectionView.propTypes = {
  text: PropTypes.string,
  image: PropTypes.number,
  onPress: PropTypes.func,
};

ClothesCollectionView.defaultProps = {
  text: 'Jeans',
  image: featured_1,
};
export default ClothesCollectionView;
