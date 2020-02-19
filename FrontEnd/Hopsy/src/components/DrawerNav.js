import { createDrawerNavigator } from "react-navigation-drawer";
import Settings from "../screens/SettingsScreen";
import Profile from "../screens/ProfileScreen";

export default createDrawerNavigator({
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