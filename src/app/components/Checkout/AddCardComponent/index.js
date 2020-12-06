/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {Icon} from 'native-base';
import styles from './indexCss';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';
import {MRegularTextView, MSemiBoldTextView} from '@components/TextComponents';

const AddCardComponent = props => {
  const {editCallback} = props;
  return (
    <>
      <View style={styles.container}>
        <View style={{flex: 90}}>
          <MSemiBoldTextView style={styles.addrLabel}>
            Add New Card
          </MSemiBoldTextView>
          <MRegularTextView style={styles.address}>
            Master Card/ Visa / Paypal
          </MRegularTextView>
        </View>
        <View style={styles.iconContainer}>
          <Icon name="add" onPress={editCallback} style={styles.icon} />
        </View>
      </View>
    </>
  );
};

AddCardComponent.propTypes = {
  address: PropTypes.string,
  editCallback: PropTypes.func,
};

AddCardComponent.defaultProps = {
  address:
    'NY United States, 300 Post Street, 2nd Main road, United States of America 198763',
};
export default AddCardComponent;
