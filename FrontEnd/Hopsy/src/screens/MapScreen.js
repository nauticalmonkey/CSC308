import React, { Component } from "react";
import { StyleSheet, View, SafeAreaView, Dimensions, Text } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import Header from "../components/Header";
import * as Permissions from "expo-permissions";

const maptheme = require("./maptheme.json");

export default class MapScreen extends React.Component {
  state = {
    latitude: null,
    longitude: null
  };

  async componentDidMount() {
    const { status } = await Permissions.getAsync(Permissions.LOCATION);

    if (status != "granted") {
      const response = await Permissions.askAsync(Permissions.LOCATION);
    }

    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) =>
        this.setState({ latitude, longitude }, this.mergeCoords),
      error => console.log("Error:", error)
    );
  }

  render() {
    const { latitude, longitude } = this.state;
    if (latitude) {
      return (
        <View style={{ flex: 1 }}>
          <SafeAreaView />
          <Header text={"Brewery locator"} />
          <MapView
            style={styles.mapStyle}
            customMapStyle={maptheme}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            followsUserLocation={true}
            initialRegion={{
              latitude,
              longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          >
            <Text>latitude: {this.state.latitude}</Text>
            <Text>longitude: {this.state.longitude}</Text>
          </MapView>
        </View>
      );
    }
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>We need your permission!</Text>
      </View>
    );
  }
}

MapScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
});
