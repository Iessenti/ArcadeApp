import { StyleSheet } from "react-native";
import { Color } from "@constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Color.white,
    borderRadius: wp("5"),
    width: wp("80"),
    height: hp("10"),
    alignSelf: "center",
    marginStart: wp("5"),
    marginEnd: wp("5"),
    marginBottom: hp("2"),
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textContainer: {
    flex: 1,
    alignItems: "flex-end",
    marginEnd: wp("0"),
  },
  image: {
    width: hp("8"),
    borderTopRightRadius: wp("5"),
    borderBottomRightRadius: wp("5"),
    height: hp("10"),
    justifyContent: "flex-end",
  },
  text: {
    marginStart: wp("5"),
    fontFamily: "Montserrat-SemiBold",
    color: Color.textColor.primary,
  },
});
