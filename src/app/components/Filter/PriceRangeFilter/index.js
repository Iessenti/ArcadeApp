/* eslint-disable react-native/no-inline-styles */
import React, { useState } from "react";
import { View } from "react-native";
import styles from "./indexCss";
import PropTypes from "prop-types";
import { Color } from "@constants";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Icon } from "native-base";
import { MRegularTextView } from "@components/TextComponents";
//import Slider from '@react-native-community/slider';
import Slider from "react-native-slider";
import Collapsible from "react-native-collapsible";

const PriceRangeFilter = props => {
  const { price, onSliderChage, maxRange } = props;
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <>
      <View
        style={{
          height: isCollapsed ? hp("10") : hp("15"),
          ...styles.container,
        }}
      >
        <View key="header" style={styles.header}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Icon
              name={isCollapsed ? "plus" : "minus"}
              type="AntDesign"
              style={styles.icon}
              onPress={() => {
                setIsCollapsed(!isCollapsed);
              }}
            />
            <View style={{ marginStart: wp("5") }}>
              <MRegularTextView>Price Range</MRegularTextView>
            </View>
          </View>
          <View>
            <MRegularTextView style={{ color: Color.purpleplum }}>
              {price}
            </MRegularTextView>
          </View>
        </View>

        <View key="sliderContainer" style={{ flex: 1, alignItems: "center" }}>
          <Collapsible collapsed={isCollapsed}>
            <Slider
              style={{ width: 200, height: 40 }}
              minimumValue={0}
              maximumValue={maxRange}
              step={100}
              thumbTintColor={Color.purpleplum}
              minimumTrackTintColor={Color.purpleplum}
              maximumTrackTintColor={Color.gray}
              onValueChange={onSliderChage}
            />
          </Collapsible>
        </View>
      </View>
    </>
  );
};

PriceRangeFilter.propTypes = {
  price: PropTypes.string,
  show: PropTypes.bool,
  maxRange: PropTypes.number,
};

PriceRangeFilter.defaultProps = {
  show: true,
  price: "$0-$100",
  maxRange: 100,
};
export default PriceRangeFilter;
