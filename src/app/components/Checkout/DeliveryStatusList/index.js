import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';
import {StatusIconButton} from '@components';
/**
 * status: payment-received, order-confirmed, shipped, delivered
 */
const DeliveryStatusList = props => {
  const {payment, invoice, shipped, delivered} = props;
  return (
    <>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <StatusIconButton
          showNext={true}
          status={payment}
          iconName="dollar"
          iconType="FontAwesome"
        />
        <StatusIconButton
          showNext={true}
          status={invoice}
          iconName="file-invoice"
          iconType="FontAwesome5"
        />
        <StatusIconButton
          showNext={true}
          status={shipped}
          iconName="local-shipping"
          iconType="MaterialIcons"
        />
        <StatusIconButton
          showNext={false}
          status={delivered}
          iconName="check-circle"
          iconType="Feather"
        />
      </View>
    </>
  );
};

DeliveryStatusList.propTypes = {
  payment: PropTypes.string.isRequired,
  invoice: PropTypes.string.isRequired,
  shipped: PropTypes.string.isRequired,
  delivered: PropTypes.string.isRequired,
};

DeliveryStatusList.defaultProps = {
  payment: 'done',
  invoice: 'active',
  shipped: 'inactive',
  delivered: 'inactice',
};
export default DeliveryStatusList;
