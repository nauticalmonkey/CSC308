import { createStackNavigator } from "react-navigation-stack";

import AgeVerificationScreen from "../screens//AgeVerificationScreen";
import TooYoungScreen from "../screens//TooYoung";

//Noel's Login stuff
import LoginScreen from "./Login";

// Nick's pref page stuff
import PreferenceScreen from "../screens//PreferenceScreen";

export default createStackNavigator({
  AgeVer: AgeVerificationScreen,
  TooYoung: TooYoungScreen,
  Login: LoginScreen,
  Preference: PreferenceScreen,
});

navigationOptions = {
    header: null,
};