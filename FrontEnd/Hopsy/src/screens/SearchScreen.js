import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  StyleSheet
} from "react-native";
import Header from "../components/Header";
import { SearchBar, List, ListItem } from 'react-native-elements';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

export default class Search extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      query: "",
      data: []
    };

  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    this.setState({ data: DATA });


  };

  renderHeader = () => {
    return (
    <SearchBar
    placeholder="Type Here..."
    onChangeText={this.updateSearch}
    value={this.state.query}
    lightTheme={true}
    />
    );
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "6%"
        }}
      />
    );
  };

  updateSearch = text => {
    console.log("text", text);
    const formattedSearch = text.toLowerCase();
    this.setState({ query: formattedSearch });
    console.log("text", this.state.query);
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header text={"Search"} />


        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Text style={styles.item}>{item.title}</Text>
          )}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}

        />


      </SafeAreaView>
    );
  }
}

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
  }
});
