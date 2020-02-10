import React from "react";
import renderer from "react-test-renderer";

import MapScreen from "../screens/MapScreen";
import HomeScreen from "../screens/HomeScreen";
import PreferenceScreen from "../screens/PreferenceScreen";
import AgeVerificationScreen from "../screens/AgeVerificationScreen";
import ProfileScreen from "../screens/ProfileScreen";
import RecommendationScreen from "../screens/RecommendationScreen";
import SearchScreen from "../screens/SearchScreen";
import SettingsScreen from "../screens/SettingsScreen";
import SignUpScreen from "../screens/SignUpScreen";
import TooYoung from "../screens/TooYoung";

test("map renders correctly", () => {
  const tree = renderer.create(<MapScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("home renders correctly", () => {
  const tree = renderer.create(<HomeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("preference renders correctly", () => {
  const tree = renderer.create(<PreferenceScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("age renders correctly", () => {
  const tree = renderer.create(<AgeVerificationScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("profile renders correctly", () => {
  const tree = renderer.create(<ProfileScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("recommendation renders correctly", () => {
  const tree = renderer.create(<RecommendationScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("search renders correctly", () => {
  const tree = renderer.create(<SettingsScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("sign up renders correctly", () => {
  const tree = renderer.create(<SignUpScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("sign up renders correctly", () => {
  const tree = renderer.create(<TooYoung />).toJSON();
  expect(tree).toMatchSnapshot();
});
