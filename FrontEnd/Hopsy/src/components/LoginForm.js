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

  constructor(props) {
    super(props);
    this._fetchData = this._fetchData.bind(this);
  }


  _fetchData() {
    
    let params = {
      "name": this.state.username,
      "pswrd": this.state.password
    }

    let query = Object.keys(params)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])).join('&');

    let url = 'http://localhost:8080/login?' + query
   
    fetch(url);

  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <TextInput
          placeholder="username or email"
          placeholderTextColor="#FFF"
          returnKeyType="next"
          onChangeText={(text) => this.setState({username:text})}
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
          onChangeText={(text) => this.setState({password:text})}
        />
        <TouchableOpacity
          style={styles.butoonContainer}
          onPress={this._fetchData}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.singUp}>Don't have an account?<Text onPress={() => this.props.navigation.navigate("Preference")}
        style={styles.blue}> Sign up</Text></Text>
      </View>
    );
  }
}

// const apiUserData = 'http://localhost:8080/login';
// async function getUserFromServer() {
//   try {
//     let response = await fetch(apiUserData)
//     let responseJson = await response.json;
//     return responseJson.data;
//   } catch (error) {
    
//   }
// }



// fetch("https://localhost:8080/login", {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     name: 'one',
//     pswrd: 'two',
//   }),
// });

// function getData() {
//   return fetch('http://localhost:8080/login')
//     .then((response) => response.json())
//     .then((responseJson) => {
//       return responseJson.movies;
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }


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
    marginBottom: 50,
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
