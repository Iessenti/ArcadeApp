import { Root } from "native-base";
import * as React from "react";
import { useState, useEffect } from "react";
import { Button, Text, TextInput, View, Animated, Easing } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import {
  SignupScreen,
  OnboardingScreen,
  ForgotPasswordScreen,
  HomeScreen,
  GenderSelectionScreen,
  ProfileScreen,
  SizeHelperScreen,
  SavedItemsScreen,
  SearchScreen,
  LoginScreen,
  CartScreen,
  FilterScreen,
  ProductDetailsScreen,
  ProductListingScreenSex,
  ProductListingScreenCategory,
  CheckoutScreen,
  AddCardScreen,
  MyOrders,
  OrderDetails,
  OrderSuccessScreen,
  AddAddressScreen,
  ShippingInfoScreen
} from "./screens";

import { MenuBar } from "@components";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const LoginStack = () => {
  return (
    <>
      <Stack.Navigator initialRouteName="OnboardingScreen">
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  );
};
const DrawerStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      drawerContent={props => {
        return <MenuBar {...props} />;
      }}
    >
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="ShippingInfoScreen"
        component={ShippingInfoScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="SavedItemsScreen"
        component={SavedItemsScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="SizeHelperScreen"
        component={SizeHelperScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="CartScreen"
        component={CartScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="FilterScreen"
        component={FilterScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="ProductListingScreenCategory"
        component={ProductListingScreenCategory}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="ProductListingScreenSex"
        component={ProductListingScreenSex}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="MyOrders"
        component={MyOrders}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="OrderDetails"
        component={OrderDetails}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="CheckoutScreen"
        component={CheckoutScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="AddCardScreen"
        component={AddCardScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="OrderSuccessScreen"
        component={OrderSuccessScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="AddAddressScreen"
        component={AddAddressScreen}
        options={{ headerShown: false }}
      />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
          options={{ headerShown: false }}
        />
    </Drawer.Navigator>
  );
};

export default function RootNavigator(props) {
  const { state } = props;
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {}, []);

  return (
    <NavigationContainer>
      <Root>
        <Stack.Navigator initialRouteName="LoginStack">
          <Stack.Screen
            name="DrawerStack"
            children={DrawerStack}
            options={{ headerShown: false }}
          />
          {/* <Drawer.Screen name="HomeDrawer" children={DrawerStack} /> */}
        </Stack.Navigator>
      </Root>
    </NavigationContainer>
  );
}
