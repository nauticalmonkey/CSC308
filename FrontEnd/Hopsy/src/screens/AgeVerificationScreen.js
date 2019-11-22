import React, { Component } from "react";
import { ScrollView, StyleSheet } from "react-native";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  Dimensions
} from "react-native";

import CustomButton from "../components/CustomButton";
import { Platform } from "@unimodules/core";

const window = Dimensions.get("window");
const screenHeight = window.height;
const screenWidth = window.width;

class AgeVerificationScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../images/Bunny.png")}
          ></Image>
          <Text style={styles.title}>Hopsy</Text>
          <Text style={styles.subtitle}>A simpler way to enjoy beer.</Text>
          <Text style={styles.bigText}>Are you over 21?</Text>
        </View>
        <View style={styles.twinContainer}>
          <CustomButton
            style={styles.simpleYesButton}
            onPress={() => this.props.navigation.navigate("Login")}
            text="Yes"
          />
          <CustomButton
            style={styles.simpleNoButton}
            onPress={() => this.props.navigation.navigate("TooYoung")}
            text="No"
          />
        </View>
      </View>
    );
  }
}

AgeVerificationScreen.navigationOptions = {
  header: null
};

export default AgeVerificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    height: screenHeight,
    width: screenWidth
  },
  bigText: {
    fontSize: 45,
    //marginTop: 150,
    marginBottom: 5,
    fontWeight: "700",
    textAlign: "center"
  },
  twinContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 50
  },
  simpleYesButton: {
    height: 55,
    //marginTop: 10,
    width: 120,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  simpleNoButton: {
    height: 55,
    width: 120,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center"
    //marginTop: 10
  },
  loginText: {
    color: "#fff",
    flexDirection: "row",
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20
  },
  logo: {
    width: 300,
    height: 300
  },
  logoContainer: {
    //marginTop: 110,
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center"
  },
  title: {
    fontSize: 45,
    color: "#000",
    //marginTop: 10,
    paddingBottom: 10,
    //width: 200,
    textAlign: "center",
    fontWeight: "700"
  },
  subtitle: {
    fontSize: 25,
    color: "#000",
    //marginTop: 5,
    //width: 500,
    paddingBottom: 100,
    textAlign: "center",
    fontWeight: "600"
  }
});
