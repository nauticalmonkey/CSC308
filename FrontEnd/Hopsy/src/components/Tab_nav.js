import React from "react";
import { StyleSheet } from "react-native";

import { View, Text } from "react-native";
import { createBottomTabNavigator} from 'react-navigation-tabs';
import { createStackNavigator } from "react-navigation-stack";

import Test from "../screens/Test";


const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: Test
  },
  Test: {
    screen: Test
  }
});

export default createStackNavigator({ TabNavigator }, { headerMode: "none" });