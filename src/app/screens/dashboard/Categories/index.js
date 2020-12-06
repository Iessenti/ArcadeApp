import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {CategoryView} from '@components';

const imageUrl =
  'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=300';

import {
  featured_1,
  category_1,
  category_2,
  category_3,
  category_4,
  pd21,
} from '@images';

const Categories = props => {
  const {} = props;
  const navigation = useNavigation();
  return (
    <>
      <ScrollView>
        <View>
          <CategoryView
            image={category_1}
            text="Shoes"
            onPress={() => {
              navigation.navigate('ProductListingScreenCategory', {type: 'C', category: 'Shoes'});
            }}
          />
          <CategoryView
            text="Jacket"
            image={{uri: imageUrl}}
            onPress={() => {
              navigation.navigate('ProductListingScreenCategory', {type: 'C', category: 'Jacket'});
            }}
          />
          <CategoryView
            image={category_2}
            text="Bags"
            onPress={() => {
              navigation.navigate('ProductListingScreenCategory', {type: 'C', category: 'Bags'});
            }}
          />
          <CategoryView
            text="Tops"
            image={pd21}
            onPress={() => {
              navigation.navigate('ProductListingScreenCategory', {type: 'C', category: 'Tops'});
            }}
          />
          <CategoryView
            image={category_3}
            onPress={() => {
              navigation.navigate('ProductListingScreenCategory', {type: 'C', category: 'Jewelery'});
            }}
            text="Jewelery"
          />
          <CategoryView
            text="Denim"
            image={category_4}
            onPress={() => {
              navigation.navigate('ProductListingScreenCategory', {type: 'C', category: 'Denim'});
            }}
          />
        </View>
      </ScrollView>
    </>
  );
};

Categories.propTypes = {};

Categories.defaultProps = {};
export default Categories;
