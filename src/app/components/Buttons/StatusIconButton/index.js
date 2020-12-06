/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {Icon} from 'native-base';
import styles from './indexCss';
import PropTypes from 'prop-types';
import {Color} from '@constants';
import {useNavigation} from '@react-navigation/native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const StatusIconButton = props => {
  const {status, showNext, iconName, iconType} = props;
  let bgColor = Color.light.purple;
  let iconColor = Color.purpleplum;
  if (status == 'active' || status == 'done') {
    bgColor = Color.purpleplum;
    iconColor = Color.white;
  }
  return (
    <>
      <View>
        <View style={{flexDirection: 'row'}}>
          <View style={{...styles.container, backgroundColor: bgColor}}>
            <Icon
              name={iconName}
              type={iconType}
              style={{fontSize: hp('2'), color: iconColor}}
            />
          </View>
          {showNext == true ? (
            <View style={{justifyContent: 'center'}}>
              <Icon
                name="navigate-next"
                type="MaterialIcons"
                style={{
                  color:
                    status == 'inactive'
                      ? Color.textColor.secondary
                      : Color.textColor.primary,
                }}
              />
            </View>
          ) : null}
        </View>
        {status === 'done' ? (
          <View style={styles.doneContainer}>
            <Icon name="checkcircle" type="AntDesign" style={styles.doneIcon} />
          </View>
        ) : null}
      </View>
    </>
  );
};

StatusIconButton.propTypes = {
  status: PropTypes.string,
  showNext: PropTypes.bool,
  iconName: PropTypes.string.isRequired,
  iconType: PropTypes.string.isRequired,
};

StatusIconButton.defaultProps = {
  status: 'active',
  showNext: true,
};
export default StatusIconButton;
