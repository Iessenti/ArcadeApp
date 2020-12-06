/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect, useRef } from "react";
import { Text, View, ScrollView, StatusBar } from "react-native";
import styles from "./indexCss";
import PropTypes from "prop-types";
import { Color } from "@constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import ViewPager from "@react-native-community/viewpager";
//import Orientation from 'react-native-orientation';
import { ImageCollage, RoundedButton } from "@components";
//import * as ScreenOrientation from "expo-screen-orientation";

import {
  ob1_1,
  ob1_2,
  ob1_3,
  ob2_1,
  ob2_2,
  ob2_3,
  ob3_1,
  ob3_2,
  ob3_3,
} from "@images";

const OnBoardingScreen = props => {
  const {} = props;
  const navigation = useNavigation();
  const viewPagerRef = useRef(null);

  const nextPage = page => {
    viewPagerRef.current.setPageWithoutAnimation(page);
  };

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
      <SafeAreaView style={{ flex: 1 }}>
        <ViewPager
          ref={viewPagerRef}
          style={{ flex: 1 }}
          initialPage={0}
          showPageIndicator={true}
        >
          <View key="1">
            <ScrollView style={styles.scrollView}>
              <View style={{ alignItems: "center" }}>
                <ImageCollage image1={ob1_1} image2={ob1_2} image3={ob1_3} />
              </View>
            </ScrollView>
            <View style={styles.btn}>
              <RoundedButton
                type="primary"
                onPress={() => {
                  nextPage(1);
                }}
              >
                Next
              </RoundedButton>
            </View>
          </View>
          <View key="2">
            <ScrollView style={styles.scrollView}>
              <View style={{ alignItems: "center" }}>
                <ImageCollage image1={ob2_1} image2={ob2_2} image3={ob2_3} />
              </View>
            </ScrollView>
            <View style={styles.btn}>
              <RoundedButton
                type="primary"
                onPress={() => {
                  nextPage(2);
                }}
              >
                Next
              </RoundedButton>
            </View>
          </View>
          <View key="3">
            <ScrollView style={styles.scrollView}>
              <View style={{ alignItems: "center" }}>
                <ImageCollage image1={ob3_1} image2={ob3_2} image3={ob3_3} />
              </View>
            </ScrollView>
            <View style={styles.btn}>
              <RoundedButton
                type="primary"
                onPress={() => {
                  props.navigation.navigate("LoginScreen");
                }}
              >
                Continue
              </RoundedButton>
            </View>
          </View>
        </ViewPager>
      </SafeAreaView>
    </>
  );
};
OnBoardingScreen.propTypes = {};

OnBoardingScreen.defaultProps = {};
export default OnBoardingScreen;
