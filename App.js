import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View } from "react-native";

import RootNavigator from "./src/app/RootNavigator";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import AsyncStorage from '@react-native-community/async-storage';

let customFonts = {
  "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
  "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
  "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf"),
};
console.disableYellowBox = true;


export default App = props => {
  const {} = props;
  const [fontsLoaded, setFontsLoaded] = useState(false)
  const [isFirstLaunch, setIsFirstLaunch] = useState(false)
  const [component, setComponent] = useState(<AppLoading />)


  const _loadFontsAsync = async () => {
    try {
      const res = await Font.loadAsync(customFonts);
      setFontsLoaded(true);
    } catch (err) {
      setFontsLoaded(true);
    }
  }
  
  const checkIfFirstLaunch = async () =>  {
      const hasLaunched = JSON.parse(await AsyncStorage.getItem('HAS_LAUNCHED'))
      console.log(typeof hasLaunched)
      if (hasLaunched != '2') {
        await AsyncStorage.setItem('HAS_LAUNCHED', JSON.stringify('2'))
        await AsyncStorage.setItem('CartItems', JSON.stringify([]))
        await AsyncStorage.setItem('FavItems', JSON.stringify([]))
        await AsyncStorage.setItem('addressList', JSON.stringify([]))
        await AsyncStorage.setItem('PrevItems', JSON.stringify([]))
        await AsyncStorage.setItem('RegData', JSON.stringify({email: '', password: '', name: ''}))   
        await AsyncStorage.setItem('orderArray', JSON.stringify([]))
        return true;
      } 
      return false
  }

  useEffect(() => {
      _loadFontsAsync()
      checkIfFirstLaunch()

  }, [])

  return (
      fontsLoaded ?
        <RootNavigator /> :
        <AppLoading />
      
  )
}
