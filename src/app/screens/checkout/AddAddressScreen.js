/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {Color, FontSize} from '@constants';
import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Icon} from 'native-base';
import {MRegularTextView, MSemiBoldTextView, GTEestiProText} from '@components/TextComponents';
import {CustomTextInput} from '@components';
import {RoundedButton} from '../../components';
import {ScrollView} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const errorMessage = props => {
  return (
    <View style={styles.errorContainer}>
      <GTEestiProText style={styles.error}>Please, enter the correct information</GTEestiProText>
    </View>
  )
}
const AddAddressScreen = props => {
  const {} = props;
  const [name, setName] = useState('')
  const [phone, setPhone] =  useState('')
  const [address, setAddress] = useState('')
  const [index, setIndex] = useState('')

  const [error, setError] = useState(false)

 useEffect( () => {
    async function getData() {
      const addrArray = JSON.parse(await AsyncStorage.getItem('addressList'))
      setName(addrArray[0].name)
      setPhone(addrArray[0].phone)
      setAddress(addrArray[0].address)
      setIndex(addrArray[0].index)
      setError(false)
    }
    getData()
  },[])

  let addressHeading =
    props.route.params.type == 'edit' ? 'Change address' : 'Add new address';
  const renderHeader = () => {
    return (
      <View key="header" style={styles.headerContainer}>
        <View style={styles.headerIconContainer}>
          <Icon
            name="chevron-left"
            type="Entypo"
            style={styles.headerIcon}
            onPress={() => {
              setError(false)
              props.navigation.goBack();
            }}
          />
        </View>
      </View>
    );
  };

  const saveAddress = async () => { 
      await AsyncStorage.setItem('addressList', JSON.stringify([{name:name, phone: phone, address: address, index: index}]))
      setError(false)
      props.navigation.goBack()
    
  }

  return (
    <>
      <View style={{flex: 1}}>
        {renderHeader()}
        <ScrollView>
          <View style={styles.titleView}>
            <GTEestiProText style={styles.title}>{addressHeading}</GTEestiProText>
            <View style={styles.form}>
              <View style={styles.labelContainer}>
                <MRegularTextView style={styles.label}>Name</MRegularTextView>
              </View>
              <CustomTextInput
                placeholder="Enter your name"
                placeholderTextColor={Color.textColor.secondary}
                keyboardType="default"
                onChangeText={text => setName(text)}
                value={name}
              />
              <View style={styles.labelContainer}>
                <MRegularTextView style={styles.label}>
                  Phone
                </MRegularTextView>
              </View>
              <CustomTextInput
                placeholder="Enter your number phone"
                placeholderTextColor={Color.textColor.secondary}
                keyboardType="default"
                onChangeText={text => setPhone(text)}
                value={phone}
              />
              <View style={styles.labelContainer}>
                <MRegularTextView style={styles.label}>Address</MRegularTextView>
              </View>
              <CustomTextInput
                placeholder="City, street, home, flat"
                placeholderTextColor={Color.textColor.secondary}
                keyboardType="default"
                onChangeText={text => setAddress(text)}
                value={address}
              />
              <View style={styles.labelContainer}>
                <MRegularTextView style={styles.label}>
                  ZIP-code
                </MRegularTextView>
              </View>
              <CustomTextInput
                placeholder="Enter your zip-code"
                placeholderTextColor={Color.textColor.secondary}
                keyboardType="default"
                onChangeText={text => setIndex(text)}
                value={index}
              />
            </View>
            {error}
            <View style={styles.btnContainer}>
                  <RoundedButton type="primary" onPress={() => {     
                    if ( (name == '') || (phone == '') || (address == '') || (index == '') || (/[0-9]/g.test(phone) != true) || (/[0-9]/g.test(index) == false) || (phone.length < 11)) {
                      setError(errorMessage)
                    } else {
                      saveAddress()
                    }}} >Save</RoundedButton>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

AddAddressScreen.propTypes = {};

AddAddressScreen.defaultProps = {};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: hp('5'),
    paddingBottom: hp('2'),
    borderBottomEndRadius: wp('5'),
    borderBottomStartRadius: wp('5'),
  },
  title: {
    fontSize: FontSize.Text20
  },
  headerIconContainer: {flexDirection: 'row', alignItems: 'center', flex: 1},
  headerIcon: {marginStart: wp('5'), color: Color.textColor.primary},
  titleView: {marginStart: wp('5'), marginTop: hp('3')},
  form: {
    borderRadius: wp('5'),
    marginStart: wp('5'),
    marginTop: hp('2'),
    marginEnd: wp('5'),
  },
  labelContainer: {
    marginStart: wp('2'),
    marginBottom: hp('1'),
    marginTop: hp('1'),
  },
  label: {
    fontSize: FontSize.Text16,
    color: Color.textColor.secondary,
    fontFamily: 'Montserrat-Regular',
  },
  btnContainer: {alignItems: 'center', marginTop: hp('3')},
  errorContainer: {alignItems: 'center'},
  error: { marginTop: hp('3'), color: '#ff2d88', fontSize: FontSize.Text16,},
});

export default AddAddressScreen;
