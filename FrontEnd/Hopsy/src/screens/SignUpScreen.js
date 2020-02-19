import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  KeyboardAvoidingView
} from "react-native";
import SignUpForm from "../components/SignUpForm";


export default class SignUpScreen extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../images/Bunny.png")}
          ></Image>
          <Text style={styles.subtitle}>Create an account</Text>
        </View>
        <View style={styles.container}>
          <SignUpForm navigation={this.props.navigation} />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

SignUpScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 225,
    justifyContent: 'center',
    backgroundColor: "#FFF"
  },
  logoContainer: {
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 25,
    flexGrow: 1,
    justifyContent: "center"
  },
  logo: {
    width: 300,
    height: 300
  },
  title: {
    fontSize: 45,
    color: "#000",
    marginTop: 10,
    width: 200,
    textAlign: "center",
    fontWeight: "700"
  },
  subtitle: {
    fontSize: 25,
    color: "#000",
    marginTop: 5,
    width: 500,
    textAlign: "center",
    fontWeight: "600"
  }
});
