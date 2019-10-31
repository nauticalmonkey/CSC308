import React, { Component } from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar} from 'react-native';

export default class LoginForm extends Component {
    render() {
        return (
            <View style ={styles.container}>
                <StatusBar
                    barStyle="dark-content"
                />
                <TextInput 
                placeholder="username or email"
                placeholderTextColor= '#FFF'
                returnKeyType="next"
                onSubmitEditing={()=>this.passwordInput.focus()}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
                />
                <TextInput 
                placeholder="password"
                placeholderTextColor= '#FFF'
                returnKeyType="go"
                secureTextEntry
                style={styles.input}
                ref={(input)=>this.passwordInput = input}
                />
                <TouchableOpacity style={styles.butoonContainer}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        padding: 20
    },
    input: {
        height: 50,
        backgroundColor: 'rgba(17, 71, 16, 0.6)',
        marginBottom: 20,
        color: '#FFF',
        paddingHorizontal: 10
    },
    butoonContainer: {
        height: 55,
        backgroundColor: 'rgba(17, 71, 16, 0.9)',
        paddingVertical: 10,
        marginBottom: 40,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '700',
        justifyContent:'center',
        alignItems:'center'
    }
});
