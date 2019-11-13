import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";

import AgeVerificationScreen from "./src/screens/AgeVerificationScreen";
import TooYoungScreen from "./src/screens/TooYoung";

//Noel's Login stuff
import LoginScreen from "./src/components/Login";

// Nick's pref page stuff
import PreferenceScreen from "./src/screens/PreferenceScreen";

import Home from "./src/components/Tab_nav";
import Main from "./src/components/Stack_nav";


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

//const MainNavigator = createStackNavigator({
  //AgeVer: AgeVerificationScreen,
  //TooYoung: TooYoungScreen,
  //Login: LoginScreen,
  //Preference: PreferenceScreen,
//});

const App = createAppContainer(Draw);

export default App;
