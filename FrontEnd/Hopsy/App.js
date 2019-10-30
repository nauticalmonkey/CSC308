// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// import AppNavigator from './navigation/AppNavigator';


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <AppNavigator /> 
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import AgeCheckScreen from './src/screens/AgeVerificationScreen';
import TooYoungScreen from './src/screens/TooYoung';

const MainNavigator = createStackNavigator({
  AgeCheck: {screen: AgeCheckScreen},
  TooYoung: {screen: TooYoungScreen}

  //Profile: {screen: ProfileScreen},
});

const App = createAppContainer(MainNavigator);

export default App;



