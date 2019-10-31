import React, { Fragment } from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import SegmentedControlIOS from "@react-native-community/segmented-control";
import Slider from "react-native-slider";
import SearchableDropdown from "react-native-searchable-dropdown";

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
      totalCount: 0,
      readingCount: 0,
      readCount: 0,
      price: 10,
      selectedItems: []
    };
  }
  render() {
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
            paddingLeft: 20
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
        <View style={styles.container}>
          <Text style={{ paddingBottom: 10, fontSize: 20, color: "#276612" }}>
            Preferred Flavor Profile
          </Text>
          <SegmentedControlIOS
            values={["Sweet", "Mild", "Strong", "Fruity", "Blonde"]}
            selectedIndexFlavor={this.state.selectedIndexFlavor}
            onChange={event => {
              this.setState({
                selectedIndexFlavor: event.nativeEvent.selectedSegmentIndex
              });
            }}
            style={{ paddingTop: 35, backgroundColor: "#54db27" }}
          />
        </View>
        <View style={styles.container}>
          <Text style={{ paddingBottom: 10, fontSize: 20, color: "#276612" }}>
            Origin
          </Text>
          <SegmentedControlIOS
            values={["Domestic", "Local", "Import"]}
            selectedIndexOrigin={this.state.selectedIndexOrigin}
            onChange={event => {
              this.setState({
                selectedIndexOrigin: event.nativeEvent.selectedSegmentIndex
              });
            }}
            style={{
              paddingTop: 35,
              backgroundColor: "#54db27"
            }}
          />
        </View>
        <View style={styles.container}>
          <Text style={{ paddingBottom: 10, fontSize: 20, color: "#276612" }}>
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
                backgroundColor: "#FFDD",
                borderColor: "#276612",
                borderWidth: 1,
                borderRadius: 5
              }}
              itemTextStyle={{ color: "#276612" }}
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
                nestedScrollEnabled: true
              }}
            />
          </Fragment>
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
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    paddingLeft: 20,
    paddingRight: 20
  }
});
