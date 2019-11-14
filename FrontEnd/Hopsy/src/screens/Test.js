import React from "react";
import { StyleSheet } from "react-native";

import { SafeAreaView, Text } from "react-native";

export default function Test() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.bigRedText}>
        Test
      </Text>
    </SafeAreaView>
  );
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
