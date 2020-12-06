import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import styles from "./indexCss";
import PropTypes from "prop-types";
import { Color, FontSize } from "@constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Icon } from "native-base";
import { MRegularTextView } from "@components/TextComponents";
import { FlatList } from "react-native-gesture-handler";
import SizeItem from "../SizeItem";
import Collapsible from "react-native-collapsible";

const SizeFilter = (props) => {
  const { onSelect, filterList, selectedItem } = props;
  const navigation = useNavigation();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [filterStateList, setFilterStateList] = useState(filterList);
  const [render, setRender] = useState(false);

  useEffect(() => {}, [filterStateList]);

  const renderSizeItem = (data) => {
    let isSelected = false;
    if (selectedItem.name == data.item.name) {
      //console.log('Selected One :', data.item.name);
      isSelected = true;
    }
    return (
      <View
        style={{
          width: wp("10"),
          margin: wp("2"),
        }}
      >
        <SizeItem
          text={data.item.name}
          isSelected={false}
          toggle={() => {
            onSelect(data.item);
            setRender(!render);
          }}
        />
      </View>
    );
  };
  return (
    <>
      <View
        style={{
          ...styles.container,
          marginBottom: hp("2"),
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
              <MRegularTextView>Size</MRegularTextView>
            </View>
          </View>
        </View>

        <View key="pickerContainer" style={{ alignSelf: "center" }}>
          <Collapsible collapsed={isCollapsed}>
            <FlatList
              data={filterStateList}
              renderItem={renderSizeItem}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </Collapsible>
        </View>
      </View>
    </>
  );
};

SizeFilter.propTypes = {};

SizeFilter.defaultProps = {
  selectedItem: { name: "A" },
};
export default SizeFilter;
