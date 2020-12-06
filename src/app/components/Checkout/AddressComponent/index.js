/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View} from 'react-native';
import {Icon} from 'native-base';
import styles from './indexCss';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';
import {MRegularTextView, MSemiBoldTextView} from '@components/TextComponents';
import {TouchableWithoutFeedback, } from "react-native-gesture-handler";

const AddressComponent = props => {
  const {address, editCallback, phone, onPress} = props;
  const [visibility, setVisibility] = useState(false)
    return (
      <>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
          <View style={{flex: 90}}>
            <MSemiBoldTextView style={styles.addrLabel}>
              {address}
            </MSemiBoldTextView>
            <MRegularTextView style={styles.address}>{phone}</MRegularTextView>
          </View>
        </View>
      </TouchableWithoutFeedback>
      </>
    );
};

AddressComponent.propTypes = {
  address: PropTypes.string,
  editCallback: PropTypes.func,
};

export default AddressComponent;
