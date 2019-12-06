import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  StyleSheet,
  Image,
  RefreshControl
} from 'react-native';
import Header from "../components/Header";
import { SearchBar, List, ListItem } from 'react-native-elements';
import _ from 'lodash';

import CustomButton from "../components/CustomButton";
import DATA from './beers.json';

export default class Search extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      query: "",
      data: DATA,
      fullData: DATA,
      currentBeer: DATA[0],
      isFetching: false,
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
    const formattedSearch = text.toLowerCase();
    const data = _.filter(this.state.fullData, item => {
      return item.name.toLowerCase().includes(formattedSearch);
    });
    this.setState({ query: formattedSearch, data });
  };

  toggleModal(visible, beer) {
    this.setState({ modalVisible: visible, currentBeer: beer });
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
            this.state.data.map( (item) => (

              <ListItem>
                <TouchableOpacity
                  onPress={() => {
                    this.updateButton();
                  }}
                >
                  <View style={styles.modal}>
                    <Text style = {styles.text}>Close Modal</Text>
                  </View>
                </TouchableOpacity>
              </ListItem>

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

                <View>
                  <Image
                    style={styles.image}
                    source={{uri: this.state.currentBeer.URL}}
                  />
                  <Text style = {styles.modalText}>{this.state.currentBeer.name}</Text>
                  <Text style = {styles.modalText}>{"ABV: " + this.state.currentBeer.ABV + "%"}</Text>
                  <Text style = {styles.modalText}>{"Calories: " + this.state.currentBeer.calories}</Text>
                </View>

                <View style = {styles.modalExit}>
                  <CustomButton
                    onPress={() => {
                      this.toggleModal(!this.state.modalVisible, this.state.currentBeer);
                    }}
                    text="Back"
                  />
                </View>
              </Modal>

              <TouchableOpacity onPress = {() => {this.toggleModal(true, item)}}>
                <View>
                  <Image
                    style={styles.thumb}
                    source={{uri: item.URL}}
                  />
                  <Text style = {styles.name}>{item.name}</Text>
                </View>
              </TouchableOpacity>

            </View>
          )}
          keyExtractor={item => item.name}
          ItemSeparatorComponent={this.renderSeparator}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isFetching}
              onRefresh={() => setTimeout(() => {  }, 100) }
            />
          }
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
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 2,
  },
  thumb: {
    flex: 1,
    flexDirection: 'row',
    width: 50,
    height: 50,
    resizeMode: 'contain'
  },
  image: {
    width: 400,
    height: 400,
    top: '25%',
    left: '1%',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain'
  },
  modalText: {
    top: '25%',
    fontSize: 30,
    fontWeight: '300',
    textAlign: 'center'
  },
  modalName: {
    top: '25%',
    fontSize: 30,
    fontWeight: '300',
    textAlign: 'center'
  },
  modalABV: {
    top: '25%',
    fontSize: 30,
    textAlign: 'center'
  },
  modalCalories: {
    top: '25%',
    fontSize: 30,
    textAlign: 'center'
  },
  modalExit: {
    alignItems: 'center',
    top: '25%',
    backgroundColor: '#FFF'
  },
  name: {
    flex: 8,
    flexDirection: 'row',
    fontSize: 30,
    fontWeight: '300'
  },
  subtext: {
    fontSize: 12,
    flex: 1,
    flexDirection: 'row',
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  text: {
    color: '#3f2949',
    paddingBottom: 100
  },
  container: {
    flex: 1,
    paddingTop: Expo.Constants.statusBarHeight
  }
});
