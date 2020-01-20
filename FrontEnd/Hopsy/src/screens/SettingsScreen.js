import React, { Component } from "react";
import { StyleSheet } from "react-native";

import { View, SafeAreaView, Text } from "react-native";
import Header from "../components/Header";
import CustomButton from "../components/CustomButton";

export default class SettingsScreen extends React.Component {
  static navigationOptiosn = {
    drawerLabel : "Settings"
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header text={"Settings"} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Expo.Constants.statusBarHeight
  }
});