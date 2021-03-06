import React from "react";
import Image from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../screens/HomeScreen";
import MapScreen from "../screens/MapScreen";
import RecScreen from "../screens/RecommendationScreen";
import SearchScreen from "../screens/SearchScreen";
import Icon from "react-native-vector-icons/Ionicons";
import FavoritesScreen from "../screens/FavoritesScreen";

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-home" color={tintColor} size={30} />
        )
      }
    },
    Map: {
      screen: MapScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-compass" color={tintColor} size={30} />
        )
      }
    },
    Favorites: {
      screen: FavoritesScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-beer" color={tintColor} size={30} />
        )
      }
    },
    /*Rec: {
      screen: RecScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-pricetag" color={tintColor} size={25} />
        )
      }
    },*/
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-search" color={tintColor} size={30} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeBackgroundColor: "rgba(68, 126, 36, 1)",
      inactiveBackgroundColor: "rgba(68, 126, 36, 1)",
      activeTintColor: "white",
      inactiveTintColor: "#939393",
      showLabel: false,
      style: { marginBottom: 0, backgroundColor: "rgba(68, 126, 36, 1)" }
    }
  }
);

export default createStackNavigator({ TabNavigator }, { headerMode: "none" });
