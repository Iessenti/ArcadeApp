/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';

import Modal from 'react-native-modal';
import PropTypes from 'prop-types';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Icon} from 'native-base';
import styles from './indexCss';
import {Color} from '@constants';
import {FlatList} from 'react-native-gesture-handler';
import {MSemiBoldTextView} from '@components/TextComponents';

const SortBottomDialog = props => {
  const {onClickBtn, onClickOverlay, show, filterData, selectedIndex} = props;

  const renderFilterItem = data => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            onClickBtn(data.index);
          }}>
          <View
            style={{
              backgroundColor:
                selectedIndex == data.index ? Color.light.blue : Color.white,
              ...styles.filterItem,
            }}>
            <MSemiBoldTextView>{data.item.name}</MSemiBoldTextView>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const modalContent = (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <View style={styles.closeContainer}>
          <TouchableWithoutFeedback onPress={onClickOverlay}>
            <Icon
              name="closecircleo"
              type="AntDesign"
              style={{
                color: Color.darknavy,
              }}
            />
          </TouchableWithoutFeedback>
        </View>
        <View style={{marginTop: hp('7')}}>
          <FlatList
            data={filterData}
            renderItem={renderFilterItem}
            snapToEnd={true}
            keyExtractor={item => item.id}
            scrollEnabled={false}
          />
        </View>
      </View>
    </View>
  );

  return (
    <Modal
      isVisible={show}
      onBackButtonPress={onClickOverlay}
      animationIn="fadeInUp"
      animationOut="fadeOutDownBig"
      onBackdropPress={onClickOverlay}
      onSwipeComplete={onClickOverlay}
      swipeDirection="down"
      style={{margin: 0}}>
      <View style={{flex: 1, alignItems: 'center'}}>{modalContent}</View>
    </Modal>
  );
};

SortBottomDialog.propTypes = {
  onClickBtn: PropTypes.func,
  onClickOverlay: PropTypes.func,
  show: PropTypes.bool.isRequired,
  filterData: PropTypes.array.isRequired,
  selectedIndex: PropTypes.number,
};

SortBottomDialog.defaultProps = {
  selectedIndex: 0,
  // eslint-disable-next-line prettier/prettier
  filterData: [
    {name: 'Popular', id: 0},
    {name: 'Most Viewed', id: 1},
  ],
};

export default SortBottomDialog;
