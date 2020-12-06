/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Color} from '@constants';

import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {MRegularTextView, MSemiBoldTextView} from '@components/TextComponents';
import {PriceRangeFilter, CategoryFilter, ColorFilter} from '@components';
import {Icon} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';
import {Category_List} from '@data';

const FilterScreen = props => {
  const {} = props;
  const [sliderRangeTxt, setSliderRangeTxt] = useState(0);
  const [color, setColor] = useState(Color.darknavy);
  const [] = useState(false);

  const renderHeader = () => {
    return (
      <View key="header" style={styles.header}>
        <View style={styles.headerIconView}>
          <Icon
            name="chevron-left"
            type="Entypo"
            style={styles.headerIcon}
            onPress={() => {
              props.navigation.goBack();
            }}
          />
        </View>
        <View style={styles.headerTitle}>
          <MSemiBoldTextView>Filter</MSemiBoldTextView>
        </View>
        <View style={styles.headerRightTxt}>
          <MRegularTextView>Clear</MRegularTextView>
        </View>
      </View>
    );
  };

  return (
    <>
      <View style={styles.container}>
        {renderHeader()}
        <ScrollView style={styles.container}>
          <View style={styles.container}>
            <PriceRangeFilter
              price={sliderRangeTxt}
              maxRange={5000}
              onSliderChage={val => {
                console.log('Slider Value:', Number(val).toFixed(0));
                setSliderRangeTxt('$0-' + String(Number(val).toFixed(0)));
              }}
            />
            <View style={styles.categoryView}>
              <CategoryFilter categoryList={Category_List} />
            </View>
            <View style={styles.colorFilterView}>
              <ColorFilter
                color={color}
                changeColor={color => {
                  setColor(color);
                }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

FilterScreen.propTypes = {};

FilterScreen.defaultProps = {};

const styles = StyleSheet.create({
  container: {flex: 1},
  header: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
    paddingTop: hp('5'),
    paddingBottom: hp('2'),
  },
  headerIconView: {flexDirection: 'row', alignItems: 'center', flex: 1},
  headerIcon: {marginStart: wp('5'), color: Color.textColor.primary},
  headerTitle: {
    marginStart: wp('5'),
    alignSelf: 'center',
    flex: 1,
    alignItems: 'center',
  },
  headerRightTxt: {
    flex: 1,
    alignItems: 'flex-end',
    marginEnd: wp('5'),
  },
  categoryView: {marginTop: hp('2'), marginBottom: hp('2')},
  colorFilterView: {marginTop: hp('2'), marginBottom: hp('2')},
});

export default FilterScreen;
