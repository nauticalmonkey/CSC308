import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Text,
} from "react-native";
import Header from "../components/Header";
import { SearchBar, List, ListItem } from "react-native-elements";
import { DrawerActions } from "react-navigation-drawer";
import _ from "lodash";

import GLOBAL from '../../global';
import CustomButton from "../components/CustomButton";
import ProfileScreen from "./ProfileScreen";

export default class FavoritesScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newRec: "",
      newRecImg: ""
    };
  }

  _fetchReccomendation() {
    return fetch(GLOBAL.dblink + 'requestRecommendation?',
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: GLOBAL.user,
      })
    })  
    .then((response) => response.text())
      .then((responseJson) => {
        this.setState({
          newRec: responseJson,
        });
      })
    .catch((error) =>{
      console.error(error);
    });
  }

  _fetchRecImage() {
    return fetch(GLOBAL.dblink + 'get-beer-img?',
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        beer: this.state.newRec,
      })
    })  
    .then((response) => response.text())
      .then((responseJson) => {
        this.setState({
          newRecImg: responseJson,
        });
      })
    .catch((error) =>{
      console.error(error);
    });
  }

  _sendLike() {
    return fetch(GLOBAL.dblink + 'likebeer',
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: GLOBAL.user,
        beer: this.state.newRec,
      })
    })  
    .catch((error) =>{
      console.error(error);
    });

  }

  _sendDislike() {
    return fetch(GLOBAL.dblink + 'dislikebeer',
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: GLOBAL.user,
        beer: this.state.newRec,
      })
    })  
    .catch((error) =>{
      console.error(error);
    });


  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = async () => {
    await this._fetchReccomendation();
    await this._fetchRecImage();
  };

  _renderRecImage() {
    //Renders a white box while waiting to get beer image back
    if (this.state.newRecImg == "")
      return "https://www.ledr.com/colours/white.htm";
    else
      return this.state.newRecImg;
  }

  render() {
    console.log(this.state.newRec);
    console.log(this.state.newRecImg);
    return (
      <SafeAreaView style={styles.container}>
        <Header
          text={"We think you'll like this!"}
          onPress={() => {
            this.props.navigation.dispatch(DrawerActions.openDrawer());
          }}
        />
        <View style={styles.imagebox}>
          <Text style={styles.modalText}>
            {this.state.newRec}
          </Text>
          <Image
            style={styles.image}
            source={{uri: this._renderRecImage()}}
          />
        </View>
        <View style={styles.button}>
          <View style={styles.twinContainer}>
            <CustomButton
              // style={styles.simpleYesButton}
              onPress={() => {
                console.log("I enjoyed this beer");
                this._sendLike();
                this.makeRemoteRequest();
              }}
              text="Yes"
            />
            <CustomButton
              // style={styles.simpleNoButton}
              onPress={() => {
                console.log("I disliked this beer")
                this._sendDislike();
                this.makeRemoteRequest();
              }}
              text="No"
            />
            {/* <CustomButton
              // style={{opacity: 0.5}}
              onPress={() => {console.log("Skip")}}
              text="skip"
            /> */}
          </View>
        </View>
      </SafeAreaView>
    );
  }

}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: 20
  },
  twinContainer: {
    flexDirection: "column"
  },
  imagebox:{
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  image: {
    width: 400,
    height: 400,
    top: "25%",
    resizeMode: "contain",
    marginTop: 30
  },
  name: {
    flex: 8,
    flexDirection: "row",
    fontSize: 30,
    fontWeight: "300"
  },
  subtext: {
    fontSize: 12,
    flex: 1,
    flexDirection: "row"
  },
  modalText: {
    top: "25%",
    fontSize: 30,
    fontWeight: "300",
    textAlign: "center",
    marginTop: 20
  },
  modal: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFF"
  },
  text: {
    color: "#3f2949",
    paddingBottom: 100
  },
  container: {
    flex: 1,
    paddingTop: Expo.Constants.statusBarHeight,
    flexDirection: 'column',
  }
});
