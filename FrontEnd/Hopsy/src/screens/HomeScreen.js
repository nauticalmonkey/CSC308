import React, { Component } from "react";
import { StyleSheet } from "react-native";

import { View, SafeAreaView, Text } from "react-native";
import Header from "../components/Header";
import CustomButton from "../components/CustomButton";
import { DrawerActions } from "react-navigation-drawer";

export default class Test extends React.Component {

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header text={"Home"} />
        <CustomButton
          onPress={() => {

            this.props.navigation.dispatch(DrawerActions.openDrawer());
          }}
          text="Sign Up"
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  bigRedText: {
    fontSize: 30,
    marginTop: 355,
    fontWeight: "600",
    color: "#000",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    paddingTop: Expo.Constants.statusBarHeight
  }
});
