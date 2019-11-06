import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import AgeVerificationScreen from "./src/screens/AgeVerificationScreen";
import TooYoungScreen from "./src/screens/TooYoung";

//Noel's Login stuff
import LoginScreen from "./src/components/Login";

const MainNavigator = createStackNavigator({
  AgeVer: AgeVerificationScreen,
  TooYoung: TooYoungScreen,
  Login: LoginScreen

  //Profile: {screen: ProfileScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
