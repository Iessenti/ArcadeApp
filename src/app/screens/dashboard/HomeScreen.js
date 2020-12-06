/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Platform, 
  PixelRatio, 
} from "react-native";
//import styles from './indexCss';
import PropTypes from "prop-types";
import { Color, FontSize } from "@constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Animated from "react-native-reanimated";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import {} from "@components/TextComponents";
import { TabView, SceneMap } from "react-native-tab-view";
import { Icon } from "native-base";
import {
  MLightTextView,
  MRegularTextView,
  MSemiBoldTextView,
} from "@components/TextComponents";

import Home from "./Home";
import Categories from "./Categories";
import NewIn from "./NewIn";

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const scale = SCREEN_WIDTH / 320;

const normalize = (size) => {
  const newSize = size * scale 
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
} 

const HomeScreen = (props) => {
  const {} = props;
  const navigation = useNavigation();
  const [index, setIndex] = React.useState(0);
  const [genderType, setGenderType] = useState("Women");
  const [routes] = React.useState([
    { key: "first", title: "Home" },
    { key: "second", title: "Categories" },
    { key: 'third', title: "Best"}
  ]);

  const initialLayout = { width: Dimensions.get("window").width };

  const _renderTabBar = (props) => {
    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          let color =
            index == i ? Color.textColor.primary : Color.textColor.secondary;

          return (
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() => setIndex(i)}
            >
              <Animated.Text
                style={{ color, fontFamily: "Montserrat-SemiBold", fontSize: FontSize.Text18 }}
              >
                {route.title}
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const updateHeading = (val) => {
    setGenderType(val);
  };

  const renderHeader = () => {
    return (
      <View key="header" style={styles.header}>
        <View style={styles.headerIconContainer}>
          <Icon
            name="menu"
            type="Entypo"
            style={styles.headerIcon}
            onPress={() => {
              props.navigation.toggleDrawer();
            }}
          />

        </View>

        <View style={styles.otherIconView}>
          <Icon
            name="search"
            type="EvilIcons"
            style={styles.headerIcon}
            onPress={() => {
              props.navigation.navigate("SearchScreen");
            }}
          />
          <Icon
            name="ios-cart"
            type="Ionicons"
            style={styles.headerIcon}
            onPress={() => {
              props.navigation.navigate("CartScreen");
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
        <TabView
          key={(item) => item.id}
          navigationState={{ index, routes }}
          style={styles.title}
          renderScene={SceneMap({
            first: Home,
            second: Categories,
            third: NewIn,
          })}
          onIndexChange={setIndex}
          renderTabBar={_renderTabBar}
          initialLayout={initialLayout}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {fontSize:normalize(28)},
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: "row",
    paddingTop: 0,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: hp("5"),
    paddingBottom: hp("2"),
    borderBottomEndRadius: wp("5"),
    borderBottomStartRadius: wp("5"),
  },
  headerIconContainer: { flexDirection: "row", alignItems: "center", flex: 1 },
  headerIcon: { marginStart: wp("5"), color: Color.textColor.primary },
  headerIconDown: { marginStart: wp("1"), color: Color.textColor.primary },
  otherIconView: {
    flexDirection: "row",
    alignSelf: "flex-end",
    alignItems: "flex-end",
    marginEnd: wp("5"),
  },
});

HomeScreen.propTypes = {};

HomeScreen.defaultProps = {};
export default HomeScreen;
