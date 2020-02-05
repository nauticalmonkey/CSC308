import React, { Component } from "react";
import {View, Text, StyleSheet, Image} from "react-native";

class HorizontalList extends Component {
  render() {
    return (
      <View style={{ height: 130, width: 130, marginLeft: 20, borderWidth: 0.5, borderColor: '#FFFF' }}>
        <View style={{ flex: 2 }}>
          <Image source={this.props.imageUri}
              style={styles.labelImage}
          />
        </View>
        <View style={styles.labelText}>
          <Text>{this.props.name}</Text>
        </View>
      </View>
    );
  }
}
export default HorizontalList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    labelImage :{
      flex: 1, 
      width: null, 
      height: null, 
      resizeMode: 'contain',
      alignContent: 'center',
      alignItems: 'center' 
    },
    labelText: {
      flex: 1, 
      paddingLeft: 10, 
      paddingTop: 10, 
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center'
    }
});