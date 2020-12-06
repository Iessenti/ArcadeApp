/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Color, FontSize} from '@constants';

import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {MRegularTextView, MSemiBoldTextView} from '@components/TextComponents';
import {Icon} from 'native-base';
import {FlatList} from 'react-native-gesture-handler';
import {CheckoutItem, DeliveryStatusList} from '@components';
import {ORDER_LIST} from '@data';

const OrderDetails = props => {
  const {} = props;
  const [productList] = useState(ORDER_LIST[0].items);
  const [order] = useState(ORDER_LIST[0]);

  const renderHeader = () => {
    return (
      <View key="header" style={styles.headerContainer}>
        <View style={styles.heacderIconContainer}>
          <Icon
            name="chevron-left"
            type="Entypo"
            style={styles.headerLeftIcon}
            onPress={() => {
              props.navigation.goBack();
            }}
          />
        </View>
        <View style={styles.headerTitle}>
          <MSemiBoldTextView>Order Details</MSemiBoldTextView>
        </View>
        <View style={styles.headerRightIconContainer} />
      </View>
    );
  };

  const renderOrderItems = data => {
    return (
      <View style={styles.orderItemContainer}>
        <CheckoutItem
          quantity={data.item.quantity}
          title={data.item.name}
          price={data.item.price}
          image={data.item.image}
          color={data.item.color}
          size={data.item.size}
          onChangeQuantity={() => {}}
          showOption={false}
          containerStyle={{width: productList.length > 1 ? wp('65') : wp('70')}}
        />
      </View>
    );
  };

  return (
    <>
      <View style={styles.container}>
        {renderHeader()}
        <View style={styles.trackOrderView}>
          <MSemiBoldTextView style={styles.trackOrderText}>
            Track Order
          </MSemiBoldTextView>
        </View>
        <View style={styles.orderItemView}>
          <View>
            <MSemiBoldTextView>Order Items</MSemiBoldTextView>
          </View>
          <View style={styles.productView}>
            <MRegularTextView style={styles.productItems}>
              2 Products
            </MRegularTextView>
          </View>
        </View>
        <View style={{marginTop: hp('3')}}>
          <FlatList
            data={productList}
            renderItem={renderOrderItems}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.blueContainer}>
          <View style={styles.orderRow}>
            <View style={styles.orderLabelView}>
              <MSemiBoldTextView>Order {order.orderId}</MSemiBoldTextView>
            </View>
            <View style={styles.orderDateView}>
              <MRegularTextView style={styles.orderDateText}>
                {order.date}
              </MRegularTextView>
            </View>
          </View>
          <View style={styles.subTotalView}>
            <View style={{flex: 1}}>
              <MRegularTextView>Subtotal</MRegularTextView>
            </View>
            <View>
              <MRegularTextView>$120</MRegularTextView>
            </View>
          </View>
          <View style={styles.shippingView}>
            <View style={{flex: 1}}>
              <MRegularTextView>Shipping</MRegularTextView>
            </View>
            <View>
              <MRegularTextView>$10</MRegularTextView>
            </View>
          </View>
          <View style={styles.totalView}>
            <View style={{flex: 1}}>
              <MSemiBoldTextView>Total</MSemiBoldTextView>
            </View>
            <View>
              <MSemiBoldTextView>$130</MSemiBoldTextView>
            </View>
          </View>
          <DeliveryStatusList
            payment="done"
            invoice="active"
            shipped="inactive"
            delivere="inactive"
          />
        </View>
      </View>
    </>
  );
};

OrderDetails.propTypes = {};

OrderDetails.defaultProps = {};

const styles = StyleSheet.create({
  container: {flex: 1},
  trackOrderView: {marginStart: wp('5'), marginTop: hp('2')},
  trackOrderText: {
    fontSize: FontSize.Text20,
    fontFamily: 'Montserrat-SemiBold',
    color: Color.textColor.primary,
  },
  orderItemView: {
    flexDirection: 'row',
    marginStart: wp('5'),
    marginTop: hp('3'),
  },
  productView: {
    flex: 1,
    alignItems: 'flex-end',
    marginEnd: wp('5'),
  },
  productItems: {
    color: Color.textColor.secondary,
    fontSize: FontSize.Text12,
  },
  blueContainer: {
    backgroundColor: Color.light.blue,
    marginStart: wp('5'),
    marginEnd: wp('5'),
    borderRadius: wp('5'),
    paddingTop: hp('2'),
    paddingBottom: hp('2'),
    marginTop: hp('3'),
  },
  orderRow: {flexDirection: 'row', marginBottom: hp('2')},
  orderLabelView: {marginStart: wp('5')},
  orderDateView: {alignItems: 'flex-end', flex: 1, marginEnd: wp('5')},
  orderDateText: {
    color: Color.textColor.secondary,
    fontFamily: 'Montserrat-Regular',
    fontSize: FontSize.Text12,
  },
  subTotalView: {
    flexDirection: 'row',
    marginTop: hp('2'),
    marginStart: wp('5'),
    marginEnd: wp('5'),
  },
  shippingView: {
    flexDirection: 'row',
    marginTop: hp('1'),
    marginStart: wp('5'),
    marginEnd: wp('5'),
  },
  totalView: {
    flexDirection: 'row',
    marginTop: hp('3'),
    marginStart: wp('5'),
    marginEnd: wp('5'),
    marginBottom: hp('5'),
  },
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
    paddingTop: hp('5'),
    paddingBottom: hp('2'),
  },
  heacderIconContainer: {flexDirection: 'row', alignItems: 'center', flex: 1},
  headerLeftIcon: {marginStart: wp('5'), color: Color.textColor.primary},
  headerTitle: {
    marginStart: wp('5'),
    alignSelf: 'center',
    flex: 1,
    alignItems: 'center',
  },
  headerRightIconContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginEnd: wp('5'),
  },
  orderItemContainer: {marginStart: wp('5')},
});

export default OrderDetails;
