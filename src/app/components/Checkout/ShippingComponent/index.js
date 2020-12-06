/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {Icon} from 'native-base';
import styles from './indexCss';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';
import {MRegularTextView, MSemiBoldTextView} from '@components/TextComponents';

const ShippingComponent = props => {
  const {address, editCallback} = props;
  return (
    <>
      <View style={styles.container}>
        <View style={{flex: 90}}>
          <MSemiBoldTextView style={styles.addrLabel}>
            Shipping method
          </MSemiBoldTextView>
          <MRegularTextView style={styles.address}>{address}</MRegularTextView>
        </View>
        <View style={styles.iconContainer}>
          <Icon
            name="chevron-down"
            type="Entypo"
            onPress={editCallback}
            style={styles.icon}
          />
        </View>
      </View>
    </>
  );
};

ShippingComponent.propTypes = {
  address: PropTypes.string,
  editCallback: PropTypes.func,
};

ShippingComponent.defaultProps = {
  address:
    'NY United States, 300 Post Street, 2nd Main road, United States of America 198763',
};
export default ShippingComponent;
