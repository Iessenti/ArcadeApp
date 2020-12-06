/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import styles from './indexCss';
import {Icon} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {MasterCard} from '@images';
import {MRegularTextView, MSemiBoldTextView} from '@components/TextComponents';

const CreditCardComponent = props => {
  const {state, visibility} = props;
  return (
      <>
      <TouchableWithoutFeedback onPress={() => {
        if (visibility == false) {setVisibility(<View style={styles.iconContainer}></View>)} else {setVisibility(false)}
        }}>
        <View style={styles.container}>
          <View style={{flex: 90}}>
            <MSemiBoldTextView style={styles.addrLabel}>
              {address}
            </MSemiBoldTextView>
            <MRegularTextView style={styles.address}>{phone}</MRegularTextView>
          </View>
          <View style={{flex: 10}}>
            <Icon name="check" type="FontAwesome5" style={styles.icon} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

CreditCardComponent.propTypes = {};

CreditCardComponent.defaultProps = {
  cardType: 'Mastercard',
  lastDigits: '8789',
};
export default CreditCardComponent;
