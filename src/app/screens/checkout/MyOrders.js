/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Color, FontSize} from '@constants';
import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {MRegularTextView, MSemiBoldTextView} from '@components/TextComponents';
import {Icon} from 'native-base';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {SquareButton, CheckoutItem} from '@components';
import {ORDER_LIST} from '@data';
import AsyncStorage from '@react-native-community/async-storage';

const status = [
  {
    id: 1,
    name: 'Все',
  },
  {
    id: 2,
    name: 'В процессе',
  },
  {
    id: 1,
    name: 'Доставлено',
  },
];

const MyOrders = props => {
  const {} = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [orderList, setOrderList] = useState(false);

  useEffect(() => {
    const getData = async () => {
      let array = []
      const orders = JSON.parse( await AsyncStorage.getItem('orderArray'))
      for (let i = 0; i < orders.length; i++) {
        let response = await fetch('http://80.249.151.43/checkOrderState', {method:"POST", headers: {'Content-Type': 'application/json;charset=utf-8'}, body: JSON.stringify({id: orders[i].id})} )
        const data = await response.json()
        if (data == '1') {
          array.unshift({id: orders[i].id, items: orders[i].items, status: 'В процессе'})
        } else if (data == '0') {
          array.unshift({id: orders[i].id, items: orders[i].items, status: 'Доставлено'})
        }              
      }
      setOrderList(array)
    }

    getData()
  })

  const renderHeader = () => {
    return (
      <View key="header" style={styles.headerContainer}>
        <View style={styles.headerIconContainer}>
          <Icon
            name="chevron-left"
            type="Entypo"
            style={styles.headerIcon}
            onPress={() => {
              props.navigation.goBack();
            }}
          />
        </View>
      </View>
    );
  };

  const renderStatusButtons = data => {
    let isSelected = false;
    if (data.index == selectedIndex) {
      isSelected = true;
    }
    return (
      <View style={styles.statusBtnContainer} >
        <SquareButton
          type="tags"
          width={wp('20')}
          height={hp('4')}
          onPress={() => {
            setSelectedIndex(data.index);
          }}
          isSelected={isSelected}>
          {data.item.name}
        </SquareButton>
      </View>
    );
  };

  const renderProductsItems = data => {
    return (
      <View style={styles.productItemContainer}>
        <CheckoutItem
          title={data.item.title}
          price={data.item.price}
          image={data.item.mainImage}
          size={data.item.size}
          id={data.item.id}
          showOption={false}
          containerStyle={{width: wp('65')}}
        />
      </View>
    );
  };

  const renderOrderItems = data => {
    return (
      <View style={styles.orderItemContainer}>
        <View style={styles.orderTxtContainer}>
          <View>
            <MSemiBoldTextView>Order #{data.item.id}</MSemiBoldTextView>
          </View>
{/*          <View style={styles.dateContainer}>
            <MRegularTextView style={styles.dateTxt}>
              {data.item.date}
            </MRegularTextView>
          </View>*/}
        </View>
        <FlatList
          data={data.item.items}
          renderItem={renderProductsItems}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        <View style={styles.orderBottomView}>
          <View
            style={{
              ...styles.statusView,
              backgroundColor:
                data.item.status == 'В процессе'
                  ? Color.progressGreen
                  : Color.blue,
            }}>
            <MRegularTextView style={styles.statusTxt}>
              {data.item.status}
            </MRegularTextView>
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      <View style={{flex: 1}}>
        {renderHeader()}
        <View style={{marginStart: wp('5'), marginTop: hp('2')}}>
          <MSemiBoldTextView
            style={{
              fontSize: FontSize.Text22,
              fontFamily: 'Montserrat-SemiBold',
              color: Color.textColor.primary,
            }}>
            My orders
          </MSemiBoldTextView>
        </View>
        <View>
          <FlatList data={orderList} renderItem={renderOrderItems} style={{marginBottom: hp('20'), marginTop: hp('2')}}/>
        </View>
      </View>
    </>
  );
};

MyOrders.propTypes = {};

MyOrders.defaultProps = {};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: hp('5'),
    paddingBottom: hp('2'),
    borderBottomEndRadius: wp('5'),
    borderBottomStartRadius: wp('5'),
  },
  headerIconContainer: {flexDirection: 'row', alignItems: 'center', flex: 1},
  headerIcon: {marginStart: wp('5'), color: Color.textColor.primary},
  statusBtnContainer: {marginStart: wp('5')},
  productItemContainer: {marginStart: wp('5')},
  orderItemContainer: {
    backgroundColor: Color.light.blue,
    padding: wp('5'),
    borderRadius: wp('5'),
    marginStart: wp('5'),
    marginEnd: wp('5'),
    marginTop: wp('5'),
    marginBottom: wp('5')
  },
  orderTxtContainer: {flexDirection: 'row', flex: 1, marginBottom: hp('2')},
  dateContainer: {alignItems: 'flex-end', flex: 1},
  dateTxt: {
    color: Color.textColor.secondary,
    fontFamily: 'Montserrat-Regular',
  },
  orderBottomView: {flex: 1, flexDirection: 'row', marginTop: hp('2')},
  statusView: {padding: wp('1'), borderRadius: wp('2')},
  statusTxt: {
    color: Color.white,
    fontFamily: 'Montserrat-Regular',
    fontSize: FontSize.Text12,
  },
  moreInfoView: {flex: 1, alignItems: 'flex-end'},
  moreInfoText: {
    color: Color.textColor.primary,
    fontFamily: 'Montserrat-Regular',
    fontSize: FontSize.Text14,
  },
});

export default MyOrders
