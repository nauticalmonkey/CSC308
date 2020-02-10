import React, { Component } from "react";
import { StyleSheet } from "react-native";

import { View, SafeAreaView, Text } from "react-native";
import Header from "../components/Header";
import { DrawerActions } from "react-navigation-drawer";
import Constants from "expo-constants";

export default class SettingsScreen extends React.Component {
  static navigationOptiosn = {
    drawerLabel: "Settings"
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header
          text={"Settings"}
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
