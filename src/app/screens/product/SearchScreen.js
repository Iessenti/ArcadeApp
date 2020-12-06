/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
//import styles from './indexCss';
import PropTypes from 'prop-types';
import {Color, FontSize} from '@constants';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Icon, Input, Form, Item} from 'native-base';
import {
  MLightTextView,
  MRegularTextView,
  MSemiBoldTextView,
} from '@components/TextComponents';
import {SquareButton, ProductView} from '@components';
import { ScrollView, FlatList } from "react-native-gesture-handler";

const SearchScreen = ({navigation, route}) => {
  const {} = props;
  const navigation = useNavigation();
  const [query, setQuery] = useState('');
  const [ProductList, setProductList] = useState(false);
  const [updateViews, setUpdateViews] = useState(false);



  const renderHeader = () => {
    return (
      <View key="header" style={styles.header}>
        <View style={styles.headerIconView}>
          <Icon
            name="chevron-left"
            type="Entypo"
            style={styles.headerIcon}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
      </View>
    );
  };

  const tags = [
    {
      id: 1,
      name: 'Boot',
    },
    {
      id: 2,
      name: 'Coat',
    },
    {
      id: 3,
      name: 'Dress',
    },
  ];

  const renderTags = data => {
    return (
      <View style={styles.tagItemView}>
        <SquareButton
          type="tags"
          width={wp('30')}
          height={hp('4')}
          onPress={() => {
            setQuery(data.item.name);
          }}>
          {data.item.name}
        </SquareButton>
      </View>
    );
  };

  const renderProduct = data => {
    return (
      <View style={styles.productView}>
        <ProductView
          image={data.item.image}
          price={data.item.price}
          title={data.item.name}
          isFav={data.item.isFav}
          onPress={() => {
            props.navigation.navigate('ProductDetailsScreen', { fav: false, mainImage: data.item.mainPhoto, secImage: data.item.secPhoto, thiImage: data.item.thiPhoto, sizes: data.item.sizes, description:data.item.description, price: data.item.price, title: data.item.title, id: data.item.id });
          }}
          favToggle={() => {
            let prodList = ProductList;
            prodList[data.index].isFav = !data.item.isFav;
            setProductList(prodList);
            setUpdateViews(!updateViews);
          }}
        />
      </View>
    );
  };
  return (
    <>
      <View>
        {renderHeader()}
        <ScrollView>
          <View style={styles.titleContainer}>
            <MSemiBoldTextView style={styles.title}>
              What are you looking for?
            </MSemiBoldTextView>
          </View>
          <Form>
            <Item style={styles.item}>
              <Input
                placeholder="Search"
                placeholderTextColor={Color.textColor.secondary}
                multiline={false}
                keyboardType="default"
                value={query}
                onChangeText={val => {
                  setQuery(val);
                }}
                style={styles.inputSearch}
              />
            </Item>
          </Form>
          <View style={styles.tagsFlatListView}>
            <FlatList
              data={tags}
              horizontal={true}
              renderItem={renderTags}
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id}
            />
          </View>
          <View style={styles.recentSearchView}>
            <MSemiBoldTextView style={styles.recentSearch}>
              Recent Searches
            </MSemiBoldTextView>
          </View>
          <View style={styles.flatlistView}>
            <FlatList
              scrollEnabled={true}
              contentContainerStyle={{
                marginTop: hp('2'),
              }}
              data={ProductList}
              renderItem={renderProduct}
              numColumns={2}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

SearchScreen.propTypes = {};

SearchScreen.defaultProps = {};

const styles = StyleSheet.create({
  container: {flex: 1},
  header: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: hp('5'),
    paddingBottom: hp('2'),
    borderBottomEndRadius: wp('5'),
    borderBottomStartRadius: wp('5'),
  },
  headerIconView: {flexDirection: 'row', alignItems: 'center', flex: 1},
  headerIcon: {marginStart: wp('5'), color: Color.textColor.primary},
  headerTitle: {},
  tagItemView: {marginStart: wp('3')},
  productView: {
    flexDirection: 'row',
    width: wp('50'),
  },
  titleContainer: {marginStart: wp('5'), marginTop: hp('2')},
  title: {
    fontSize: FontSize.Text20,
    fontFamily: 'Montserrat-SemiBold',
    color: Color.textColor.primary,
  },
  item: {
    marginStart: wp('5'),
    marginEnd: wp('10'),
    marginTop: hp('2'),
  },
  inputSearch: {
    color: Color.light.red,
    fontSize: FontSize.Text28,
    fontFamily: 'Montserrat-SemiBold',
  },
  flatlistView: {marginTop: hp('1'), marginBottom: hp('10')},
  recentSearch: {
    fontSize: FontSize.Text16,
    fontFamily: 'Montserrat-SemiBold',
    color: Color.textColor.primary,
  },
  recentSearchView: {marginStart: wp('5'), marginTop: hp('5')},
  tagsFlatListView: {marginTop: hp('3')},
});

export default SearchScreen;
