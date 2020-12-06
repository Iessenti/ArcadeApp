/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {AdsView, ClothesCollectionView, SquareImageView, RecommendedProduct,} from '@components';
import {FeaturedCollectionView} from '@hoc';
import {Delivery, featured_1, featured_2} from '@images';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './indexCss';
import {category_1, category_2, category_3, category_4, men, women, girls, boys} from '@images';
import {MSemiBoldTextView,} from "@components/TextComponents";
import AsyncStorage from '@react-native-community/async-storage';

const Categories = [
  {
    name: 'Shoes',
    image: category_1,
  },
  {
    name: 'Bags',
    image: category_2,
  },
  {
    name: 'Jewelery',
    image: category_3,
  },
  {
    name: 'Jeans',
    image: category_4,
  },
];

const imageUrl =
  'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=300';

const Home = props => {
  const {} = props;
  const navigation = useNavigation();

  return (
    <>
      <ScrollView>
        <View style={{}}>
          <AdsView
            SvgImage={Delivery}
            text="Worldwide Shipping"
          />


          <SquareImageView
              image={men}
              text="Men"
              isLeft={false}
              containerStyle={{marginTop: hp('1'), marginBotton: hp('2')}}
              onPress={() => {
              navigation.navigate('ProductListingScreenSex', {sex:'Men'});
              }}
              
          />
          <SquareImageView
              image={women}
              text="Women"
              isLeft={true}
              onPress={() => {
              navigation.navigate('ProductListingScreenSex', {sex: 'Women'});
              }}
          />

          <FlatList
            data={Categories}
            numColumns="2"
            contentContainerStyle={{
              flex: 1,
              alignItems: 'center',
              marginBottom: hp('5'),
            }}
            renderItem={data => {
                              const xx = data.item.name
              return (

                <View style={styles.clothsCollectionContainer}>
                  <ClothesCollectionView
                    image={data.item.image}
                    text={data.item.name}
                    onPress={() => {
                      navigation.navigate('ProductListingScreenCategory', {type: 'C', category: data.item.name });
                    }}
                  />
                </View>
              );
            }}
          />

        </View>
      </ScrollView>
    </>
  );
};

Home.propTypes = {};

Home.defaultProps = {};
export default Home;
