import React from "react";
import Header from "../components/Header";
import CustomButton from "../components/CustomButton";

import renderer from "react-test-renderer";

test("renders correctly", () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders correctly", () => {
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
