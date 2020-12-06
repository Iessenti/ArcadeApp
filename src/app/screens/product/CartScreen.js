
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity  } from 'react-native';
import {Color, FontSize} from '@constants';
import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {MRegularTextView, MSemiBoldTextView,GTEestiProText,} from '@components/TextComponents';
import {Icon} from 'native-base';
import {EmptyCart1} from '@images';
import {RoundedButton, CheckoutItem, BottomCostView} from '@components';
import {productList} from '@data';
import {FlatList} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

const CartScreen = ({navigation, route}) => {
  const [isEmpty, setEmpty] = useState(true);
  const [cartItems, setCartItems] = useState(false);
  const [updateViews, setUpdateViews] = useState(false);
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      const Data = JSON.parse(await AsyncStorage.getItem('CartItems'))
      let temp = 0
      Data.forEach(item => {
        temp += parseInt(item.price);
      })
      setSubTotal(temp)
      if (Data.length > 0) {
        setCartItems(Data)
        setEmpty(false)
      } else { setEmpty(true) }

    })
    return unsubscribe;
  }, [navigation, isEmpty, cartItems]);

  const renderHeader = () => {
    return (
      <View key="header" style={styles.headerContainer}>
        <View style={styles.headerIconContainer}>
          <Icon
            name="chevron-left"
            type="Entypo"
            style={styles.backIcon}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
        <View style={styles.headerTitle}>
          <GTEestiProText style={{fontSize: FontSize.Text22}}>Cart</GTEestiProText>
        </View>
        <TouchableOpacity style={styles.headerRightTxtContainer} onPress={async () => {
              setEmpty(true)
              await AsyncStorage.setItem('CartItems', JSON.stringify([]))
            }}>
        <View >
          <MRegularTextView
            style={{
              fontSize: FontSize.Text16,
              color: Color.textColor.secondary,
            }}
          >
            Clean
          </MRegularTextView>
        </View>
        </TouchableOpacity>
{/*        <View
          style={{
            flex: 1,
            alignItems: 'flex-end',
            marginEnd: wp('5'),
          }}>
          <MRegularTextView onPress={() => {}} style={{}} />
        </View>*/}
      </View>
    );
  };

  const renderEmptyCart = () => {
    return (
      <View style={styles.emptyCartContainer}>
        <EmptyCart1
          width={wp('80')}
          height={wp('80')}
          style={{alignSelf: 'center'}}
        />
        <MSemiBoldTextView style={{fontSize: FontSize.Text20}}>Your cart is empty</MSemiBoldTextView>
        <MRegularTextView style={styles.emptyText}>
          Get inspired and discover something new...
        </MRegularTextView>
        <View style={styles.btnContainer}>
          <RoundedButton
            type="primary"
            onPress={() => {
              navigation.goBack();
            }}>
            Back
          </RoundedButton>
        </View>
      </View>
    );
  };

  const renderCartItem = data => {
    // let xprice = data.item.price + subTotal
    // setSubTotal(xprice)
    return (
      <View style={styles.cartItemView}>
        <CheckoutItem
          title={data.item.title}
          productId={data.item.id}
          price={data.item.price}
          image={data.item.mainImage}
          size={data.item.size}
          containerStyle={{shadowColor: "#000",
            shadowOffset: {
             width: 0,
             height: 6,
            },
            shadowOpacity: 0.39,
            shadowRadius: 8.30,

            elevation: 13
          }}
        />
      </View>
    );
  };

  const renderCartList = () => {
    return (
      <View style={styles.container}>
        <View style={{flex:1}}>
          <FlatList data={cartItems} renderItem={renderCartItem} />
        </View>
        <View style={{}}>
          <BottomCostView
            subtotal={subTotal}
            shipping={0}
            total={subTotal}
            onCheckout={() => {
              navigation.navigate('CheckoutScreen', {total:subTotal, order: cartItems, cart: '1'});
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <>
      <View style={styles.container}>
        {renderHeader()}
        {isEmpty && renderEmptyCart()}
        {isEmpty == false ? renderCartList() : null}
      </View>
    </>
  );
};

CartScreen.propTypes = {};

CartScreen.defaultProps = {};

const styles = StyleSheet.create({
  container: {flex: 1, },
  headerContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: hp("5"),
    paddingBottom: hp("2"),
    borderBottomEndRadius: wp("5"),
    borderBottomStartRadius: wp("5"),
  },
  headerIconContainer: { flexDirection: "row", alignItems: "center", flex: 1 },
  backIcon: { marginStart: wp("5"), color: Color.textColor.primary },
  headerTitle: {
    marginStart: wp("5"),
    alignSelf: "center",
    flex: 5,
    alignItems: "center",
    fontSize: FontSize.Text36
  },
  emptyCartContainer: {alignItems: 'center'},
  emptyText: {
    width: wp('80'),
    color: Color.textColor.secondary,
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
    marginTop: hp('1'),
    fontSize: FontSize.Text18
  },
  btnContainer: {marginTop: hp('10')},
  cartItemView: {marginTop: hp('2')},
    headerRightTxtContainer: {
    flex: 1,
    alignItems: "flex-end",
    marginEnd: wp("5"),
  },
});

export default CartScreen;
