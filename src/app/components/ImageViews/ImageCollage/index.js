/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import styles from './indexCss';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';
import {Collage_Data} from '@data';
import {
  MontserratLightTextView,
  MontserratSemiBoldTextView,
} from '@components/TextComponents';
import {ob1_1, ob1_2, ob1_3} from '@images';

const ImageCollage = props => {
  //imageType : local/url
  const {image1, image2, image3, title, description, imageType} = props;
  useEffect(() => {}, []);
  if (imageType == 'url') {
    return (
      <>
        <View>
          <View key="txtContainer" style={styles.txtContainer}>
            <MontserratSemiBoldTextView>{title}</MontserratSemiBoldTextView>
            <MontserratLightTextView
              key="description"
              style={styles.description}>
              {description}
            </MontserratLightTextView>
          </View>
          <View key="imgContainer" style={styles.imgContainer}>
            <View key="leftContainer" style={styles.leftContainer}>
              <Image
                key="image1"
                source={{uri: image1}}
                style={styles.image1}
              />
            </View>
            <View key="rightContainer" style={styles.rightContainer}>
              <View
                key="secondImageContainer"
                style={styles.secondImageContainer}>
                <Image
                  key="image2"
                  source={{uri: image2}}
                  resizeMode="cover"
                  style={styles.image2}
                />
              </View>
              <View
                key="thirdImageContainer"
                style={styles.thirdImageContainer}>
                <Image
                  key="image3"
                  source={{uri: image3}}
                  style={styles.image3}
                />
              </View>
            </View>
          </View>
        </View>
      </>
    );
  } else {
    return (
      <>
        <View style={{flex: 1}}>
          <View key="txtContainer" style={styles.txtContainer}>
            <MontserratSemiBoldTextView>{title}</MontserratSemiBoldTextView>
            <MontserratLightTextView
              key="description"
              style={styles.description}>
              {description}
            </MontserratLightTextView>
          </View>
          <View key="imgContainer" style={styles.imgContainer}>
            <View key="leftContainer" style={styles.leftContainer}>
              <Image key="image1" source={image1} style={styles.image1} />
            </View>
            <View key="rightContainer" style={styles.rightContainer}>
              <View
                key="secondImageContainer"
                style={styles.secondImageContainer}>
                <Image
                  key="image2"
                  source={image2}
                  resizeMode="cover"
                  style={styles.image2}
                />
              </View>
              <View
                key="thirdImageContainer"
                style={styles.thirdImageContainer}>
                <Image key="image3" source={image3} style={styles.image3} />
              </View>
            </View>
          </View>
        </View>
      </>
    );
  }
};

ImageCollage.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageType: PropTypes.string.isRequired,
};

ImageCollage.defaultProps = {
  image1: ob1_1,
  image2: ob1_2,
  image3: ob1_3,
  title: Collage_Data[0].title,
  description: Collage_Data[0].description,
  imageType: 'local',
};
export default ImageCollage;
