import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { View, SafeAreaView, Text, ScrollView } from "react-native";
import Header from "../components/Header";
import { DrawerActions } from "react-navigation-drawer";
import Icon from "react-native-vector-icons/Ionicons";
import HorizontalList from "../components/ProfilePage/HorizontalList";
import GLOBAL from '../../global';

export default class ProfileScreen extends React.Component {
  state = {
    fullname: "No",
  };
  
  static navigationOptiosn = {
    drawerLabel : null,
    drawerIcon : (<Icon name="ios-contact" color={"rgba(68, 126, 36, 1)"} size={10} />)
  }

  _fetchData() {
    return fetch('http://localhost:8080/GetUserProfile?',
    {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: GLOBAL.user,
        })
    })  
    .then(response => {
      this.setState({
        fullname: response.text(),
      }, function() {
      })
    })
    .catch((error) =>{
      console.error(error);
    });

  }

  componentDidMount() {
    this._fetchData();
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header text={"Profile"} 
        onPress={() => {
          this.props.navigation.dispatch(DrawerActions.openDrawer());
        }}/>
        <View style={styles.profileHeader}>
          <Icon name="ios-contact" color={"rgba(68, 126, 36, 1)"} size={150} />
          {/*<Text style={styles.profileName}>fullname</Text>*/}
          <Text>{this.state.fullname}</Text>
        </View>

          <View style={{ flex: 1, marginTop: 10}}>
            <Text style={{ fontSize: 24,  paddingHorizontal: 20 }}>
                Your top 5 favorite beers!
            </Text>
            <View style={styles.listContainer}>
              <ScrollView horizontal={true}
                  showsHorizontalScrollIndicator={true}>
                <HorizontalList imageUri={require('../images/Bunny.png')}
                    name="Hopsy"/>
                <HorizontalList imageUri={require('../images/Bunny.png')}
                    name="Hopsy"/>
                <HorizontalList imageUri={require('../images/Bunny.png')}
                    name="Hopsy"/>
                <HorizontalList imageUri={require('../images/Bunny.png')}
                    name="Hopsy"/>
                <HorizontalList imageUri={require('../images/Bunny.png')}
                    name="Hopsy"/>
              </ScrollView>
            </View>
          </View>
          <View style={{ flex: 1, marginTop: 10}}>
            <Text style={{ fontSize: 24,  paddingHorizontal: 20 }}>
                Your top 5 favorite breweries!
            </Text>
            <View style={styles.listContainer}>
              <ScrollView horizontal={true}
                  showsHorizontalScrollIndicator={true}>
                <HorizontalList imageUri={require('../images/Bunny.png')}
                    name="Hopsy"/>
                <HorizontalList imageUri={require('../images/Bunny.png')}
                    name="Hopsy"/>
                <HorizontalList imageUri={require('../images/Bunny.png')}
                    name="Hopsy"/>
                <HorizontalList imageUri={require('../images/Bunny.png')}
                    name="Hopsy"/>
                <HorizontalList imageUri={require('../images/Bunny.png')}
                    name="Hopsy"/>
              </ScrollView>
            </View>
          </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Expo.Constants.statusBarHeight
  },
  listContainer: {
    height: 130, 
    marginTop: 20 
  },
  profileHeader:{
    flex: 1,
    paddingTop: 45,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  profileName: {
    alignContent : 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 65,
    fontSize: 25,
    fontWeight: '600'
  }
});