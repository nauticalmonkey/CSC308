import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

class Header extends React.Component {
  render() {
    const { text, onPress } = this.props;
    return (
      <View>
        <View style={styles.header}>
          <View style={styles.touchable}>
            <TouchableOpacity
              onPress={() => {
                onPress();
              }}
            >
              <Image
                style={styles.image}
                source={require("../images/Bunny.png")}
              />
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styles.text}>{text}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50
  },
  header: {
    height: 65,
    borderBottomWidth: 0.5,
    borderBottomColor: "#E9E9E9",
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    justifyContent: "center"
  },
  touchable: {
    position: "absolute",
    left: 0,
    paddingLeft: 15
  },
  text: {
    fontSize: 24,
    color: "#000",
    textAlignVertical: "center"
  }
});
