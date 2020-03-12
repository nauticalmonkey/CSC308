import React, { Component } from "react";
import { StyleSheet } from "react-native";

import { FlatList } from "react-native-gesture-handler";
import { View, SafeAreaView, Text, Image } from "react-native";
import Header from "../components/Header";
import { DrawerActions } from "react-navigation-drawer";
import moment from "moment";
import Constants from "expo-constants";

export default class Recommendation extends React.Component {
  renderRecommendations = recommendation => {
    return (
      <SafeAreaView style={styles.feedItem}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <View>
              <Text style={styles.name}>{recommendation.name}</Text>
              <Text style={styles.timestamp}>
                {moment(recommendation.timestamp).fromNow()}
              </Text>
            </View>
          </View>
          <Image
            source={recommendation.image}
            style={styles.postImage}
            resizeMode="contain"
          />
          <Text style={styles.post}>{recommendation.text}</Text>
        </View>
      </SafeAreaView>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header
          text={"Recommendations"}
          onPress={() => {
            this.props.navigation.dispatch(DrawerActions.openDrawer());
          }}
        />
        <View styles={styles.con}>
          <FlatList
            style={styles.feed}
            data={posts}
            renderItem={({ item }) => this.renderRecommendations(item)}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </SafeAreaView>
    );
  }
}

posts = [
  {
    id: "1",
    name: "SLO Brew",
    text: "Polyvision concert this weekend!",
    timestamp: Date.now(),
    avatar: require("../images/Bunny.png"),
    image: require("../images/Bunny.png")
  },
  {
    id: "2",
    name: "Bull's Tavern",
    text: "Bull sweat now 50% off!!!",
    timestamp: Date.now(),
    avatar: require("../images/Bunny.png"),
    image: require("../images/Bunny.png")
  },
  {
    id: "3",
    name: "Eagle Brewing",
    text: "Eagle Grand Opening this weekend!",
    timestamp: Date.now(),
    avatar: require("../images/Bunny.png"),
    image: require("../images/Bunny.png")
  },
  {
    id: "4",
    name: "Golden Coast Brewing",
    text: "25% off all beer this week only!",
    timestamp: Date.now(),
    avatar: require("../images/Bunny.png"),
    image: require("../images/Bunny.png")
  }
];

const styles = StyleSheet.create({
  bigRedText: {
    fontSize: 30,
    marginTop: 355,
    fontWeight: "600",
    color: "#000",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    marginBottom: 65
  },
  feed: {
    marginHorizontal: 16,
    marginLeft: 77
  },
  feedItem: {
    backgroundColor: "#FFF",
    borderRadius: 5,
    padding: 8,
    flexDirection: "row",
    marginVertical: 8
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 5,
    marginRight: 16
  },
  name: {
    fontSize: 15,
    fontWeight: "500",
    color: "#454D65",
    marginTop: 10
  },
  timestamp: {
    fontSize: 11,
    color: "#C4C6CE",
    marginTop: 4
  },
  post: {
    marginTop: 16,
    fontSize: 14,
    color: "#000"
  },
  postImage: {
    width: undefined,
    height: 150,
    borderRadius: 5,
    marginVertical: 16,
    alignContent: "center",
    alignItems: "center"
  }
});
