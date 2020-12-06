import React from 'react';
import {View} from 'react-native';
import styles from './indexCss';
import {CheckBox} from 'native-base';
import PropTypes from 'prop-types';
import {Color} from '@constants';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {MRegularTextView} from '@components/TextComponents';

const CategoryItem = props => {
  const {text, isSelected, toggle, count} = props;
  return (
    <>
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <CheckBox
            checked={isSelected}
            onPress={() => {
              toggle(text, !isSelected);
            }}
            color={Color.purpleplum}
          />

          <View style={{marginStart: wp('5')}}>
            <MRegularTextView>{text}</MRegularTextView>
          </View>
        </View>
        <View style={styles.count}>
          <MRegularTextView>{'(' + count + ')'}</MRegularTextView>
        </View>
      </View>
    </>
  );
};

CategoryItem.propTypes = {
  text: PropTypes.string,
  isSelected: PropTypes.bool,
  toggle: PropTypes.func,
  count: PropTypes.number,
};

CategoryItem.defaultProps = {
  text: 'Dresses',
  isSelected: true,
  count: 4564,
};
export default CategoryItem;
