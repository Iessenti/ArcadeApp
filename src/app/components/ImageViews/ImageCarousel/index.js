import React, {useRef} from 'react';
import {View} from 'react-native';
import styles from './indexCss';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const ImageCarousel = props => {

  const carouselRef = useRef(null);

  const _renderItem = ({item, index}, parallaxProps) => {
    return (
      <TouchableWithoutFeedback>
        <View style={styles.item}>
          <ParallaxImage
            source={{uri:item}}
            containerStyle={styles.imageContainer}
            style={styles.image}
            parallaxFactor={0.8}
            {...parallaxProps}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <>
      <View>
        <Carousel
          sliderWidth={wp('100')}
          sliderHeight={wp('100')}
          itemWidth={wp('80')}
          enableSnap={true}
          data={props.Photos}
          renderItem={_renderItem}
          hasParallaxImages={true}
        />
      </View>
    </>
  );
};

ImageCarousel.propTypes = {
  callback: PropTypes.func,
};

ImageCarousel.defaultProps = {};
export default ImageCarousel;
