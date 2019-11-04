import React, { Component } from 'react';
import {StyleSheet, View, Text, Image, KeyboardAvoidingView} from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component{
    render(){
        return(
            <KeyboardAvoidingView behavior="padding" style ={styles.container}>
                <View style={styles.logoContainer}>
                    <Image 
                    style={styles.logo}
                    source={require('../images/Bunny.png')}></Image>
                    <Text style={styles.title}>Hopsy</Text>
                    <Text style={styles.subtitle}>A simpler way to enjoy beer.</Text>
                </View>
                <View style={styles.formContainer}>
                    <LoginForm />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

Login.navigationOptions = 
{
    header: null,
};

const styles = StyleSheet.create({
    container:{
        flex : 1,
        backgroundColor : '#FFF'
    },
    logoContainer: {
        alignItems : 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 300,
        height: 300
    },
    title: {
        fontSize: 45,
        color: '#000',
        marginTop: 10,
        width: 200,
        textAlign: 'center', 
        fontWeight: '700'
    },
    subtitle: {
        fontSize: 25,
        color: '#000',
        marginTop: 5,
        width: 500,
        textAlign: 'center',
        fontWeight: '600'
    }  
});