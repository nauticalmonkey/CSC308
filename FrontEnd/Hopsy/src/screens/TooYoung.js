import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import {
    View,
    Text,
} from 'react-native';

//import { SafeAreaView } from 'react-navigation';

export default function TooYoungScreen()
{
    return(
        <View>
            <Text style={StyleSheet.bigRedText}>
                Come back when you are 21   
            </Text>
        </View>
    );
}

const styles = StyleSheet.create(
{
    bigRedText: {
        fontSize: 60,
        marginTop: 225,
        marginBottom: 30,
        fontWeight: 'bold',
        color: 'rgba(255, 0, 0, 1)',
        //lineHeight: 48,
        textAlign: 'center',
        //backgroundColor: 'red'
    },

});



