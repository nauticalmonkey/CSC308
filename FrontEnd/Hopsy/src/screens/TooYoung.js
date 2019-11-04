import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import {
    View,
    Text,
} from 'react-native';

export default function TooYoungScreen()
{
    return(
        <View>
            <Text style={styles.bigRedText}>
                We are sorry, but we take seriously, our responsibility
                to limit access to our service to adults with legal drining
                age.   
            </Text>
        </View>
    );
}

TooYoungScreen.navigationOptions = 
{
    header: null,
};

const styles = StyleSheet.create(
{
    bigRedText: {
        fontSize: 30,
        marginTop: 355,
        fontWeight: '600',
        color: '#000',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },

});



