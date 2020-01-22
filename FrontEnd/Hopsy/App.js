import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { View, SafeAreaView, StyleSheet} from "react-native";
import { DrawerItems } from 'react-navigation-drawer';

import Home from "./src/components/Tab_nav";
import Main from "./src/components/Stack_nav";
import Settings from "./src/screens/SettingsScreen";
import Profile from "./src/screens/ProfileScreen";
import Icon from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";

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
      </SafeAreaView>
    );
  }


const Draw = createDrawerNavigator({
  Main_navigator: {
    screen: Main,
    navigationOptions: {
      header : null,
      drawerLabel: <Hidden />,
      drawerLockMode: 'locked-closed',
      gesturesEnabled: false
    }
  },
  Main_tabs: {
    screen: Home,
    navigationOptions: {
      header : null,
      drawerLabel: "Home"
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      header : null,
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
    header : null,
    }
  }
},{
  contentComponent: CustomDrawerComponent,
  contentOptions:{
    activeTintColor: "rgba(68, 126, 36, 1)"
  }
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
  }
});
