import React from 'react';
import {View} from 'react-native';
import styles from './indexCss';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Icon} from 'native-base';
import {MSemiBoldTextView} from '@components/TextComponents';
import {TouchableOpacity} from 'react-native-gesture-handler';

const MenuItem = props => {
  const {text, onPress, iconName, iconTheme} = props;
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
          <Icon name={iconName} type={iconTheme} style={styles.menuIcon} />
          <View style={{marginStart: wp('5')}}>
            <MSemiBoldTextView>{text}</MSemiBoldTextView>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

MenuItem.propTypes = {
  iconName: PropTypes.string,
  iconTheme: PropTypes.string,
  onPress: PropTypes.func,
  text: PropTypes.string,
};

MenuItem.defaultProps = {
  iconTheme: '',
  iconName: 'home',
  text: 'Home',
};
export default MenuItem;
