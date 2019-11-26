import React, { Component } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Dimensions,
  Text,
  Animated,
  Image,
  ActivityIndicator
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import Header from "../components/Header";
import { MAP_API_KEY } from "react-native-dotenv";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import { TouchableOpacity } from "react-native-gesture-handler";
import BottomSheet from "reanimated-bottom-sheet";

const maptheme = require("./maptheme.json");
const URL =
  "https://maps.googleapis.com/maps/api/place/textsearch/json?query=brewery&fields=photos,formatted_address,name,rating,opening_hours,geometry";

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;

export default class MapScreen extends React.Component {
  state = {
    latitude: null,
    longitude: null,
    loading: false,
    location: null
  };

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied"
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    latitude = location.coords.latitude;
    longitude = location.coords.longitude;
    this.setState({ latitude, longitude, location }, () => {
      return fetch(
        URL +
          "&location=" +
          this.state.latitude +
          "," +
          this.state.longitude +
          "&radius=10000&key=" +
          MAP_API_KEY
      )
        .then(response => response.json())
        .then(responseJson => {
          this.setState(
            {
              loading: false,
              brewdata: responseJson
            },
            console.log(responseJson.results),
            function() {}
          );
        })
        .catch(
          error => {
            console.error(error);
          },
          { enableHighAccuracy: true }
        );
    });
  };

  async componentDidMount() {
    this.setState({ loading: true });
    // ask user for location
    this._getLocationAsync();
  }

  render() {
    const { latitude, longitude, brewdata, loading } = this.state;

    if (loading) {
      return (
        <View style={styles.container}>
          <SafeAreaView />
          <Header text={"Breweries"} />
          <View style={{ flex: 1, justifyContent: "center" }}>
            <ActivityIndicator size="large" color="rgba(68, 126, 36, 1)" />
          </View>
        </View>
      );
    } else if (latitude && brewdata) {
      return (
        <View style={styles.container}>
          <SafeAreaView />
          <Header text={"Breweries"} />
          <MapView
            ref={map => (this.map = map)}
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
            {brewdata.results.map((brewery, index) => {
              console.log(brewery.name);
              if (brewery.opening_hours) {
                return (
                  <Marker
                    coordinate={{
                      latitude: brewery.geometry.location.lat,
                      longitude: brewery.geometry.location.lng
                    }}
                    title={brewery.name}
                    key={brewery.id}
                    pinColor={"rgba(68, 126, 36, 1)"}
                  ></Marker>
                );
              } else {
                return (
                  <Marker
                    coordinate={{
                      latitude: brewery.geometry.location.lat,
                      longitude: brewery.geometry.location.lng
                    }}
                    title={brewery.name}
                    key={brewery.id}
                  ></Marker>
                );
              }
            })}
          </MapView>
          <Animated.ScrollView
            horizontal
            scrollEventThrottle={1}
            showsHorizontalScrollIndicator={false}
            snapToInterval={CARD_WIDTH + 20}
            style={styles.scrollView}
            contentContainerStyle={styles.endPadding}
          >
            {brewdata.results.map((brew, index) => (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  this.map.animateToRegion(
                    {
                      latitude: brew.geometry.location.lat,
                      longitude: brew.geometry.location.lng,
                      latitudeDelta: 0.0922,
                      longitudeDelta: 0.0421
                    },
                    400
                  )
                }
              >
                <View style={styles.card}>
                  <View style={styles.textContent}>
                    <Text numberOfLines={1} style={styles.cardtitle}>
                      {brew.name}
                    </Text>
                    <Text numberOfLines={1} style={styles.cardDescription}>
                      {brew.formatted_address}
                    </Text>
                    <Image
                      style={{
                        width: CARD_WIDTH / 1.15,
                        height: CARD_HEIGHT / 1.5,
                        borderRadius: 15
                      }}
                      source={
                        brew.photos == null
                          ? require("../images/Bunny.png")
                          : {
                              uri:
                                "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" +
                                brew.photos[0].photo_reference +
                                "&key=" +
                                MAP_API_KEY
                            }
                      }
                    />
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </Animated.ScrollView>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <SafeAreaView />
        <Header text={"Breweries"} />
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
    paddingTop: Expo.Constants.statusBarHeight
  },
  mapStyle: {
    flex: 1
  },
  scrollView: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    paddingVertical: 10
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH
  },
  card: {
    padding: 5,
    elevation: 2,
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
    borderRadius: 20
  },
  textContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  cardtitle: {
    fontSize: 15,
    fontWeight: "bold"
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
    paddingBottom: 5
  }
});
