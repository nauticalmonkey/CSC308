import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
  Modal,
  SafeAreaView,
  StyleSheet,
  Image
} from 'react-native';
import Header from "../components/Header";
import { SearchBar, List, ListItem } from 'react-native-elements';
import _ from 'lodash';

import DATA from './beers.json';

export default class Search extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      query: "",
      data: DATA,
      fullData: DATA,
      collapsed: true,
      modalVisible: false
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    // this.setState({ data: DATA });


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
          marginLeft: "6%",
        }}
      />
    );
  };
  //.toLowerCase.includes

  updateSearch = text => {
    console.log("text", text);
    const formattedSearch = text.toLowerCase();
    const data = _.filter(this.state.fullData, item => {
      return item.name.toLowerCase().includes(formattedSearch);
    });
    this.setState({ query: formattedSearch, data });
  };

  toggleModal(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header text={"Search"} />
        <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={this.state.query}
        lightTheme={true}
        />

        {/* <List containerStyle={styles.flatview}>
          {
            data.map((item) => (
              <ListItem
                avatar={{uri:item.URL}}
                key={l.name}
                title={l.name}
              />
            ))
          }
        </List> */}



        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (

            <View style = {styles.flatview}>
              <Modal animationType = {"slide"} transparent = {false}
                visible = {this.state.modalVisible}
                onRequestClose = {() => { console.log("Modal has been closed.") } }>

                <View style = {styles.modal}>
                    <Text style = {styles.text}>Modal is open!</Text>

                    <TouchableOpacity onPress = {() => {
                      this.toggleModal(!this.state.modalVisible)}}>

                      <Text style = {styles.text}>Close Modal</Text>
                    </TouchableOpacity>
                </View>
              </Modal>

              <TouchableOpacity onPress = {() => {this.toggleModal(true)}}>
                <Image
                  style={{flex: 1, flexDirection: 'row', width: 50, height: 50, resizeMode: 'contain'}}
                  source={{uri: item.URL}}
                />
                <Text style = {styles.name}>{item.name}</Text>
              </TouchableOpacity>
            </View>

            //////////////////////////////

            // <View>
            //   <TouchableOpacity onPress={this.onPress}
            //                     style={styles.flatview}>
            //   <Text style={styles.name}>{item.name} </Text>
            //   </TouchableOpacity>
            //   {this.state.collapsed ?
            //   <View>

            //   </View>
            //   :
            //   <View>
            //     <Text style={styles.subtext}>{"Calories: " + item.calories}</Text>
            //     <Text style={styles.subtext}>{"ABV: " + item.ABV + "%"}</Text>
            //   </View>}
            // </View>


            //         ////////////////////////

            // <View style={styles.flatview}>

            // <Text style={styles.name}>{item.name}</Text>
            // <Text style={styles.subtext}>{"Calories: " + item.calories}</Text>
            // <Text style={styles.subtext}>{"ABV: " + item.ABV + "%"}</Text>

            // </View>
          )}
          keyExtractor={item => item.name}
          ItemSeparatorComponent={this.renderSeparator}
        />


      </SafeAreaView>
    );
  }

  onPress = () => {
    this.setState({collapsed: !this.state.collapsed});
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
  flatview: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 2,
  },
  name: {
    flex: 8,
    flexDirection: 'row',
    fontSize: 30
  },
  subtext: {
    fontSize: 12,
    flex: 1,
    flexDirection: 'row',
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f7021a',
  },
  text: {
    color: '#3f2949',
    marginTop: 10
  },
  container: {
    flex: 1,
    paddingTop: Expo.Constants.statusBarHeight
  }
});
