import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import styles from './indexCss';
import PropTypes from 'prop-types';
import {Color, FontSize} from '@constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {ScrollView} from 'react-native-gesture-handler';
import {NewItemsView} from '@hoc';
import {NewProduct} from '@components';
import {p1, p14, p13, p5, p6} from '@images';

const imageUrl =
  'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=300';

import {featured_1} from '@images';
import {
  MLightTextView,
  MRegularTextView,
  MSemiBoldTextView,
} from '@components/TextComponents';

const NewIn = props => {
  const {} = props;
  const navigation = useNavigation();

  return (
    <>
      <ScrollView>
        <View>
          <NewItemsView
            image={featured_1}
            onPress={() => {
              navigation.navigate('ProductListingScreenCategory', {category: "All", type: 'A' });
            }}
          />
          <View style={styles.heading}>
            <MSemiBoldTextView>Popular brands</MSemiBoldTextView>
          </View>
          <View style={styles.container}>
            <View style={styles.item}>
              <NewProduct
                text="Casuals"
                image={p1}
                onPress={() => {
                  navigation.navigate('ProductListingScreenCategory', {category: "Casuals", type: "C"});
                }}
              />
            </View>
            <View style={styles.item}>
              <NewProduct
                text="Bags"
                image={p14}
                onPress={() => {
                  navigation.navigate('ProductListingScreenCategory', {category: "Bags", type: "C"});
                }}
              />
            </View>
            <View style={styles.item}>
              <NewProduct
                text="Ivory Top"
                image={p13}
                onPress={() => {
                  navigation.navigate('ProductListingScreenCategory', {category: "Ivory Top", type: "C"});
                }}
              />
            </View>
            <View style={styles.item}>
              <NewProduct
                text="Sunglasses"
                image={p5}
                onPress={() => {
                  navigation.navigate('ProductListingScreenCategory', {category: "Sunglasses", type: "C"});
                }}
              />
            </View>
            <View style={styles.item}>
              <NewProduct
                text="Yellow Hoodie"
                image={p6}
                onPress={() => {
                  navigation.navigate('ProductListingScreenCategory', {category: "Hoodie", type: "C"});
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

NewIn.propTypes = {};

NewIn.defaultProps = {};
export default NewIn;
