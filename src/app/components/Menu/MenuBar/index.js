/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, {useState, useEffect} from "react";
import { View } from "react-native";
import styles from "./indexCss";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { ProfileView, MenuItem } from "@components";
import { profile } from "@images";
import { Icon } from "native-base";
import { MRegularTextView } from "@components/TextComponents";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from '@react-native-community/async-storage';


const MenuBar =  ({navigation, route}) => {
  const [isLog, setIsLog] = useState(false)
  const [regData, setRegData] = useState({name: 'Имя пользователя', phone: 'Неизвестно'})
  const [logout, setLogout] = useState(false)

  useEffect(() => {
    const getData = async () => {
      const data = JSON.parse(await AsyncStorage.getItem('RegData'))
      if ((data.email != '') && (data.name != '')) {
        setIsLog(true)
        setLogout(logoutButton)
        setRegData({phone: data.phone, name: data.name})
      } else {
        setRegData({phone: '', name: 'Log in'})
        setLogout(false)
        setIsLog(false)
      }
    }

    getData()
  }, [regData, isLog])

  const logoutButton = props => {
  return (            
    <View style={styles.logoutContainer}>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={ async () => {
              setIsLog(false)
              setLogout(false)
              await AsyncStorage.setItem('RegData', JSON.stringify({phone: '', name: ''}))
              navigation.navigate("HomeScreen");
            }}
          >
          <Icon
            name="logout"
            type="MaterialCommunityIcons"
            style={styles.logoutIcon}
          />
          <MRegularTextView>Quit</MRegularTextView>
      </TouchableOpacity>
    </View>
    )
  }

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 0.5, marginTop: hp("5") }}>
            <ProfileView
            phone={regData.phone}
            name={regData.name}
            onPress={() => {
              if (isLog == false) {
                navigation.navigate("LoginScreen")
              }
            }}
            />
          </View>
          <View style={styles.menuBlueContainer}>
            <View style={styles.menuItemContainer}>
              <MenuItem
                text="Home"
                onPress={() => {
                  navigation.navigate("HomeScreen");
                }}
                iconName="home"
                iconTheme="AntDesign"
              />
            </View>
            <View style={styles.menuItemContainer}>
              <MenuItem
                text="Saved"
                onPress={() => {
                  navigation.navigate("SavedItemsScreen");
                }}
                iconName="hearto"
                iconTheme="AntDesign"
              />
            </View>
{/*            <View style={styles.menuItemContainer}>
              <MenuItem
                text="My Preference"
                onPress={() => {
                  navigation.navigate("SizeHelperScreen");
                }}
                iconName="settings"
                iconTheme="Feather"
              />
            </View>*/}
            <View style={styles.menuItemContainer}>
              <MenuItem
                text="My Orders"
                onPress={() => {
                  navigation.navigate("MyOrders");
                }}
                iconName="list"
                iconTheme="Entypo"
              />
            </View>
            {logout}
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

MenuBar.propTypes = {};

MenuBar.defaultProps = {};
export default MenuBar;
