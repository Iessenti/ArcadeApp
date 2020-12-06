/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Thumbnail, Icon } from "native-base";
import styles from "./indexCss";
import PropTypes from "prop-types";
import { useNavigation } from "@react-navigation/native";

//import ImagePicker from 'react-native-image-picker';
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

/**
 * For configuring the options:
 * Refer : https://github.com/react-native-community/react-native-image-picker/blob/master/docs/Reference.md#options
 */
const options = {
  title: "Select Profile Image",
  customButtons: [{ name: "fashion_ecommerce", title: "Choose Photo" }],
  storageOptions: {
    skipBackup: true,
    path: "images",
  },
};

const ImageUploadView = (props) => {
  const { url } = props;
  const [avatarSource, setSvatarSource] = useState();

  useEffect(() => {
    if (url) {
      setSvatarSource({ uri: url });
    }
  }, [url]);

  const showImagePickerDialog = async () => {
    // ImagePicker.showImagePicker(options, (response) => {
    //   //console.log('Response = ', response);

    //   if (response.didCancel) {
    //     console.log("User cancelled image picker");
    //   } else if (response.error) {
    //     console.log("ImagePicker Error: ", response.error);
    //   } else if (response.customButton) {
    //     console.log("User tapped custom button: ", response.customButton);
    //   } else {
    //     const source = { uri: response.uri };
    //     // You can also display the image using data:
    //     // const source = { uri: 'data:image/jpeg;base64,' + response.data };
    //     setSvatarSource(source);
    //   }
    // });

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      const source = { uri: result.uri };
      // You can also display the image using data:
      // const source = { uri: 'data:image/jpeg;base64,' + response.data };
      setSvatarSource(source);
    }
  };

  return (
    <>
      <View key="container" style={styles.container}>
        <View>
          <Thumbnail
            key="thumbnail"
            source={avatarSource}
            large
            style={styles.thumbnail}
          />

          <View key="plusIconContainer" style={styles.plusIconContainer}>
            <Icon
              key="plusIcon"
              onPress={showImagePickerDialog}
              name="plus"
              type="Entypo"
              style={styles.plusIcon}
            />
          </View>
        </View>
      </View>
    </>
  );
};

ImageUploadView.propTypes = {
  url: PropTypes.string,
};

ImageUploadView.defaultProps = {};
export default ImageUploadView;
