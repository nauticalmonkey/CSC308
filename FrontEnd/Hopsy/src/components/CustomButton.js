import React, { Component } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

class customButton extends Component {
  render() {
    const { text, onPress, style } = this.props;
    return (
      <TouchableOpacity
        style={[styles.buttonStyle, this.props.style]}
        onPress={() => onPress()}
      >
        <Text style={styles.textStyle}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

customButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 17,
    color: "#ffffff",
    textAlign: "center"
  },

  buttonStyle: {
    padding: 10,
    backgroundColor: "#276612",
    borderRadius: 5,
    marginBottom: 20
  }
});

export default customButton;
