/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Color} from '@constants';
import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {MRegularTextView, MSemiBoldTextView} from '@components/TextComponents';
import {Icon} from 'native-base';
import {RoundedButton} from '@components';
import {OrderSuccess} from '@images';

const OrderSuccessScreen = props => {
  const {} = props;

  const renderHeader = () => {
    return (
      <View key="header" style={styles.headerContainer}>
        <View style={styles.headerIconContainer}>
          <Icon
            name="chevron-left"
            type="Entypo"
            style={styles.headerIcon}
            onPress={() => {
              props.navigation.navigate('HomeScreen');
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
        <View style={styles.orderSuccessContainer}>
          <OrderSuccess
            width={wp('80')}
            height={wp('80')}
            style={{alignSelf: 'center'}}
          />
          <MSemiBoldTextView>Ready!</MSemiBoldTextView>
          <MRegularTextView style={styles.description}>
            Your order has been successfully placed! For more information, go to My orders
          </MRegularTextView>
        </View>
        <View style={styles.btnContainer}>
          <RoundedButton
            type="primary"
            onPress={() => {
              props.navigation.navigate('MyOrders');
            }}>
            My orders
          </RoundedButton>
        </View>
      </View>
    </>
  );
};

OrderSuccessScreen.propTypes = {};

OrderSuccessScreen.defaultProps = {};

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
  container: {flex: 1},
  orderSuccessContainer: {alignItems: 'center', flex: 1},
  description: {
    width: wp('80'),
    color: Color.textColor.secondary,
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
    marginTop: hp('1'),
  },
  btnContainer: {
    marginTop: hp('0'),
    alignSelf: 'center',
    marginBottom: hp('10'),
  },
});

export default OrderSuccessScreen;
