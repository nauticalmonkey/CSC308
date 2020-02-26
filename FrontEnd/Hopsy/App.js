import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { View, SafeAreaView, StyleSheet, Text} from "react-native";
import { DrawerItems } from 'react-navigation-drawer';

import Home from "./src/components/Tab_nav";
import Main from "./src/components/Stack_nav";
import Settings from "./src/screens/SettingsScreen";
import Profile from "./src/screens/ProfileScreen";
import LoginScreen from "./src/components/Login";
import Icon from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";
import GLOBAL from './global';
import { NativeModules } from "react-native";



class Hidden extends React.Component {
  render() {
    return null;
  }
}

const CustomDrawerComponent = (props) =>{
  return(
    <SafeAreaView style={{flex : 1}}>
      <View style={styles.viewField}>
      <TouchableOpacity
            onPress={() => props.navigation.navigate("Profile")}
          >
            <Icon name="ios-contact" color={"rgba(68, 126, 36, 1)"} size={100} />
          </TouchableOpacity>
      </View>
      <DrawerItems {...props}/>
      <View style={styles.Logout}>

        <TouchableOpacity style={styles.logoutbutton} onPress={
            () => {
              NativeModules.DevSettings.reload();
              props.navigation.navigate("Logout");
              GLOBAL.user = null;
            }
          }>
          <Icon name="ios-log-out" color={"rgba(68, 126, 36, 1)"} size={25} />
          <Text style={styles.logouttext}>Logout</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const Draw = createDrawerNavigator({
  Main_navigator: {
    screen: Main,
    navigationOptions: {
      header : null,
      drawerLabel: <Hidden />,
      drawerLockMode: 'locked-closed'
    }
  },
  Main_tabs: {
    screen: Home,
    navigationOptions: {
      header : null,
      drawerLabel: "Home",
      drawerIcon: <Icon name="ios-home" color={"rgba(68, 126, 36, 1)"} size={25} />
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      header : null,
      drawerIcon: <Icon name="ios-person" color={"rgba(68, 126, 36, 1)"} size={25} />
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      header : null,
      drawerIcon : (<Icon name="ios-construct" color={"rgba(68, 126, 36, 1)"} size={25} />)
    }
  },
  Logout:{
    screen: LoginScreen,
    navigationOptions: {
      header : null,
      drawerLabel: <Hidden />,
      drawerLockMode: 'locked-closed'
    }
  }
},{
  contentComponent: CustomDrawerComponent,
  contentOptions:{
    activeTintColor: "rgba(68, 126, 36, 1)"
  },
});

const App = createAppContainer(Draw);

export default App;

const styles = StyleSheet.create({
  image: {
    width: 75,
    height: 75,
  },
  viewField:{
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Test:{
    height: 150,
    position: 'absolute'
  },
  Logout:{
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
    marginHorizontal: 17
  },
  logouttext:{
    marginLeft: 35,
    fontWeight: 'bold',
  },
  logoutbutton:{
    alignItems: 'center',
    flexDirection: 'row'
  }
});
