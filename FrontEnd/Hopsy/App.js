
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from 'react-navigation-tabs';

import AgeVerificationScreen from "./src/screens/AgeVerificationScreen";
import TooYoungScreen from "./src/screens/TooYoung";

import { NavigationActions } from 'react-navigation';

import Home from "./src/components/Tab_nav";
import Main from "./src/components/Stack_nav";
import DrawNav from "./src/components/DrawerNav"

const Draw = createStackNavigator({
  Main_navigator: {
    screen: Main,
    navigationOptions: {
      header : null
    }
  },
  Tab_navigator: {
    screen: Home,
    navigationOptions: {
      header : null
    }
  }
});

const App = createAppContainer(Draw);

export default App;
