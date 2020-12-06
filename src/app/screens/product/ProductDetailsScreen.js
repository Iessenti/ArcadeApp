/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Color, FontSize } from "@constants";

import { useNavigation } from "@react-navigation/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Icon } from "native-base";
import {
  ImageCarousel,
  FavButton,
  RoundedButton,
  RecommendedProduct,
  CheckoutScreen
} from "@components";
import {
  MRegularTextView,
  MSemiBoldTextView,
  GTEestiProText,
} from "@components/TextComponents";
import { ScrollView, FlatList } from "react-native-gesture-handler";
import { p1, p2, p3, p4, p5, p6, p7, p8 } from "@images";
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const errorMessage = props => {
  return (
    <View style={styles.errorContainer}>
      <GTEestiProText style={styles.error}>Please, choose a size</GTEestiProText>
    </View>
  )
}

const ProductDetailsScreen = ({navigation, route}) => {
  const [isFav2, setIsFav2] = useState(false);
  const [itemIsCart, setItemIsCart] = useState(false)
  const [ModalVisible, setModalVisible] = useState(false);
  const [FavList, setFavList] = useState(false)
  const [cartList, setCartList] = useState(false)
  const [previousList, setPrevList] = useState(false)
  const [sizeRow, setSizeRow] = useState(false)
  const [secSizeArr, setSecSizeArr] = useState(false)
  const [sizeCho, setSizeCho] = useState(false)
  const [error, setError] = useState(false)
  const [canCartSize, setCanCartSize] = useState(false)
  const [sizesTitle, setSizesTitle] = useState(false)
  const [oneSizeState, setOneSizeState] = useState(false)
  let sizesArr = []
  let style = ''
  let textStyle = ''

  const setSizes = async (chElem) => {
        let row = sizesArr.map( (elem, index) => {
          if (chElem == elem) {
            style = styles.ilumCell
            textStyle = styles.ilumCellText
          } else {
            style = styles.cell
            textStyle = styles.cellText
          }
          return (<TouchableOpacity key={index} style={style} onPress={() => { setSizeCho(elem); setSizes(elem) }}><Text style={textStyle}>{elem}</Text></TouchableOpacity>)
        })
        setSizeRow(row)
  }

   useEffect(() => {


    const unsubscribe = navigation.addListener('focus', async () => {
      setSizeRow(false)

      const Fav = JSON.parse(await AsyncStorage.getItem('FavItems'))
      setIsFav2(false)
      setFavList(Fav)
      for (let i = 0; i < Fav.length; i++) {
        if (Fav[i].id == route.params.id) {
          setIsFav2(true)
          break
        } else { setIsFav2(false) }
      }
       

      const isCart = JSON.parse(await AsyncStorage.getItem('CartItems'))
      setCartList(isCart)
      setItemIsCart(false)
      for (let i = 0; i < isCart.length; i++) {
        if (isCart[i].id == route.params.id) {
          setItemIsCart(true)
          setCanCartSize(isCart[i].size)
          break
        } else { setItemIsCart(false); setCanCartSize(false) }
      }

      setSizeCho(false)
      setOneSizeState(false)

      if (route.params.sizes != 'one'){
          const sizeStr = route.params.sizes
          let posArr = []
          const target = ' '
          let position = 0;
          let pos = -1;
          while ((pos = sizeStr.indexOf(target, pos + 1)) != -1) {
            posArr.push(pos)
          }
          
          for (let i = 0; i < (posArr.length + 1); i++) {
            let str = sizeStr.slice(position, posArr[i])
            if (str[2] != 0) {
              sizesArr.push(str[0] + str[1])
            }
            position = posArr[i] + 1
          }

          setSizesTitle('Available sizes:')

      } else {

        setSizesTitle('Available just one size')
        setSizeCho('One size')
        setOneSizeState(true)
      } 

        setSizes()
        setError(false)
      
    })

    return unsubscribe;
  }, [navigation, route.params]);
  


  const setFavItem = async (list) => {
    await AsyncStorage.setItem('FavItems', JSON.stringify(list))
  }

  const setCartItem = async (list) => {
    await AsyncStorage.setItem('CartItems', JSON.stringify(list))
  }

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
        <View style={styles.headerCartIconView}>
          <Icon
            name="ios-cart"
            type="Ionicons"
            style={styles.headerIcon}
            onPress={() => {
              navigation.navigate("CartScreen");
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <>
      <View>
        {renderHeader()}
        <ScrollView style={styles.scrollView}>
          <View style={styles.imageCarouselView}>
            <ImageCarousel
              Photos={[route.params.mainImage, route.params.secImage, route.params.thiImage]}
            />
          </View>
          <View style={styles.favBtnView}>
            <FavButton
              favToggle={ () => {

                if (isFav2 === false) {
                  FavList.push({ mainImage: route.params.mainImage, secImage: route.params.secImage, thiImage: route.params.thiImage, sizes: route.params.sizes, description: route.params.description, price: route.params.price, title: route.params.title, id: route.params.id})
                  setFavItem(FavList)
                  setIsFav2(true)                  
                } else if (isFav2 === true) {
                  setIsFav2(false)
                  for (let i=0; i < FavList.length; i++) {
                    if (FavList[i].id == route.params.id) {
                      FavList.splice(i,1)
                      setFavItem(FavList)
                      
                    }
                  }
                } 
              }}
              isFav={isFav2}
            />
          </View>
          <View key="txtContainer" style={styles.txtContainer}>
            <MRegularTextView key="title" style={styles.title}>
              {route.params.title}
            </MRegularTextView>
            <MSemiBoldTextView key="price" style={styles.price}>
              {route.params.price}
            </MSemiBoldTextView>
          </View>
          <View style={styles.sizesContainer}>
            <Text style={styles.sizesContainerText}>{sizesTitle}</Text>
            { oneSizeState ? <View></View> :
              <ScrollView  horizontal={true} contentContainerStyle={styles.sizesRowContainer}>
                {sizeRow}
              </ScrollView>
            }
          </View>
          {error}
          <View style={styles.twoBtnView}>
            <RoundedButton
              type="colorButton"
              width={wp("35")}
              height={hp("5")}
              color="#FCD755"
              onPress= { () => {
                if (sizeCho === false) {
                  setError(errorMessage)
                  return false
                } else {
                      setError(false)
                      cartList.push({ mainImage: route.params.mainImage, size: sizeCho, price: route.params.price, title: route.params.title, id: route.params.id})
                      setCartItem(cartList)
                      setItemIsCart(true)
                      return true
                }
              }}>
              To cart
            </RoundedButton>
            <RoundedButton type="primary" width={wp("35")} height={hp("5")} onPress={() => {if (sizeCho != false) {setError(false); navigation.navigate('CheckoutScreen', { total: parseInt(route.params.price), order: [{ title: route.params.title, id: route.params.id, price: route.params.price, mainImage: route.params.mainImage, size: sizeCho}] })} else {setError(errorMessage)}}}>
              Buy
            </RoundedButton>
          </View>
          <MRegularTextView style={styles.desc}>
            {route.params.description}
          </MRegularTextView>
        </ScrollView>
      </View>
    </>
  );
};

ProductDetailsScreen.propTypes = {};

ProductDetailsScreen.defaultProps = {};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: hp("5"),
    paddingBottom: hp("2"),
    borderBottomEndRadius: wp("5"),
    borderBottomStartRadius: wp("5"),
  },
  headerIconView: { flexDirection: "row", alignItems: "center", flex: 1 },
  headerIcon: { marginStart: wp("5"), color: Color.textColor.primary },
  headerCartIconView: {
    flexDirection: "row",
    justifyContent: "flex-end",
    flex: 1,
    marginEnd: wp("5"),
  },
  scrollView: { marginBottom: hp("15") },
  imageCarouselView: { marginTop: hp("2") },
  favBtnView: {
    alignSelf: "flex-end",
    marginEnd: wp("10"),
    marginTop: hp("-2"),
  },
  txtContainer: { marginStart: wp("5") },
  title: {
    color: Color.textColor.secondary,
    fontSize: FontSize.Text22,
    fontFamily: "Montserrat-Regular",
  },
  desc: {
    margin: wp("5"),
    color: Color.textColor.secondary,
    fontFamily: "Montserrat-Regular",
  },
  price: {
    color: Color.textColor.primary,
    fontSize: FontSize.Text22,
    marginTop: hp("0.5"),
    fontFamily: "Montserrat-Regular",
  },
  twoBtnView: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: hp("2"),
  },
  sizesRowContainer: {
    flexDirection: 'row',
    marginTop: hp('2'),
    // marginRight: wp('20'),
    paddingRight: wp('10'),
    justifyContent: 'center',
    paddingBottom: hp('1'),
  },
  sizesContainer: {
    marginTop: hp('2'),
    justifyContent: 'center',
    marginLeft: wp('8'),
  }, 
  sizesContainerText: {
    fontSize: FontSize.Text16,
    fontFamily: "Montserrat-Regular",
    color: Color.textColor.primary,
    justifyContent: 'center',
  },
  cell: {
    padding: 10,
    borderColor: Color.textColor.secondary,
    borderWidth: 0.5,
    marginLeft: wp('0.8'),
    borderRadius: wp('2'),
  },
  ilumCell: {
    backgroundColor: '#FCD755',
    padding: 10,
    borderColor: '#FCD755',
    color: '#ff2d88',
    borderWidth: 0.5,
    marginLeft: wp('0.8'),
    borderRadius: wp('2'),
  },
  cellText: {
    fontSize: FontSize.Text20,
    color: Color.textColor.primary,
  },
  ilumCellText: {
    fontSize: FontSize.Text20,
    color: '#ff2d88',
  },
  errorContainer: {alignItems: 'center', marginTop: hp('2'),},
  error: { color: '#ff2d88', fontSize: FontSize.Text16},
});

export default ProductDetailsScreen;
