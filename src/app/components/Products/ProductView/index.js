/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Icon} from 'native-base';
import styles from './indexCss';
import PropTypes from 'prop-types';
import {Color} from '@constants';
import {useNavigation} from '@react-navigation/native';
import {RectImageView} from '@components';
import {MRegularTextView, MSemiBoldTextView} from '@components/TextComponents';
import {pd11} from '../../../../assets/images';

const ProductView = props => {
  const {image, title, onPress, favToggle, isFav, price} = props;
  const [fav, setFav] = useState('hearto')

  return (
    <>
      <View key="container" style={styles.container}>
        <View key="imgContainer" style={styles.imgContainer}>
          <RectImageView
            key="image"
            image={{uri:image}}
            containerStyle={{}}
            style={styles.image}
            onPress={onPress}
          />
{/*          <View style={styles.bgFav}>
            <Icon
            name={fav}
            type="AntDesign"
            style={{
              color: isFav ? Color.fushia : Color.darknavy,
              ...styles.favIcon,
            }}
          />
          </View>*/}
        </View>
        <View key="txtContainer" style={styles.txtContainer}>
          <MRegularTextView key="title" style={styles.title}>
            {title}
          </MRegularTextView>
          <MSemiBoldTextView key="price" style={styles.price}>
            {price}
          </MSemiBoldTextView>
        </View>
      </View>
    </>
  );
};

ProductView.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  favToggl: PropTypes.func,
  isFav: PropTypes.bool,
  price: PropTypes.string,
};

ProductView.defaultProps = {
  image: pd11,
  title: 'Denim',
  isFav: false,
  price: '$123',
};
export default ProductView;
