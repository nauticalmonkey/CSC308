import { createAppContainer, TabNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from 'react-navigation-tabs';

import AgeVerificationScreen from "./src/screens/AgeVerificationScreen";
import TooYoungScreen from "./src/screens/TooYoung";

import { NavigationActions } from 'react-navigation';


//Noel's Login stuff
import LoginScreen from "./src/components/Login";

// Nick's pref page stuff
import PreferenceScreen from "./src/screens/PreferenceScreen";

import HomeScreen from "./src/screens/HomeScreen";
import React, { Component } from 'react';


// let Tabs = createBottomTabNavigator({
//   Screen1:{
//     screen: HomeScreen,

//   },
//   Screen2:{
//     screen: PreferenceScreen,
//   }
// })


class Tab1 extends React.Component {
  setTitle = () => {
    this.props.screenProps.onTabsChange('Title from Tab 1')
  }
  componentDidMount() {
    this.props.navigation.addListener('willFocus', this.setTitle)
  }
  render() {
    return <View><Text>{'Tab1'}</Text></View>
  }
}
class Tab2 extends React.Component {
  setTitle = () => {
    this.props.screenProps.onTabsChange('Title from Tab 2')
  }
  componentDidMount() {
    this.props.navigation.addListener('willFocus', this.setTitle)
  }
  render() {
    return <View><Text>{'Tab2'}</Text></View>
  }
}

const Page = () => <View><Text>{'Page'}</Text></View>
const Tabs = createBottomTabNavigator({
    screen1: Tab1,
    screen2: Tab2
})

class TabsPage extends Component {
  onTabsChange = (title) => {
    this.props.navigation.setParams({ title })
  }
  render() {
    return(<Tabs screenProps={{ onTabsChange: this.onTabsChange }} />)
  }
}


const MainNavigator = createStackNavigator({
  tabs: {
    screen: TabsPage,
    navigationOptions: ({navigation}) => {
      return { title: (navigation.state.params && navigation.state.params.title ? navigation.state.params.title : 'No Title' ) }
    }
  },
  otherScreen: Page
  // AgeVer: AgeVerificationScreen,
  // TooYoung: TooYoungScreen,
  // Login: LoginScreen,
  // Preference: PreferenceScreen,
  
  // Home: {
  //   screen: TabNavigator({
  //     Home: {
  //       screen: HomeScreen,
  //       navigationOptions: ({ navigation }) => ({
  //         title: 'Home',
  //       }),
  //     },
  //     Friends: {
  //       screen: HomeScreen,
  //       navigationOptions: ({ navigation }) => ({
  //         title: 'My Friends',
  //       }),
  //     },
  //   }),
  //   navigationOptions: ({ navigation }) => ({
  //     title: 'Home',
  //   }),
  // },

  //Profile: {screen: ProfileScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
