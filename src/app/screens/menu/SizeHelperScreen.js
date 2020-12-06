/* eslint-disable react-native/no-inline-styles */
import React, { useState } from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { Color, FontSize } from "@constants";
import { useNavigation } from "@react-navigation/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Icon } from "native-base";
import {
  MRegularTextView,
  MSemiBoldTextView,
} from "@components/TextComponents";
import {
  SquareButton,
  SizePreferenceList,
  HeightWeightInputBox,
  RoundedButton,
} from "@components";

const SizeHelperScreen = (props) => {
  const {} = props;
  const [height, setHeight] = useState("150");
  const [weight, setWeight] = useState("60");
  const [selectedIndex2, setSelectedIndex2] = useState(0);
  const [sizeType, setSizeType] = useState("cm");
  const [weightType, setWeightType] = useState("kg");

  const renderHeader = () => {
    return (
      <View key="header" style={styles.header}>
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

  return (
    <>
      <View>
        {renderHeader()}
        <View style={styles.title}>
          <MSemiBoldTextView
            style={{
              fontSize: FontSize.Text24,
            }}
          >
            What's my size?
          </MSemiBoldTextView>
        </View>
        <View style={styles.btnContainer1}>
          <SquareButton
            type="tags"
            width={wp("20")}
            height={hp("4")}
            onPress={() => {
              setSizeType("cm");
            }}
            isSelected={sizeType == "cm" ? true : false}
          >
            cm
          </SquareButton>
          <View style={{ marginStart: wp("5"), marginEnd: wp("5") }}>
            <SquareButton
              type="tags"
              width={wp("20")}
              height={hp("4")}
              onPress={() => {
                setSizeType("in");
              }}
              isSelected={sizeType == "cm" ? false : true}
            >
              in
            </SquareButton>
          </View>
        </View>
        <View style={{ marginTop: hp("2") }}>
          <HeightWeightInputBox
            text={"Height - " + sizeType}
            value={height}
            onChangeText={(value) => {
              setHeight(value);
            }}
          />
        </View>

        <View style={styles.btnContainer1}>
          <SquareButton
            type="tags"
            width={wp("20")}
            height={hp("4")}
            onPress={() => {
              setWeightType("kg");
            }}
            isSelected={weightType == "kg" ? true : false}
          >
            kg
          </SquareButton>
          <View style={{ marginStart: wp("5"), marginEnd: wp("5") }}>
            <SquareButton
              type="tags"
              width={wp("20")}
              height={hp("4")}
              onPress={() => {
                setWeightType("lbc");
              }}
              isSelected={weightType == "kg" ? false : true}
            >
              lbc
            </SquareButton>
          </View>
        </View>
        <View style={{ marginTop: hp("2") }}>
          <HeightWeightInputBox
            text={"Weight - " + weightType}
            value={weight}
            onChangeText={(value) => {
              setWeight(value);
            }}
          />
        </View>

        <View style={styles.preferenceView}>
          <View style={{ marginBottom: hp("3") }}>
            <MSemiBoldTextView>Preference</MSemiBoldTextView>
            <MRegularTextView style={styles.txtFit}>
              How do you want to fit?
            </MRegularTextView>
          </View>
        </View>
        <View>
          <SizePreferenceList
            selectedIndex={selectedIndex2}
            onChange={(index) => {
              //console.log('Selected Index:', index);
              setSelectedIndex2(index);
            }}
          />
        </View>
        <View style={styles.btnContainer}>
          <RoundedButton type="primary" width={wp("40")} height={hp("5")}>
            Apply
          </RoundedButton>
        </View>
      </View>
    </>
  );
};

SizeHelperScreen.propTypes = {};

SizeHelperScreen.defaultProps = {};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: hp("5"),
    paddingBottom: hp("2"),
    borderBottomEndRadius: wp("5"),
    borderBottomStartRadius: wp("5"),
  },
  headerIconContainer: { flexDirection: "row", alignItems: "center", flex: 1 },
  headerIcon: { marginStart: wp("5"), color: Color.textColor.primary },
  title: { marginStart: wp("5"), marginTop: hp("2") },
  btnContainer1: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: hp("3"),
  },
  preferenceView: {
    marginTop: hp("3"),
    marginStart: wp("5"),
  },
  txtFit: {
    color: Color.textColor.secondary,
    fontSize: FontSize.Text14,
    fontFamily: "Montserrat-Regular",
    marginTop: hp("1"),
  },
  btnContainer: { alignItems: "center", marginTop: hp("5") },
});

export default SizeHelperScreen;
