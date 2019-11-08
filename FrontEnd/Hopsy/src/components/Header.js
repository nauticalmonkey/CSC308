import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Image style={styles.image} source={require("../images/Bunny.png")} />
        <View>
          <Text
            style={{
              fontSize: 24,
              color: "#000"
            }}
          >
            {this.props.text}
          </Text>
        </View>
      </View>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    position: "absolute",
    alignSelf: "flex-start",
    marginLeft: 25
  },
  header: {
    height: 65,
    borderBottomWidth: 0.5,
    borderBottomColor: "#E9E9E9",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    padding: 10
  }
});
