/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from "react";
import { View, StatusBar, Image, ScrollView, TouchableWithoutFeedback } from "react-native";
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
import { unlogged } from "@images";
import { Icon } from "native-base";
import { CustomTextInput, RoundedButton } from "@components";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from '@react-native-community/async-storage';

const errorMessage = props => {
  return (
    <View style={styles.errorContainer}>
      <GTEestiProText style={styles.error}>Please, enter the correct data</GTEestiProText>
    </View>
  )
}

const passwordErr = props => {
  return (
    <View style={styles.errorContainer}>
      <GTEestiProText style={styles.error}>Incorrect password</GTEestiProText>
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
      <GTEestiProText style={styles.error}>This user doesn`t exist</GTEestiProText>
    </View>
  )
}

const LoginScreen = props => {
  const {} = props;
  const navigation = useNavigation();
  const [logData, setLogData] = useState({email: '', password: ''})
  const [error, setError] = useState(false)
  const [phone, setPhone] = useState('')
  const [pass, setPass] = useState('')

  const init = async () => {
    // await ScreenOrientation.lockAsync(
    //   ScreenOrientation.OrientationLock.PORTRAIT
    // );
  };

  useEffect(() => {
    //Orientation.lockToPortrait();
    init();
  }, []);

  const send = async () => {
                    if ((phone == '')|| (pass == '')) {
                      setError(errorMessage)
                      return false
                    } else
                    if (/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(phone) == false) {
                      setError(phoneError)
                      return false
                    }
                    let obj = {phone: phone, password: pass}
                    let response = await fetch('http://80.249.151.43/login', {method:"POST", headers: {'Content-Type': 'application/json;charset=utf-8'}, body: JSON.stringify(obj)} )
                    const data = await response.json()
                    if (data.answer == 'notexist') {
                      setError(userExistError)
                      return false
                    } else
                    if (data.answer == 'passNot') {
                      setError(passwordErr)
                      return false
                    } else {
                      setError(false)
                      await AsyncStorage.setItem('RegData', JSON.stringify({name: data.answer, phone: phone}))

                      navigation.navigate("HomeScreen") 
                      return true
                    }
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
              navigation.navigate('HomeScreen')
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <>
     {renderHeader()}
      <StatusBar backgroundColor={Color.white} barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView>
        <View>
          <View style={styles.headingContainer}>
            <MSemiBoldTextView style={styles.heading}>Login</MSemiBoldTextView>
          </View>
          <View style={styles.imgContainer}>
            <Image source={unlogged} style={styles.profile} />
          </View>
          <View key="form" style={styles.form}>
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

{/*              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ForgotPasswordScreen");
                }}
              >
                <MRegularTextView style={styles.forgot}>
                  Забыли?
                </MRegularTextView>
              </TouchableOpacity>*/}
            </View>
            <CustomTextInput
              placeholder="Enter your password"
              placeholderTextColor={Color.textColor.secondary}
              keyboardType="default"
              secureTextEntry={true}
              onChangeText={text => setPass(text)}
            />
            {error}
            <View style={styles.loginBtn}>
              <RoundedButton
                type="primary"
                width={wp("80")}
                height={hp("6")}
                onPress={() => { send() }}
              >
                LOGIN
              </RoundedButton>
            </View>
            <View style={styles.donthaveaccount}>
             <MLightTextView style={styles.donthaveaccountTxt}>
                Have any account
              </MLightTextView>
              <TouchableOpacity
                style={styles.signup}
                onPress={() => {
                  props.navigation.navigate("SignupScreen");
                }}
              >
                <MLightTextView style={styles.signup}>Sign Up</MLightTextView>
              </TouchableOpacity>
{/*                            <MLightTextView style={styles.donthaveaccountTxt}>
                I don't have an account
              </MLightTextView>
              <TouchableOpacity
                style={styles.signup}
                onPress={() => {
                  props.navigation.navigate("SignupScreen");
                }}
              >
                <MLightTextView style={styles.signup}>Sign Up</MLightTextView>
              </TouchableOpacity>*/}
            </View>
          </View>
        </View>
      </ScrollView>
      </SafeAreaView>
    </>
  );
};

LoginScreen.propTypes = {};

LoginScreen.defaultProps = {};
export default LoginScreen;
