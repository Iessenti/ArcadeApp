/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Color, FontSize } from "@constants";
import { useNavigation } from "@react-navigation/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Icon } from "native-base";
import { MSemiBoldTextView, GTEestiProText,MRegularTextView } from "@components/TextComponents";
import {
  PaymentTabHeader,
  AddressComponent,
  ShippingComponent,
  SortBottomDialog,
  AddCardComponent,
  CreditCardComponent,
  RoundedButton,
  CheckoutItem,
} from "@components";
import {
  TouchableWithoutFeedback,
  FlatList,
} from "react-native-gesture-handler";
import {ScrollView} from 'react-native-gesture-handler';
import { MasterCard } from "@images";
import { Product_List } from "@data";
import AsyncStorage from '@react-native-community/async-storage';
import order from '../../order'

const shippingData = [
  {
    id: 0,
    name: "Standard Delivery (+ $10)",
  },
  {
    id: 1,
    name: "Express Delivery (+ $20)",
  },
  {
    id: 2,
    name: "Scheduled Delivery (+ $30)",
  },
];

const errorMessage = props => {
  return (
    <View style={styles.errorContainer}>
      <GTEestiProText style={styles.error}>Please, enter the correct information</GTEestiProText>
    </View>
  )
}

const CheckoutScreen = ({navigation, route}) => {
  const [activeTab, setActiveTab] = useState("shipping");
  const [showShippingDialog, setShowShippingDialog] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [shippingType, setShippingType] = useState(shippingData[0].name);
  const [addressRenderList, setAddressRenderList] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState('Choose payment method')
  const [error, setError] = useState(false)
  const [total, setTotal] = useState(0)
  
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      const addressArray = JSON.parse(await AsyncStorage.getItem('addressList'));
      const addresses = addressArray.map((elem, index) => {
        return (<AddressComponent
            key={index}
            address={elem.address}
            phone={elem.phone}
            onPress={() => {
              setActiveTab("payment");
            }}
          />)

      })
      setTotal(route.params.total)
      setAddressRenderList(addresses)
    })
    return unsubscribe;
  }, [navigation, route.params]);


  const cleanCart = async () => {
    await AsyncStorage.setItem('CartItems', JSON.stringify([]))
  }

  const renderHeader = () => {
    return (
      <View key="header" style={styles.headerContainer}>
        <View style={styles.headerIconContainer}>
          <Icon
            name="chevron-left"
            type="Entypo"
            style={styles.headerIcon}
            onPress={() => {
              navigation.goBack()
            }}
          />
        </View>
      </View>
    );
  };

  const renderShippingSelection = () => {
    return (
      <View>
        <SortBottomDialog
          show={showShippingDialog}
          filterData={shippingData}
          selectedIndex={selectedIndex}
          onClickOverlay={() => {
            setShowShippingDialog(!showShippingDialog);
          }}
          onClickBtn={(index) => {
            setSelectedIndex(index);
            setShippingType(shippingData[index].name);
            setTimeout(() => {
              setShowShippingDialog(!showShippingDialog);
            }, 1000);
          }}
        />
      </View>
    );
  };

  const renderShipping = () => {
    return (
      <View style={styles.shippingContainer}>
        <View style={styles.detailsView}>
          <GTEestiProText style={styles.title}>Details</GTEestiProText>
        </View>
        <ScrollView>
        <View style={styles.blueContainer}>
{/*          <ShippingComponent
            address={shippingType}
            editCallback={() => {
              setShowShippingDialog(true);
            }}
          />*/}
          {addressRenderList}
          <View>
            <View>
              <TouchableWithoutFeedback
                style={styles.addAddressFeedback}
                onPress={() => {
                  navigation.navigate("AddAddressScreen", {
                    type: "edit",
                  });
                }}
              >
                <Icon name="add" style={styles.addIcon} />
                <MSemiBoldTextView styles={{fontSize: FontSize.Text8}}>Change the delivery address</MSemiBoldTextView>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
        </ScrollView>
        {renderShippingSelection()}
      </View>
    );
  };

  const renderPayment = () => {
    return (
      <View style={styles.paymentContainer}>
        <View style={styles.paymentView}>
          <GTEestiProText style={styles.title}>Payment</GTEestiProText>
        </View>
        <View style={styles.blueContainer}>
            <TouchableWithoutFeedback onPress={() => {
                setPaymentMethod('Pay by card now')
                setActiveTab("order")
              }}>
              <View style={styles.containerPaymentMethod}>
                <View style={{flex: 100, alignSelf: 'center'}}>
                  <MSemiBoldTextView style={styles.paymentMethodLabel}>
                    Pay by card now
                  </MSemiBoldTextView>
                </View>              
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => {
                setPaymentMethod('Payment upon receipt')
                setActiveTab("order")
              }}>
              <View style={styles.containerPaymentMethod}>
                <View style={{flex: 100, alignSelf: 'center'}}>
                  <MSemiBoldTextView style={styles.paymentMethodLabel}>
                    Payment upon receipt
                  </MSemiBoldTextView>
                </View>
              </View>
            </TouchableWithoutFeedback>
        </View>
        <View style={styles.priceContainer}>
        </View>
      </View>
    );
  };

  const renderOrderItems = (data) => {
    return (
      <View style={{ marginStart: wp("5") }}>
        <CheckoutItem
          title={data.item.title}
          productId={data.item.id}
          price={data.item.price}
          image={data.item.mainImage}
          size={data.item.size}
          onChangeQuantity={() => {}}
          showOption={false}
          containerStyle={{ width: data.length > 1 ? wp("65") : wp("70") }}
          
        />
      </View>
    );
  };

  const renderOrder = () => {
    return (
      <View style={styles.paymentContainer}>
        <View style={styles.orderInfo}>
          <GTEestiProText style={styles.title}>Information about order</GTEestiProText>
        </View>
        <View style={styles.blueContainer}>
          <FlatList
            data={route.params.order}
            renderItem={renderOrderItems}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />

          {addressRenderList}

            <View style={styles.containerPaymentMethod}>
              <View style={{flex: 100, alignSelf: 'center'}}>
                <MSemiBoldTextView style={styles.paymentMethodLabel}>
                  { paymentMethod }
                </MSemiBoldTextView>
              </View>
            </View>


        </View>
        <View style={styles.totalTxtContainerForOrder}>
                  {error}
          <View style={styles.totalTxtContainer}>
            <MSemiBoldTextView>Total: </MSemiBoldTextView>
            <MSemiBoldTextView>{total}</MSemiBoldTextView>
          </View>
          <View style={styles.payBtnContainer}>
            <RoundedButton
              type="primary"
              onPress={() => {
                if ((paymentMethod == 'Payment upon receipt') && (addressRenderList != false)){
                  order(route.params.order, "Дост")
                  if (route.params.cart === '1') {
                    cleanCart()
                  }
                  navigation.navigate("OrderSuccessScreen");
                } else if ((paymentMethod == 'Pay by card now') && (addressRenderList != false)) {
                  order(route.params.order, "Карт")
                                    if (route.params.cart === '1') {
                    cleanCart()
                  }
                  // navigation.navigate('AddCardScreen', {price: total, order:route.params.order})
                } else {
                  setError(errorMessage)
                }
              }}
            >
              Buy
            </RoundedButton>
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      <View style={{ flex: 1 }}>
        {renderHeader()}
        <View style={{ marginTop: hp("2") }}>
          <PaymentTabHeader
            active={activeTab}
            onTabChange={(tab) => {
              setActiveTab(tab);
            }}
          />
        </View>
        {activeTab == "shipping" ? renderShipping() : null}
        {activeTab == "payment" ? renderPayment() : null}
        {activeTab == "order" ? renderOrder() : null}
      </View>
    </>
  );
};

CheckoutScreen.propTypes = {};

CheckoutScreen.defaultProps = {};

const styles = StyleSheet.create({
  title: {
    fontSize: FontSize.Text22
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: hp("5"),
    paddingBottom: hp("2"),
    borderBottomEndRadius: wp("5"),
    borderBottomStartRadius: wp("5"),
  },
  headerIconContainer: { flexDirection: "row", alignItems: "center", flex: 1 },
  headerIcon: { marginStart: wp("5"), color: Color.textColor.primary },
  shippingContainer: { flex: 1 },
  detailsView: { marginStart: wp("5"), marginTop: hp("5") },
  blueContainer: {
    backgroundColor: Color.light.blue,
    padding: wp("5"),
    borderRadius: wp("5"),
    margin: wp("5"),
  },
  addAddressFeedback: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  addIcon: {
    color: Color.purpleplum,
    fontSize: wp("8"),
    marginEnd: wp("2"),
    marginTop: wp("1"),
  },
  saveBtnContainer: {
    position: "absolute",
    bottom: hp("10"),
    alignSelf: "center",
  },
  paymentContainer: { flex: 1 },
  paymentView: { marginStart: wp("5"), marginTop: hp("5") },
  priceContainer: {
    position: "absolute",
    bottom: hp("10"),
    alignSelf: "center",
    width: wp("80"),
  },
  totalTxtContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: hp("2"),
  },

  totalTxtContainerForOrder: {
    position: "absolute",
    bottom: hp("10"),
    alignSelf: "center",
    width: wp("80"),
  },
  payBtnContainer: { alignSelf: "center" },
  orderInfo: { marginStart: wp("5"), marginTop: hp("5") },
  containerPaymentMethod: {
    width: wp('70'),
    height: wp('18'),
    backgroundColor: Color.white,
    borderRadius: wp('5'),
    padding: wp('3'),
    marginTop: hp('1'),
    marginBottom: hp('1'),
    alignSelf: 'center',
    flexDirection: 'row',
  },
  paymentMethodLabel: {
    fontSize: FontSize.Text18,
    fontFamily: 'Montserrat-SemiBold',
    color: Color.textColor.primary,
  },
  paymentMethod: {
    color: Color.textColor.secondary,
    fontSize: FontSize.Text14,
    fontFamily: 'Montserrat-Regular',
    marginBottom: hp('2'),
    marginTop: hp('1'),
  },
  errorContainer: {alignItems: 'center', marginBottom: hp('2')},
  error: { marginTop: hp('3'), color: '#ff2d88', fontSize: FontSize.Text16},
});

export default CheckoutScreen;
