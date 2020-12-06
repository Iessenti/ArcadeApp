import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './indexCss';
import PropTypes from 'prop-types';
import {Color} from '@constants';
import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Icon} from 'native-base';
import {MRegularTextView} from '@components/TextComponents';
import {ColorPicker} from 'react-native-color-picker';

const ColorFilter = props => {
  const {color, changeColor} = props;
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <>
      <View
        style={{
          height: isCollapsed ? hp('9') : hp('40'),
          ...styles.container,
          marginBottom: hp('2'),
        }}>
        <View key="header" style={styles.header}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Icon
              name={isCollapsed ? 'plus' : 'minus'}
              type="AntDesign"
              style={styles.icon}
              onPress={() => {
                setIsCollapsed(!isCollapsed);
              }}
            />
            <View style={{marginStart: wp('5')}}>
              <MRegularTextView>Color</MRegularTextView>
            </View>
          </View>
          <View>
            <View
              key="colorPreview"
              style={{...styles.colorView, backgroundColor: color}}
            />
          </View>
        </View>

        <View key="pickerContainer" style={styles.pickerContainer}>
          {!isCollapsed && (
            <ColorPicker
              defaultColor={color}
              onColorSelected={color => {
                changeColor(color);
              }}
              style={styles.picker}
            />
          )}
        </View>
      </View>
    </>
  );
};

ColorFilter.propTypes = {
  color: PropTypes.string,
  changeColor: PropTypes.func,
};

ColorFilter.defaultProps = {
  color: Color.blue,
};
export default ColorFilter;
