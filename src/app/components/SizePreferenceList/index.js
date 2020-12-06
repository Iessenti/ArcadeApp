import React from 'react';
import {View} from 'react-native';
import styles from './indexCss';
import PropTypes from 'prop-types';
import {Color, FontSize} from '@constants';
import {useNavigation} from '@react-navigation/native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {MRegularTextView} from '../TextComponents';

const SizePreferenceList = props => {
  const {selectedIndex, onChange} = props;

  const renderBox = data => {
    let isSelected = data.index == selectedIndex ? true : false;
    return (
      <View style={styles.box}>
        <TouchableOpacity
          style={{
            ...styles.touchableRound,
            backgroundColor: isSelected
              ? Color.textColor.fushia
              : Color.light.blue,
          }}
          onPress={() => {
            onChange(data.index);
          }}
        />
      </View>
    );
  };
  const renderTitle = data => {
    let customStyle = {alignItems: 'flex-start'};
    if (data.index == 1) {
      customStyle = {alignItems: 'center'};
    } else if (data.index == 2) {
      customStyle = {alignItems: 'flex-end'};
    }

    return (
      <View style={{...styles.text, ...customStyle}}>
        <MRegularTextView style={styles.item}>{data.item}</MRegularTextView>
      </View>
    );
  };

  return (
    <>
      <View>
        <FlatList
          data={[0, 1, 2, 3, 4]}
          renderItem={renderBox}
          scrollEnabled={false}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.roundFlatlist}
        />
        <FlatList
          data={['Tighter', 'Perfect', 'Looser']}
          renderItem={renderTitle}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.titleFlatList}
        />
      </View>
    </>
  );
};

SizePreferenceList.propTypes = {
  selectedIndex: PropTypes.number,
  onChange: PropTypes.func,
};

SizePreferenceList.defaultProps = {
  selectedIndex: 2,
};
export default SizePreferenceList;
