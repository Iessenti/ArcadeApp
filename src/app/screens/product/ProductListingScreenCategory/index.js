/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './indexCss';
import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Icon} from 'native-base';
import {MSemiBoldTextView} from '@components/TextComponents';
import {SquareButton, ProductView} from '@components';
import {Picture, Camera, Delivery} from '@images';
import {FlatList} from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import { NavigationContainer } from '@react-navigation/native';

const FILTER_DATA = [
  {
    id: 0,
    name: 'Popular',
  },
  {
    id: 1,
    name: 'Low to High',
  },
  {
    id: 2,
    name: 'High to Low',
  },
  {
    id: 3,
    name: 'Most Viewed',
  },
];

const ProductListingScreenCategory = ({navigation, route}) => {
  // const {sex} = props;
  const [Title, setTitle] = useState('');
  const [ProductList, setProductList] = useState([]);
  const [updateViews, setUpdateViews] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [filterData] = useState(FILTER_DATA);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [savedList, setSavedList] = useState(0)

   useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => { 
     	const iCategory = {category: route.params.category, type: route.params.type}
      	let response = await fetch('http://80.249.151.43/getProductsByCatOrBrand', {method:"POST", headers: {'Content-Type': 'application/json;charset=utf-8'}, body: JSON.stringify(iCategory)} )
      	const data = await response.json()
      	setProductList(data)
      	setTitle(route.params.category)
    })
    return unsubscribe;
  }, [navigation, route.params]);

  const updateHeading = val => {
    setGenderType(val);
  };

  const renderHeader = () => {
    return (
      <View key="header" style={styles.header}>
        <View style={styles.headerIconContainer}>
          <Icon
            name="chevron-left"
            type="Entypo"
            style={styles.headerIcon}
            onPress={() => {
              // navigation.closeDrawer();
              setProductList(false);
              setTitle(false);
              navigation.goBack();
            }}
          />
        </View>
        <View style={styles.otherIconView}>
          <Icon
            name="ios-cart"
            type="Ionicons"
            style={styles.headerIcon}
            onPress={() => {
              navigation.navigate('CartScreen');
            }}
          />
        </View>
      </View>
    );
  };

  const renderProduct = data => {
        return (
          <View style={styles.productContainer}>
            <ProductView
              image={data.item.mainPhoto}
              price={data.item.price}
              title={data.item.title}
              onPress={() => {
                navigation.navigate('ProductDetailsScreen', { fav: false, mainImage: data.item.mainPhoto, secImage: data.item.secPhoto, thiImage: data.item.thiPhoto, sizes: data.item.sizes, description:data.item.description, price: data.item.price, title: data.item.title, id: data.item.id });
              }}
            />
          </View>
        )
  };

  return (
    <>
      <View style={styles.container}>
        {renderHeader()}
        {/* <ScrollView> */}
        <View>
          <MSemiBoldTextView style={styles.clothingText}>
            {Title}
          </MSemiBoldTextView>
{/*          <View style={styles.sortFilterView}>
            <SquareButton
              type="sort"
              SvgImage={Picture}
              width={wp('30')}
              height={hp('4')}
              onPress={() => {
                setShowModal(!showModal);
              }}
            />
            <SquareButton
              type="filter"
              SvgImage={Camera}
              width={wp('30')}
              height={hp('4')}
              onPress={() => {
                props.navigation.navigate('FilterScreen');
              }}
            />
          </View>*/} 
          <View style={styles.flatlistContainer}>
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
        </View>
        {/* </ScrollView> */}
      </View>
    </>
  );
};

ProductListingScreenCategory.propTypes = {
};

ProductListingScreenCategory.defaultProps = {};
export default ProductListingScreenCategory;