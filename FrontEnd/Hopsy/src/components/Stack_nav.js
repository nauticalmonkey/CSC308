import { createStackNavigator } from "react-navigation-stack";

import AgeVerificationScreen from "../screens/AgeVerificationScreen";
import TooYoungScreen from "../screens/TooYoung";

//Noel's Login stuff
import LoginScreen from "./Login";
import SignUpScreen from "../screens/SignUpScreen";

// Nick's pref page stuff
import PreferenceScreen from "../screens/PreferenceScreen";

export default createStackNavigator({
  AgeVer: AgeVerificationScreen,
  TooYoung: TooYoungScreen,
  Login: LoginScreen,
  SignUp: SignUpScreen,
  Preference: PreferenceScreen
});
