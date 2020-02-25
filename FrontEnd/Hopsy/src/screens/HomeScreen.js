import React, { Component } from "react";
import { StyleSheet } from "react-native";

import { View, SafeAreaView, Text, Image } from "react-native";
import Header from "../components/Header";
import { DrawerActions } from "react-navigation-drawer";
import Icon from "react-native-vector-icons/Ionicons";
import { FlatList } from "react-native-gesture-handler";
import moment from 'moment';

export default class Test extends React.Component {
  renderPosts = post =>{
    return(
      <View style={styles.feedItem}>
        <Image source={post.avatar} style={styles.avatar}/>
        <View style={{flex : 1}}>
          <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
            <View>
              <Text style={styles.name}>{post.name}</Text>
              <Text style={styles.timestamp}>{moment(post.timestamp).fromNow()}</Text>
            </View>
            {/*<Icon name="ios-more" size={24} color="#737888"/>*/}
          </View>
          <Text style={styles.post}>{post.text}</Text>
          <Image source={post.image} style={styles.postImage} resizeMode="contain"/>
          <View style={{flexDirection: "row"}}>
            <Icon name="ios-heart-empty" size={24} color="#737888" style={{marginRight: 16}}/>
            <Icon name="ios-chatboxes" size={24} color="#737888" style={{marginRight: 16}}/>
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header
          text={"Home"}
          onPress={() => {
            this.props.navigation.dispatch(DrawerActions.openDrawer());
          }}
        />
        <View styles={styles.con}>
          <FlatList style={styles.feed}
            data = {posts}
            renderItem={({item})=>this.renderPosts(item)}
            keyExtractor={item=>item.id}
            showsVerticalScrollIndicator={false}/>
        </View>
      </SafeAreaView>
    );
  }
}

posts = [{
  id: "1",
  name: "SLO Brew",
  text:
      "Polyvision concert this weekend!",
  timestamp: Date.now(),
  avatar: require("../images/Bunny.png"),
  image: require("../images/Bunny.png")
},
{
  id: "2",
  name: "Bull's Tavern",
  text:
      "Bull sweat now 50% off!!!",
  timestamp: Date.now(),
  avatar: require("../images/Bunny.png"),
  image: require("../images/Bunny.png")
},
{
  id: "3",
  name: "Eagle Brewing",
  text:
      "Eagle Grand Opening this weekend!",
  timestamp: Date.now(),
  avatar: require("../images/Bunny.png"),
  image: require("../images/Bunny.png")
},
{
  id: "4",
  name: "Golden Coast Brewing",
  text:
      "25% off all beer this week only!",
  timestamp: Date.now(),
  avatar: require("../images/Bunny.png"),
  image: require("../images/Bunny.png")
}];

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
    paddingTop: Expo.Constants.statusBarHeight
  },
  feed:{
    marginHorizontal:16
  },
  feedItem: {
    backgroundColor: "#FFF",
    borderRadius: 5,
    padding: 8,
    flexDirection: "row",
    marginVertical: 8
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 16
  },
  name: {
    fontSize: 15,
    fontWeight: "500",
    color: "#454D65"
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
    marginVertical: 16
  }
});
