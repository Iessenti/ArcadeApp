import React from "react";
import { View } from "react-native";
import styles from "./indexCss";
import PropTypes from "prop-types";
import { Color } from "@constants";
import { useNavigation } from "@react-navigation/native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import {
  MRegularTextView,
  MSemiBoldTextView,
} from "@components/TextComponents";
import RoundedButton from "../../Buttons/RoundedButton";

const BottomCostView = props => {
  const { subtotal, shipping, total, onCheckout } = props;
  return (
    <>
      <View style={styles.container}>
        <View key="txtContainer" style={styles.txtContainer}>
          <View style={styles.subTxtContainer}>
            <MRegularTextView style={{ color: Color.white }}>
              Price
            </MRegularTextView>
            <MRegularTextView style={{ color: Color.white }}>
              {subtotal}
            </MRegularTextView>
          </View>
          <View style={styles.subTxtContainer}>
            <MRegularTextView style={{ color: Color.white }}>
              Shipping
            </MRegularTextView>
            <MRegularTextView style={{ color: Color.white }}>
              {shipping}
            </MRegularTextView>
          </View>
          <View style={styles.subTxtContainer}>
            <MSemiBoldTextView style={styles.totalTxt}>Total</MSemiBoldTextView>
            <MSemiBoldTextView style={styles.totalTxt}>
              {total}
            </MSemiBoldTextView>
          </View>
        </View>
        <View style={styles.btnContainer}>
          <RoundedButton type="primary" width={wp("80")} onPress={onCheckout}>
            Buy
          </RoundedButton>
        </View>
      </View>
    </>
  );
};

BottomCostView.propTypes = {
  subtotal: PropTypes.number,
  shipping: PropTypes.number,
  total: PropTypes.number,
  onCheckout: PropTypes.func,
};

BottomCostView.defaultProps = {
  subtotal: 120,
  shipping: 10,
  total: 130,
};
export default BottomCostView;
