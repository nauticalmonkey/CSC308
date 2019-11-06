<<<<<<< HEAD
import React, { Fragment } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView
} from "react-native";
import Slider from "react-native-slider";
import SearchableDropdown from "./components/SearchableDropdown";
import SegmentedControls from "./components/SegmentedControls";
import CustomButton from "./components/CustomButton";
import Header from "./components/Header";

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

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedIndexFlavor: 2,
      selectedIndexOrigin: 3,
      selectedFlavorOption: null,
      selectedOriginOption: null,
      price: 10,
      selectedItems: []
    };
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

    function setPrice(price) {
      this.setState({ price });
      this.price = price;
    }

    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView />
        <Header text={"Help us get to know you"} />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.container}>
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
          <View style={styles.container}>
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
          <View style={styles.container}>
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
          <View style={styles.container}>
            <Text style={{ paddingBottom: 10, fontSize: 20, color: "#276612" }}>
              Maximum price ${Math.round(this.state.price)}
            </Text>
            <Slider
              value={this.state.price}
              onValueChange={setPrice.bind(this)}
              minimumValue={5}
              maximumValue={50}
            />
          </View>
          <View
            style={
              (styles.container,
              { flex: 1, justifyContent: "flex-end", padding: 20 })
            }
          >
            <CustomButton
              text="Continue"
              onPress={() => {
                alert("If I were a button how would you press me?");
              }}
            />
          </View>
          <SafeAreaView />
        </ScrollView>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
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
=======
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import AgeVerificationScreen from './src/screens/AgeVerificationScreen';
import TooYoungScreen from './src/screens/TooYoung';

//Noel's Login stuff
import LoginScreen from './src/components/Login';


const MainNavigator = createStackNavigator({
  AgeVer: AgeVerificationScreen,
  TooYoung: TooYoungScreen,
  Login: LoginScreen,

  //Profile: {screen: ProfileScreen},
>>>>>>> 99b658f44a891a94e0981c1eb3893a839797e113
});

const App = createAppContainer(MainNavigator);

export default App;
