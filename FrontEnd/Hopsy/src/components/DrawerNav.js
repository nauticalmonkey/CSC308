import { createDrawerNavigator } from "react-navigation-drawer";
import Settings from "../screens/SettingsScreen";
import Profile from "../screens/ProfileScreen";
import { createStackNavigator } from "react-navigation-stack";

const DrawNavigator =  createDrawerNavigator({
  Profile: {
    screen: Profile
  },
  Settings:{
    screen: Settings
  },
});

export default createStackNavigator({ DrawNavigator }, { headerMode: "none" });