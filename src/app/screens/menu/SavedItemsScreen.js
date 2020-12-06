/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { StyleSheet, TouchableOpacity  } from "react-native";
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
  GTEestiProText,
} from "@components/TextComponents";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { SavedItem } from "@components";
import AsyncStorage from '@react-native-community/async-storage';

const SavedItemsScreen = (props) => {
  const {} = props;
  const [SavedItemList, setSavedItemList] = useState(false);

  useEffect(() => {
    async function getData() {
      const Data = JSON.parse(await AsyncStorage.getItem('FavItems'))
      setSavedItemList(Data)
    }
    getData()
  })

  const renderHeader = () => {
    return (
      <View key="header" style={styles.headerContainer}>
        <View style={styles.headerIconContainer}>
          <Icon
            name="chevron-left"
            type="Entypo"
            style={styles.backIcon}
            onPress={() => {
              props.navigation.goBack();
            }}
          />
        </View>
        <View style={styles.headerTitle}>
          <GTEestiProText style={{fontSize: FontSize.Text20}}>Saved</GTEestiProText>
        </View>
        <TouchableOpacity  style={styles.headerRightTxtContainer} onPress={async () => {
              await AsyncStorage.setItem('FavItems', JSON.stringify([]))
            }}>
        <View>
          <MRegularTextView
            style={{
              fontSize: FontSize.Text16,
              color: Color.textColor.secondary,
            }}
          >
            Clean
          </MRegularTextView>
        </View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderSavedItem = (data) => {
    return (
      <View style={styles.itemContainer}>
        <SavedItem
          image={{uri:data.item.mainImage}}
          price={data.item.price}
          title={data.item.title}
          onPress={() => {
            props.navigation.navigate("ProductDetailsScreen", { mainImage: data.item.mainImage, secImage: data.item.secImage, thiImage: data.item.thiImage, sizes: data.item.sizes, description: data.item.description, price: data.item.price, title: data.item.title, id: data.item.id});
          }}
          addToCart={() => {
            console.log("Add to cart");
          }}
        />
      </View>
    );
  };

  return (
    <>
      <View style={{ flex: 1 }}>
        {renderHeader()}
        <View style={{ flex: 1 }}>
          <ScrollView>
            <FlatList
              data={SavedItemList}
              renderItem={renderSavedItem}
              numColumns={2}
              scrollEnabled={false}
            />
          </ScrollView>
        </View>
      </View>
    </>
  );
};

SavedItemsScreen.propTypes = {};

SavedItemsScreen.defaultProps = {};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: hp("5"),
    paddingBottom: hp("2"),
    borderBottomEndRadius: wp("5"),
    borderBottomStartRadius: wp("5"),
  },
  headerIconContainer: { flexDirection: "row", alignItems: "center", flex: 1 },
  backIcon: { marginStart: wp("5"), color: Color.textColor.primary },
  headerTitle: {
    marginStart: wp("5"),
    alignSelf: "center",
    flex: 3,
    alignItems: "center",
    fontSize: FontSize.Text28
  },
  itemContainer: { flexDirection: "row", width: wp("50"), paddingTop: hp('2') },
  headerRightTxtContainer: {
    flex: 1,
    alignItems: "flex-end",
    marginEnd: wp("5"),
  },
});

export default SavedItemsScreen;
