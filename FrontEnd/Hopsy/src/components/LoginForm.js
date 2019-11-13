import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StatusBar
} from "react-native";

export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <TextInput
          placeholder="username or email"
          placeholderTextColor="#FFF"
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
        />
        <TextInput
          placeholder="password"
          placeholderTextColor="#FFF"
          returnKeyType="go"
          secureTextEntry
          style={styles.input}
          ref={input => (this.passwordInput = input)}
        />
        <TouchableOpacity
          style={styles.butoonContainer}
          onPress={() => this.props.navigation.navigate("Preference")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.singUp}>Don't have an account?<Text onPress={() => this.props.navigation.navigate("Preference")}
        style={styles.blue}> Sign up</Text></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 50,
    backgroundColor: "rgba(68, 126, 36, 0.6)",
    marginBottom: 20,
    color: "#FFF",
    paddingHorizontal: 10
  },
  blue :{
    color: "rgba(44, 130, 201, 1)",
  },
  singUp:{
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20
  },
  butoonContainer: {
    height: 55,
    backgroundColor: "rgba(68, 126, 36, 1)",
    paddingVertical: 10,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center"
  }
});
