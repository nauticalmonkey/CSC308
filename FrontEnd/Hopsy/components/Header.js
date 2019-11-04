import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Image
          style={{ width: 50, height: 50 }}
          source={require("../assets/logo_light.png")}
        />
        <Text
          style={{
            fontSize: 24,
            paddingLeft: 25,
            color: "#000"
          }}
        >
          {this.props.text}
        </Text>
      </View>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  header: {
    height: 70,
    borderBottomWidth: 0.5,
    borderBottomColor: "#E9E9E9",
    alignItems: "center",
    flexDirection: "row",
    padding: 20
  }
});
