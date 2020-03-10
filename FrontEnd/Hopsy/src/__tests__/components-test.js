import React from "react";
import Header from "../components/Header";
import CustomButton from "../components/CustomButton";
import LoginForm from "../components/LoginForm";
import SearchableDropdown from "../components/SearchableDropdown";
import SegmentedControls from "../components/SegmentedControls";
import SignUpForm from "../components/SignUpForm";
import HorizontalList from "../components/ProfilePage/HorizontalList";

import renderer from "react-test-renderer";

jest.mock("../components/CustomButton");
jest.mock("../components/Header");

jest.mock("../components/Header", () => {
  const RealComponent = jest.requireActual("../components/Header");
  const React = require("React");
  class Header extends React.Component {
    render() {
      return React.createElement(
        "../components/Header",
        (text = "Help us get to know you")
      );
    }
  }
  Header.propTypes = RealComponent.propTypes;
  return Header;
});

jest.mock("../components/CustomButton", () => {
  const RealComponent = jest.requireActual("../components/CustomButton");
  const React = require("React");
  class CustomButton extends React.Component {
    render() {
      return React.createElement(
        "../components/CustomButton",
        (text = "Button Test")
      );
    }
  }
  CustomButton.propTypes = RealComponent.propTypes;
  return CustomButton;
});

test("header renders correctly", () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("custom button renders correctly", () => {
  const tree = renderer
    .create(
      <CustomButton
        text="Test"
        onPress={() => {
          alert("Test");
        }}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("login form renders correctly", () => {
  const tree = renderer
    .create(
      <LoginForm
        navigation={() => {
          alert("Test");
        }}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("segmented controls renders correctly", () => {
  const beers = [
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
  const flavorOptions = ["Sweet", "Mild", "Strong", "Fruity", "Blonde"];
  const tree = renderer
    .create(
      <SegmentedControls
        tint={"#aee74a"}
        selectedTint={"#276612"}
        backTint={"#276612"}
        items={beers}
        options={flavorOptions}
        allowFontScaling={false} // default: true
        optionStyle={{}}
        optionContainerStyle={{ flex: 1 }}
        containerBorderRadius={15}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("dropdown renders correctly", () => {
  const beers = [
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
  const tree = renderer
    .create(
      <SearchableDropdown
        multi={true}
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
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("sign up renders correctly", () => {
  const tree = renderer
    .create(
      <SignUpForm
        navigation={() => {
          alert("Test");
        }}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("horizonal list renders correctly", () => {
  const tree = renderer.create(<HorizontalList />).toJSON();
  expect(tree).toMatchSnapshot();
});
