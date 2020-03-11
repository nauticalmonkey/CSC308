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
    // .then((response) => response.text())
    //   .then((responseJson) => {
    //     this.setState({
    //       newRecImg: responseJson,
    //     });
    //   })
    .catch((error) =>{
      console.error(error);
    });

  }

  _sendDislike() {



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
        <Image
          style={styles.image}
          source={{uri: this._renderRecImage()}}
        />
        <View style={styles.button}>
          <View style={styles.twinContainer}>
            <CustomButton
              // style={styles.simpleYesButton}
              onPress={() => {
                console.log("I enjoyed this beer");
                this._sendLike();
              }}
              text="Yes"
            />
            <CustomButton
              // style={styles.simpleNoButton}
              onPress={() => {console.log("I disliked this beer")}}
              text="No"
            />
            <CustomButton
              // style={{opacity: 0.5}}
              onPress={() => {console.log("Skip")}}
              text="skip"
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }

}

const styles = StyleSheet.create({
  tributton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  button: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: 20
  },
  twinContainer: {
    flexDirection: "column"
  },
  image: {
    width: 400,
    height: 400,
    top: "25%",
    left: "1%",
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "contain"
  },
  modalText: {
    top: "25%",
    fontSize: 30,
    fontWeight: "300",
    textAlign: "center"
  },
  modalName: {
    top: "25%",
    fontSize: 30,
    fontWeight: "300",
    textAlign: "center"
  },
  modalABV: {
    top: "25%",
    fontSize: 30,
    textAlign: "center"
  },
  modalCalories: {
    top: "25%",
    fontSize: 30,
    textAlign: "center"
  },
  modalExit: {
    alignItems: "center",
    top: "25%",
    backgroundColor: "#FFF"
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
