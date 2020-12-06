/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from "react";
import { View, StatusBar, ScrollView, Image } from "react-native";
import styles from "./indexCss";
import { Color } from "@constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
//import Orientation from 'react-native-orientation';
import {
  MLightTextView,
  MRegularTextView,
  MSemiBoldTextView,
  GTEestiProText,
} from "@components/TextComponents";
import { Icon } from "native-base";
import { CustomTextInput, RoundedButton, ImageUploadView } from "@components";
import { TouchableOpacity } from "react-native-gesture-handler";
import { unlogged } from "@images";
import AsyncStorage from '@react-native-community/async-storage';
//import * as ScreenOrientation from "expo-screen-orientation";

const errorMessage = props => {
  return (
    <View style={styles.errorContainer}>
      <GTEestiProText style={styles.error}>Please, enter the correct data</GTEestiProText>
    </View>
  )
}

const passError = props => {
  return (
    <View style={styles.errorContainer}>
      <GTEestiProText style={styles.error}>Passwords doesn`t match</GTEestiProText>
    </View>
  )
}

const phoneError = props => {
  return (
    <View style={styles.errorContainer}>
      <GTEestiProText style={styles.error}>Incorrect phone number</GTEestiProText>
    </View>
  )
}

const userExistError = props => {
  return (
    <View style={styles.errorContainer}>
      <GTEestiProText style={styles.error}>This user already exists</GTEestiProText>
    </View>
  )
}

const passLessError = props => {
  return (
    <View style={styles.errorContainer}>
      <GTEestiProText style={styles.error}>Length of password must be minimum 8 symbols</GTEestiProText>
    </View>
  )
}

const SignupScreen = props => {
  const {} = props;
  const navigation = useNavigation();
  const [error, setError] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [pass, setPass] = useState('')
  const [repPass, setRepPass] = useState('')

  const init = async () => {
    // await ScreenOrientation.lockAsync(
    //   ScreenOrientation.OrientationLock.PORTRAIT
    // );
  };

  const send = async () => {
                    if ((phone == '') || (name == '') || (pass == '')) {
                      setError(errorMessage)
                      return false
                    }
                    if (/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(phone) == false) {
                      setError(phoneError)
                      return false
                    }
                    let obj = {phone: phone, password: pass, name: name}
                    let response = await fetch('http://80.249.151.43/signup', {method:"POST", headers: {'Content-Type': 'application/json;charset=utf-8'}, body: JSON.stringify(obj)} )
                    const data = await response.json()
                    if (data.answer == 'exist') {
                      setError(userExistError)
                      return false
                    } 
                    if (data.answer == 'less') {
                      setError(passLessError)
                      return false
                    }
                    if (data.answer == 'ok') {
                      setError(false)
                      await AsyncStorage.setItem('RegData', JSON.stringify({name: name, phone: phone}))

                      navigation.navigate("HomeScreen") 
                      return true
                    }
  }

  return (
    <>
      <StatusBar backgroundColor={Color.white} barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView style={{ backgroundColor: Color.bg, flex: 1 }}>
          <View>
            <View style={styles.headingContainer}>
              <Icon
                name="ios-arrow-back"
                type="Ionicons"
                onPress={() => {
                  navigation.navigate('LoginScreen');
                }}
                style={{
                  color: Color.textColor.primary,
                  marginStart: wp("10"),
                  flex: 0.5,
                }}
              />
              <View style={{ flex: 1 }}>
                <MSemiBoldTextView style={styles.heading}>
                  Sign up
                </MSemiBoldTextView>
              </View>
            </View>
            <View style={{ marginTop: hp("3") }}>
              <View style={styles.imgContainer}>
                <Image source={unlogged} style={styles.profile} />
              </View>
            </View>
            <View key="form" style={styles.form}>
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
                <MRegularTextView style={styles.label}>Phone number</MRegularTextView>
              </View>
              <CustomTextInput
                placeholder="Enter your phone number"
                placeholderTextColor={Color.textColor.secondary}
                keyboardType="phone-pad"
                onChangeText={text => setPhone(text)}
                value={phone}
              />
              <View style={styles.pwdLabelContainer}>
                <MRegularTextView style={styles.pwdLabel}>
                  Password
                </MRegularTextView>
              </View>
              <CustomTextInput
                placeholder="Enter password"
                placeholderTextColor={Color.textColor.secondary}
                keyboardType="default"
                secureTextEntry={true}
                onChangeText={text => setPass(text)}
                value={pass}
              />
{/*              <View style={styles.pwdLabelContainer}>
                <MRegularTextView style={styles.pwdLabel}>
                  Повторите пароль
                </MRegularTextView>
              </View>
              <CustomTextInput
                placeholder="Повторите пароль"
                placeholderTextColor={Color.textColor.secondary}
                keyboardType="default"
                secureTextEntry={true}
                onChangeText={text => setRepPass(text)}
                value={repPass}
              />*/}
              {error}
              <View style={styles.loginBtn}>
                <RoundedButton
                  type="primary"
                  width={wp("80")}
                  height={hp("6")}
                  onPress={ () => { send() } }
                  >
                  Sign Up
                </RoundedButton>
              </View>
              <View style={styles.donthaveaccount}>
                <MLightTextView style={styles.donthaveaccountTxt}>
                  I already have an account
                </MLightTextView>
                <TouchableOpacity
                  style={styles.signup}
                  onPress={() => {
                    props.navigation.navigate("LoginScreen");
                  }}
                >
                  <MLightTextView style={styles.signup}>Login</MLightTextView>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

SignupScreen.propTypes = {};

SignupScreen.defaultProps = {};
export default SignupScreen;
