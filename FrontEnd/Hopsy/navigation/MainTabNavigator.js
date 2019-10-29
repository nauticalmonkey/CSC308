// import React from 'react';
// import { View, Text } from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//       </View>
//     );
//   }
// }

// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: HomeScreen,
//   },
// });

// export default createAppContainer(AppNavigator);




import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';


import AgeVerificationScreen from '../src/screens/AgeVerificationScreen'


const AgeVerificationStack = createStackNavigator({

    screen: AgeVerificationScreen,
});


export default AgeVerificationStack;



// const config = Platform.select({
//     web: { headerMode: 'screen' },
//     default: {},
// });


// const AgeVerificationStack = createStackNavigator(
// {
//     Links: AgeVerificationScreen,
// },
// config
// );

// AgeVerificationStack.navigationOptions = {
// tabBarLabel: 'Age check',
// tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-lock' : 'md-lock'} />
// ),
// };

// AgeVerificationStack.path = '';


// const tabNavigator = createBottomTabNavigator({
//     AgeVerificationStack,

// });

// tabNavigator.path = '';

// export default tabNavigator;