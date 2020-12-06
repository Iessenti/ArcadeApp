import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import styles from './indexCss';
import PropTypes from 'prop-types';
import {Color} from '@constants';
import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {CategoryItem} from '@components';
import {Icon} from 'native-base';
import {MRegularTextView} from '@components/TextComponents';
import Collapsible from 'react-native-collapsible';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

const CategoryFilter = props => {
  const {categoryList} = props;
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selectedItems, setSelectedItems] = useState({});
  const [render, setRender] = useState(false);

  useEffect(() => {}, [selectedItems]);

  const renderCategoryItem = data => {
    let isSelected = false;
    if (selectedItems[data.item.title] == true) {
      isSelected = true;
    }
    return (
      <View style={{margin: wp('3')}}>
        <CategoryItem
          text={data.item.title}
          isSelected={isSelected}
          toggle={(data, isSelected) => {
            selectedItems[data] = isSelected;
            console.log(selectedItems);
            setSelectedItems(selectedItems);
            setRender(!render);
          }}
          count={data.item.count}
        />
      </View>
    );
  };
  return (
    <>
      <View
        style={{
          ...styles.container,
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
              <MRegularTextView>Category</MRegularTextView>
            </View>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                setSelectedItems({});
                setRender(!render);
              }}>
              <MRegularTextView style={{color: Color.purpleplum}}>
                Clear
              </MRegularTextView>
            </TouchableOpacity>
          </View>
        </View>

        <View key="sliderContainer" style={{marginTop: hp('0')}}>
          <Collapsible collapsed={isCollapsed} style={{}}>
            <View>
              <FlatList data={categoryList} renderItem={renderCategoryItem} />
            </View>
          </Collapsible>
        </View>
      </View>
    </>
  );
};

CategoryFilter.propTypes = {
  categoryList: PropTypes.array,
};

CategoryFilter.defaultProps = {
  categoryList: [],
};
export default CategoryFilter;
