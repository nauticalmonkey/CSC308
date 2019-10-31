import React, { Fragment } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView
} from "react-native";
//import SegmentedControlIOS from "@react-native-community/segmented-control";
import Slider from "react-native-slider";
import SearchableDropdown from "react-native-searchable-dropdown";
import { SegmentedControls } from "react-native-radio-buttons";

var items = [
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
      price: 10,
      selectedItems: []
    };
  }
  render() {
    const flavorOptions = ["Sweet", "Mild", "Strong", "Fruity", "Blonde"];
    const originOptions = ["Domestic", "Local", "Import"];

    function setSelectedOption(selectedOption) {
      this.setState({
        selectedOption
      });
    }

    function setSelectedFlavorOption(selectedFlavorOption) {
      this.setState({
        selectedFlavorOption
      });
    }

    function renderOption(option, selected, onSelect, index) {
      const style = selected ? { fontWeight: "bold" } : {};

      return (
        <TouchableWithoutFeedback onPress={onSelect} key={index}>
          <Text style={style}>{option}</Text>
        </TouchableWithoutFeedback>
      );
    }

    function renderContainer(optionNodes) {
      return <View>{optionNodes}</View>;
    }

    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView />
        <View
          style={{
            height: 70,
            borderBottomWidth: 0.5,
            borderBottomColor: "#E9E9E9",
            alignItems: "center",
            flexDirection: "row",
            padding: 20
          }}
        >
          <Image
            style={{ width: 50, height: 50 }}
            source={require("/Users/nick/CSC308/FrontEnd/Hopsy/assets/logo_light.jpg")}
          />
          <Text style={{ fontSize: 24, paddingLeft: 25 }}>
            Help us get to know you
          </Text>
        </View>
        <ScrollView>
          <View style={styles.container}>
            <Text style={{ paddingBottom: 1, fontSize: 20, color: "#276612" }}>
              Beers You've Tried
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
                itemStyle={{
                  padding: 10,
                  marginTop: 2,
                  backgroundColor: "#276612",
                  borderColor: "#276612",
                  borderWidth: 1,
                  borderRadius: 5
                }}
                itemTextStyle={{ color: "white" }}
                itemsContainerStyle={{ maxHeight: 140 }}
                items={items}
                defaultIndex={6}
                chip={true}
                resetValue={false}
                textInputProps={{
                  placeholder: "Bud Light",
                  underlineColorAndroid: "transparent",
                  style: {
                    padding: 12,
                    borderWidth: 1,
                    borderColor: "#276612",
                    borderRadius: 5
                  }
                }}
                listProps={{
                  nestedScrollEnabled: true,
                  keboardDismissMode: "on-drag"
                }}
              />
            </Fragment>
          </View>
          <View style={styles.container}>
            <Text style={{ paddingBottom: 10, fontSize: 20, color: "#276612" }}>
              Preferred Flavor Profile
            </Text>
            <SegmentedControls
              tint={"#12d10f"}
              selectedTint={"white"}
              backTint={"#276612"}
              options={flavorOptions}
              allowFontScaling={false} // default: true
              onSelection={setSelectedFlavorOption.bind(this)}
              selectedOption={this.state.selectedFlavorOption}
              optionStyle={{}}
              optionContainerStyle={{ flex: 1 }}
              containerBorderRadius={30}
            />
          </View>
          <View style={styles.container}>
            <Text style={{ paddingBottom: 10, fontSize: 20, color: "#276612" }}>
              Origin
            </Text>
            <SegmentedControls
              tint={"#12d10f"}
              selectedTint={"white"}
              backTint={"#276612"}
              options={originOptions}
              allowFontScaling={false} // default: true
              onSelection={setSelectedOption.bind(this)}
              selectedOption={this.state.selectedOption}
              optionStyle={{}}
              optionContainerStyle={{ flex: 1 }}
              containerBorderRadius={30}
            />
          </View>
          <View style={styles.container}>
            <Text style={{ paddingBottom: 10, fontSize: 20, color: "#276612" }}>
              Maximum Price ${Math.round(this.state.price)}
            </Text>
            <Slider
              value={this.state.price}
              onValueChange={price => this.setState({ price })}
              minimumValue={5}
              maximumValue={50}
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
    padding: 20,
    paddingBottom: 0.1
  }
});
