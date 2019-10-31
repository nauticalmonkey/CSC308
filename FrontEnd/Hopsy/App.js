import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import AgeVerificationScreen from './src/screens/AgeVerificationScreen';
import TooYoungScreen from './src/screens/TooYoung';

const MainNavigator = createStackNavigator({
  Home: AgeVerificationScreen,
  TooYoung: TooYoungScreen,

  //Profile: {screen: ProfileScreen},
});

const App = createAppContainer(MainNavigator);

export default App;



