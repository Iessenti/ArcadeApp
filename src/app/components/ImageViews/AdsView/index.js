import React from "react";
import { View } from "react-native";
import styles from "./indexCss";
import { useNavigation } from "@react-navigation/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { MSemiBoldTextView } from "@components/TextComponents";
import { TouchableOpacity } from "react-native-gesture-handler";

const AdsView = (props) => {
  const { SvgImage, text, onPress, containerStyle, textStyle } = props;
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View
          key="container"
          style={{ ...styles.container, ...containerStyle }}
        >
          <SvgImage width={wp("10")} height={hp("10")} />

          <MSemiBoldTextView style={{ ...styles.text, ...textStyle }}>
            {text}
          </MSemiBoldTextView>
        </View>
      </TouchableOpacity>
    </>
  );
};

AdsView.propTypes = {};

AdsView.defaultProps = {};
export default AdsView;
