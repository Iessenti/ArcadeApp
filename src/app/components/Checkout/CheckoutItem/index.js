/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { Text, View } from "react-native";
import styles from "./indexCss";
import PropTypes from "prop-types";
import { Color } from "@constants";
import { useNavigation } from "@react-navigation/native";
import RectImageView from "../../ImageViews/RectImageView";
import { featured_1 } from "@images";
import { Icon } from "native-base";
import { MRegularTextView } from "@components/TextComponents";

const CheckoutItem = props => {
  const {
    title,
    productId,
    color,
    size,
    price,
    onChangeQuantity,
    quantity,
    image,
    showOption,
    containerStyle,
  } = props;
  return (
    <>
      <View style={{ ...styles.container, ...containerStyle }}>
        <View style={styles.imgContainer}>
          <RectImageView style={styles.img} image={{uri:image}} />
        </View>
        <View style={styles.midContainer}>
          <MRegularTextView numberOfLines={2} style={styles.title}>{title}</MRegularTextView>
          <MRegularTextView numberOfLines={1} style={styles.productId}>
            {productId}
          </MRegularTextView>
          <View
            key="colorAndSizeContainer"
            style={styles.colorAndSizeContainer}
          >
{/*            <View>
              <View style={styles.colorContainer}>
                <Text style={styles.colorTxt}>Цвет: </Text>
                <View style={{ ...styles.colorView, backgroundColor: color }} />
              </View>
            </View>*/}
            <View>
              <View style={styles.sizeContainer}>
                <Text style={styles.sizeTxt}>Size: </Text>
                <Text style={styles.sizeTxtVal}>{size}</Text>
              </View>
            </View>
          </View>
          <View key="priceContainer" style={styles.priceContainer}>
            <MRegularTextView numberOfLines={1}>
              {price}
            </MRegularTextView>
          </View>
        </View>
        {showOption == true ? (
          <View
            key="plusAndMinusButtonContainer"
            style={styles.plusAndMinusButtonContainer}
          >
            <View style={styles.pmInnerContainer}>
              <View style={styles.iconContainer}>
                <Icon
                  name="plus"
                  type="AntDesign"
                  style={styles.icon}
                  onPress={() => {
                    onChangeQuantity(1);
                  }}
                />
              </View>
              <View style={styles.iconContainer}>
                <Icon
                  name="minus"
                  type="AntDesign"
                  style={styles.icon}
                  onPress={() => {
                    onChangeQuantity(-1);
                  }}
                />
              </View>
            </View>
          </View>
        ) : null}
      </View>
    </>
  );
};

CheckoutItem.propTypes = {
  title: PropTypes.string,
  producId: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  price: PropTypes.string,
  onChangeQuantity: PropTypes.func,
  quantity: PropTypes.number,
};

CheckoutItem.defaultProps = {
};
export default CheckoutItem;
