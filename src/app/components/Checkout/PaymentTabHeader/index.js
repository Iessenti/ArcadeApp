/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import styles from './indexCss';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';
import {Icon} from 'native-base';
import {MSemiBoldTextView} from '@components/TextComponents';

const PaymentTabHeader = props => {
  //active - shipping/payment/order
  const {active, onTabChange} = props;

  return (
    <>
      <View style={styles.container}>
        <View
          key="Shipping"
          style={
            active == 'shipping'
              ? styles.activeItemContainer
              : styles.inActiveItemContainer
          }>
          {active == 'shipping' ? (
            <View style={styles.activeTxtContainer}>
              <Icon
                name="local-shipping"
                type="MaterialIcons"
                style={styles.activeIcon}
              />
              <MSemiBoldTextView style={styles.activeTxt}>
                Shipping
              </MSemiBoldTextView>
            </View>
          ) : (
            <View>
              <Icon
                name="local-shipping"
                type="MaterialIcons"
                style={styles.inactiveIcon}
                onPress={() => {
                  onTabChange('shipping');
                }}
              />
            </View>
          )}
        </View>
        <View
          key="payment"
          style={
            active == 'payment'
              ? styles.activeItemContainer
              : styles.inActiveItemContainer
          }>
          {active == 'payment' ? (
            <View style={styles.activeTxtContainer}>
              <Icon
                name="payment"
                type="MaterialIcons"
                style={styles.activeIcon}
              />
              <MSemiBoldTextView style={styles.activeTxt}>
               Payment
              </MSemiBoldTextView>
            </View>
          ) : (
            <View>
              <Icon
                name="payment"
                type="MaterialIcons"
                style={styles.inactiveIcon}
                onPress={() => {
                  onTabChange('payment');
                }}
              />
            </View>
          )}
        </View>
        <View
          key="order"
          style={
            active == 'order'
              ? styles.activeItemContainer
              : styles.inActiveItemContainer
          }>
          {active == 'order' ? (
            <View style={styles.activeTxtContainer}>
              <Icon
                name="check-circle"
                type="Feather"
                style={styles.activeIcon}
              />
              <MSemiBoldTextView style={styles.activeTxt}>
                Order
              </MSemiBoldTextView>
            </View>
          ) : (
            <View>
              <Icon
                name="check-circle"
                type="Feather"
                style={styles.inactiveIcon}
                onPress={() => {
                  onTabChange('order');
                }}
              />
            </View>
          )}
        </View>
      </View>
    </>
  );
};

PaymentTabHeader.propTypes = {
  active: PropTypes.string,
  onTabChange: PropTypes.func,
};

PaymentTabHeader.defaultProps = {
  active: 'shipping',
};
export default PaymentTabHeader;
