import React from "react";
import { StyleSheet } from "react-native";

import { View, Text } from "react-native";
import { createBottomTabNavigator} from 'react-navigation-tabs';
import { createStackNavigator } from "react-navigation-stack";

import Test from "../screens/Test";


const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: Test,
  },
  Map: {
    screen: Test
  }
},{
  tabBarOptions: {
    activeBackgroundColor: "rgba(68, 126, 36, 1)",
    inactiveBackgroundColor: "rgba(68, 126, 36, 1)",
    activeTintColor: 'white',
    inactiveTintColor: "black",
    style: {
      backgroundColor: "rgba(68, 126, 36, 1)",
    },
    tabStyle:{
      width: 40,
      height: 50
    }
  }
});

export default createStackNavigator({ TabNavigator }, { headerMode: "none" });