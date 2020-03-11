import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StatusBar
} from "react-native";

import CustomButton from "./CustomButton";
import GLOBAL from '../../global'

export default class LoginForm extends Component {
  state = {
    username: null,
    password: null
  };
  constructor(props) {
    super(props);
    this._fetchData = this._fetchData.bind(this);
  }

  _fetchData() {
    const { username, password } = this.state;
    GLOBAL.user = username;
    console.log(GLOBAL.user);
    
    if (username && password) {
      fetch(GLOBAL.dblink + "login?", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: username,
          password: password
        })
      })
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson == true) {
            this.props.navigation.navigate("Home");
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <TextInput
          placeholder="email"
          placeholderTextColor="#FFF"
          returnKeyType="next"
          onChangeText={text => this.setState({ username: text })}
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
          onSubmitEditing={() => this.passwordInput.focus()}
          onChangeText={text => this.setState({ password: text })}
        />

        <CustomButton
          onPress={this._fetchData}
          text="Login"
        />
        <Text style={styles.signUp}>
          Don't have an account?
          <Text
            onPress={() => this.props.navigation.navigate("SignUp")}
            style={styles.blue}
          >
            {" "}
            Sign up
          </Text>
        </Text>
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
    paddingHorizontal: 10,
    borderRadius: 5
  },
  blue: {
    color: "rgba(44, 130, 201, 1)"
  },
  signUp: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 10
  },
  buttonContainer: {
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
