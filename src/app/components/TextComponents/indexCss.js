import { StyleSheet } from "react-native";
import { Color } from "@constants";
import { FontSize } from "@constants";

export default StyleSheet.create({
  TextStyle: {
    color: Color.textColor.primary,
    fontSize: FontSize.Text16,
  },
  AlpEkranTextView: {
    fontFamily: "AlpEkran",
  },
  MontserratLightTextView: {
    fontFamily: "Montserrat-Light",
  },
  MontserratRegularTextView: {
    fontFamily: "Montserrat-Regular",
  },
  MontserratSemiBoldTextView: {
    fontFamily: "Montserrat-SemiBold",
  },
  OpenSansBoldTextView: {
    fontFamily: "OpenSans-Bold",
  },
  OpenSansLightTextView: {
    fontFamily: "OpenSans-Light",
  },
  VolkhovBoldTextView: {
    fontFamily: "Volkhov-Bold",
  },
  GTEestiPro: {
    fontFamily: 'GTEestiProDisplay-UltraBold',
    fontWeight: 'bold'
  }
});
