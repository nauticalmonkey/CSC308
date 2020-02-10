import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { View, SafeAreaView, Text } from "react-native";
import Header from "../components/Header";
import { DrawerActions } from "react-navigation-drawer";
import Icon from "react-native-vector-icons/Ionicons";
import Constants from "expo-constants";

export default class ProfileScreen extends React.Component {
  static navigationOptiosn = {
    drawerLabel: "Profile",
    drawerIcon: (
      <Icon name="ios-contact" color={"rgba(68, 126, 36, 1)"} size={10} />
    )
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header
          text={"Profile"}
          onPress={() => {
            this.props.navigation.dispatch(DrawerActions.openDrawer());
          }}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  }
});
