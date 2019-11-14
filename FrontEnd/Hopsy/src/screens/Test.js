import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import { View, Text } from "react-native";

export default function Test() {
  return (
    <View>
      <Text style={styles.bigRedText}>
        Test
      </Text>
    </View>
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
  }
});