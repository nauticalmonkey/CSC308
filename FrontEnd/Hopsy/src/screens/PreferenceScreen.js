import React, { Fragment, Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions
} from "react-native";
import SearchableDropdown from "../components/SearchableDropdown";
import SegmentedControls from "../components/SegmentedControls";
import CustomButton from "../components/CustomButton";
import Header from "../components/Header";

const window = Dimensions.get("window");
const screenHeight = window.height;
const screenWidth = window.width;
import GLOBAL from '../../global'

var beers = [
  {
    id: 1,
    name: "Coors"
  },
  {
    id: 2,
    name: "Budweiser"
  },
  {
    id: 3,
    name: "Modelo"
  },
  {
    id: 4,
    name: "Guiness"
  },
  {
    id: 5,
    name: "Corona"
  },
  {
    id: 6,
    name: "Heineken"
  },
  {
    id: 7,
    name: "Bud Light"
  },
  {
    id: 8,
    name: "Miller"
  }
];

// backend stuff
// username
// arraylist of strings beers
// string flavor
// string origin
class PreferenceScreen extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndexFlavor: 2,
      selectedIndexOrigin: 3,
      selectedFlavorOption: null,
      selectedOriginOption: null,
      selectedItems: []
    };
  }

  _fetchData() {
    const {
      selectedItems,
      selectedFlavorOption,
      selectedOriginOption
    } = this.state;
    if (selectedFlavorOption && selectedOriginOption && selectedItems) {
      fetch("https://44640e6a.ngrok.io//submit-tastes?", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: GLOBAL.user,
          flavor: selectedFlavorOption,
          origin: selectedOriginOption,
          beers: selectedItems
        })
      })
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson == true) {
            this.props.navigation.navigate("Home");
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  }

  render() {
    const flavorOptions = ["Sweet", "Mild", "Strong", "Fruity", "Blonde"];
    const originOptions = ["Domestic", "Local", "Import"];

    function setSelectedFlavorOption(selectedFlavorOption) {
      this.setState({
        selectedFlavorOption
      });
      this.selectedFlavorOption = selectedFlavorOption;
    }

    function setSelectedOriginOption(selectedOriginOption) {
      this.setState({
        selectedOriginOption
      });
      this.selectedOriginOption = selectedOriginOption;
    }

    return (
      <View style={styles.container}>
        <SafeAreaView />
        <Header text={"Help us get to know you"} />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.sub}>
            <Text style={{ paddingBottom: 1, fontSize: 20, color: "#276612" }}>
              Beers you've tried
            </Text>
            <Fragment>
              <SearchableDropdown
                multi={true}
                selectedItems={this.state.selectedItems}
                onItemSelect={item => {
                  const items = this.state.selectedItems;
                  items.push(item);
                  this.setState({ selectedItems: items });
                }}
                containerStyle={{ padding: 5 }}
                onRemoveItem={(item, index) => {
                  const items = this.state.selectedItems.filter(
                    sitem => sitem.id !== item.id
                  );
                  this.setState({ selectedItems: items });
                }}
                itemStyle={styles.beerstyle}
                itemsContainerStyle={{ maxHeight: 140 }}
                items={beers}
                defaultIndex={2}
                chip={true}
                resetValue={false}
                textInputProps={{
                  placeholder: "Bud Light",
                  underlineColorAndroid: "transparent",
                  style: {
                    padding: 12,
                    borderWidth: 1,
                    borderColor: "#ccc",
                    borderRadius: 15
                  }
                }}
                listProps={{
                  nestedScrollEnabled: true
                }}
              />
            </Fragment>
          </View>
          <View style={styles.sub}>
            <Text style={{ paddingBottom: 10, fontSize: 20, color: "#276612" }}>
              Preferred flavor profile
            </Text>
            <SegmentedControls
              tint={"#aee74a"}
              selectedTint={"#276612"}
              backTint={"#276612"}
              options={flavorOptions}
              allowFontScaling={false} // default: true
              onSelection={setSelectedFlavorOption.bind(this)}
              selectedOption={this.state.selectedFlavorOption}
              optionStyle={{}}
              optionContainerStyle={{ flex: 1 }}
              containerBorderRadius={15}
            />
          </View>
          <View style={styles.sub}>
            <Text style={{ paddingBottom: 10, fontSize: 20, color: "#276612" }}>
              Origin
            </Text>
            <SegmentedControls
              tint={"#aee74a"}
              selectedTint={"#276612"}
              backTint={"#276612"}
              options={originOptions}
              allowFontScaling={false} // default: true
              onSelection={setSelectedOriginOption.bind(this)}
              selectedOption={this.state.selectedOriginOption}
              optionStyle={{}}
              optionContainerStyle={{ flex: 1 }}
              containerBorderRadius={15}
            />
          </View>
          <View
            style={
              (styles.sub, { flex: 1, justifyContent: "flex-end", padding: 20 })
            }
          >
            <CustomButton
              text="Continue"
              onPress={() => {
                this._fetchData();
                this.props.navigation.navigate("Home");
              }}
            />
          </View>
          <SafeAreaView />
        </ScrollView>
      </View>
    );
  }
}

PreferenceScreen.navigationOptions = {
  header: null
};

export default PreferenceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: screenHeight,
    width: screenWidth,
    paddingTop: Expo.Constants.statusBarHeight
  },
  sub: {
    padding: 20
  },
  header: {
    height: 70,
    borderBottomWidth: 0.5,
    borderBottomColor: "#E9E9E9",
    alignItems: "center",
    flexDirection: "row",
    padding: 20
  },
  beerstyle: {
    padding: 10,
    marginTop: 2,
    backgroundColor: "#276612",
    borderColor: "#276612",
    borderWidth: 1,
    borderRadius: 15
  }
});
