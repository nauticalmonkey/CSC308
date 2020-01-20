import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from "react-navigation-drawer";

import Home from "./src/components/Tab_nav";
import Main from "./src/components/Stack_nav";
import Settings from "./src/screens/SettingsScreen";
import Profile from "./src/screens/ProfileScreen";

class Hidden extends React.Component {
  render() {
    return null;
  }
}

const Draw = createDrawerNavigator({
  Main_navigator: {
    screen: Main,
    navigationOptions: {
      header : null,
      drawerLabel: <Hidden />
    }
  },
  Tab_navigator: {
    screen: Home,
    navigationOptions: {
      header : null,
      drawerLabel: <Hidden />
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      header : null
    }
  },
  Settings:{
    screen: Settings,
    navigationOptions: {
      header : null
    }
  },
});

const App = createAppContainer(Draw);

export default App;
