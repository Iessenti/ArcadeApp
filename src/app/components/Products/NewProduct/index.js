import React from 'react';
import {View, Image} from 'react-native';
import styles from './indexCss';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {MSemiBoldTextView} from '@components/TextComponents';
import {TouchableOpacity} from 'react-native-gesture-handler';

const NewProduct = props => {
  const {image, text, onPress} = props;
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View key="container" style={styles.container}>
          <View key="imgContainer" style={styles.imgContainer}>
            <Image key="img" source={image} style={styles.img} />
          </View>
          <MSemiBoldTextView style={{marginStart: wp('3')}}>
            {text}
          </MSemiBoldTextView>
        </View>
      </TouchableOpacity>
    </>
  );
};

NewProduct.propTypes = {
  text: PropTypes.string,
};

NewProduct.defaultProps = {
  text: 'Clothing',
};
export default NewProduct;
