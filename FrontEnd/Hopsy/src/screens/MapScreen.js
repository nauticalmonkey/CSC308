import React, { Component } from "react";
import { StyleSheet, View, SafeAreaView, Dimensions, Text } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import Header from "../components/Header";
import * as Permissions from "expo-permissions";

mapTheme = [
  {
    featureType: "all",
    elementType: "labels",
    stylers: [
      {
        visibility: "on"
      }
    ]
  },
  {
    featureType: "all",
    elementType: "labels.text.fill",
    stylers: [
      {
        saturation: 36
      },
      {
        color: "#000000"
      },
      {
        lightness: 40
      }
    ]
  },
  {
    featureType: "all",
    elementType: "labels.text.stroke",
    stylers: [
      {
        visibility: "on"
      },
      {
        color: "#000000"
      },
      {
        lightness: 16
      }
    ]
  },
  {
    featureType: "all",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "administrative",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#000000"
      },
      {
        lightness: 20
      }
    ]
  },
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#000000"
      },
      {
        lightness: 17
      },
      {
        weight: 1.2
      }
    ]
  },
  {
    featureType: "administrative",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "on"
      }
    ]
  },
  {
    featureType: "administrative.country",
    elementType: "all",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "administrative.country",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#e5c163"
      }
    ]
  },
  {
    featureType: "administrative.province",
    elementType: "all",
    stylers: [
      {
        visibility: "on"
      }
    ]
  },
  {
    featureType: "administrative.locality",
    elementType: "all",
    stylers: [
      {
        visibility: "simplified"
      }
    ]
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#c4c4c4"
      }
    ]
  },
  {
    featureType: "administrative.neighborhood",
    elementType: "all",
    stylers: [
      {
        visibility: "on"
      }
    ]
  },
  {
    featureType: "administrative.neighborhood",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#6e9529"
      }
    ]
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000"
      },
      {
        lightness: 20
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "all",
    stylers: [
      {
        visibility: "on"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000"
      },
      {
        lightness: 21
      },
      {
        visibility: "on"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "poi.business",
    elementType: "geometry",
    stylers: [
      {
        visibility: "on"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#aee74a"
      },
      {
        lightness: "0"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "all",
    stylers: [
      {
        visibility: "on"
      }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000"
      },
      {
        lightness: 18
      }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#575757"
      }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#ffffff"
      }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#2c2c2c"
      }
    ]
  },
  {
    featureType: "road.local",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000"
      },
      {
        lightness: 16
      }
    ]
  },
  {
    featureType: "road.local",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#999999"
      }
    ]
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000"
      },
      {
        lightness: 19
      }
    ]
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000"
      },
      {
        lightness: 17
      }
    ]
  }
];

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
            customMapStyle={mapTheme}
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

//export default MapScreen;

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
