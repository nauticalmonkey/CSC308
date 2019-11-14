import React, { Component } from "react";
import { StyleSheet } from "react-native";

import { View, SafeAreaView, Text } from "react-native";
import Header from "../components/Header";

export default class Search extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header text={"Search"} />
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
  },
});
