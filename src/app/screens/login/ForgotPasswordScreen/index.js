/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from "react";
import { View, StatusBar, ScrollView } from "react-native";
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
  MRegularTextView,
  MSemiBoldTextView,
} from "@components/TextComponents";
import { Icon } from "native-base";
import { ForgotPassword } from "@images";
import { CustomTextInput, RoundedButton } from "@components";
//import * as ScreenOrientation from "expo-screen-orientation";

const ForgotPasswordScreen = props => {
  const {} = props;

  const init = async () => {
    // await ScreenOrientation.lockAsync(
    //   ScreenOrientation.OrientationLock.PORTRAIT
    // );
  };

  useEffect(() => {
    //Orientation.lockToPortrait();
    init();
  }, []);

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
                  props.navigation.goBack();
                }}
                style={{
                  color: Color.textColor.primary,
                  marginStart: wp("10"),
                  flex: 0.3,
                }}
              />
              <View style={{ flex: 1 }}>
                <MSemiBoldTextView style={styles.heading}>
                  Forgot Password
                </MSemiBoldTextView>
              </View>
            </View>
            <View style={{ alignSelf: "center" }}>
              <ForgotPassword width={wp("80")} height={hp("40")} />
            </View>
            <View key="form" style={styles.form}>
              <View style={styles.labelContainer}>
                <MRegularTextView style={styles.label}>Email</MRegularTextView>
              </View>
              <CustomTextInput
                placeholder="Enter Email"
                placeholderTextColor={Color.textColor.secondary}
                keyboardType="email-address"
              />
            </View>
            <View style={styles.loginBtn}>
              <RoundedButton type="primary" width={wp("80")} height={hp("6")}>
                RESET PASSWORD
              </RoundedButton>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

ForgotPasswordScreen.propTypes = {};

ForgotPasswordScreen.defaultProps = {};
export default ForgotPasswordScreen;
