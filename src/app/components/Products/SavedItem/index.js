import React from 'react';
import {View} from 'react-native';
import styles from './indexCss';
import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {MRegularTextView, MSemiBoldTextView} from '@components/TextComponents';
import {RectImageView, RoundedButton} from '@components';

const SavedItem = props => {
  const {image, title, onPress, price, addToCart} = props;
  return (
    <>
      <View key="container" style={styles.container}>
        <View key="imgContainer" style={styles.imgContainer}>
          <RectImageView
            key="image"
            image={image}
            containerStyle={{}}
            style={styles.image}
            onPress={onPress}
          />
        </View>
        <View key="txtContainer" style={styles.txtContainer}>
          <MRegularTextView key="title" style={styles.title}>
            {title}
          </MRegularTextView>
          <MSemiBoldTextView key="price" style={styles.price}>
            {price}
          </MSemiBoldTextView>
{/*          <View style={styles.btnContainer}>
            <RoundedButton
              type="primary"
              width={wp('40')}
              height={hp('4')}
              onPress={addToCart}>
              В корзину
            </RoundedButton>
          </View>*/}
        </View>
      </View>
    </>
  );
};

SavedItem.propTypes = {};

SavedItem.defaultProps = {};
export default SavedItem;
