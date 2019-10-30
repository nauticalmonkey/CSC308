import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {
    View,
    Text,
    Alert,
    TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';


export default function AgeVerificationScreen()
{
    return (
        <SafeAreaView style={styles.container}>
            <View>
                
                <Text style={styles.bigText}> 
                    Are you 21? 
                </Text>


                <View style={styles.twinContainer}>
                    <TouchableOpacity 
                        style={styles.simpleYesButton}
                        // onPress={() => Alert.alert('Yes Pressed')}>
                        onPress={() => navigate('TooYoung')}>
                        <Text style={styles.loginText}>Yes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.simpleNoButton}
                        onPress={() => Alert.alert('No Pressed')}>
                        <Text style={styles.loginText}>No</Text>
                    </TouchableOpacity>            
                </View>
            </View>
        </SafeAreaView>

    );
}

AgeVerificationScreen.navigationOptions = 
{
    header: null,
};
  
const styles = StyleSheet.create(
{
    
    container: 
    {
        flex: 1,
        backgroundColor: '#EAEDED',
    },
    bigText: {
        fontSize: 60,
        marginTop: 225,
        marginBottom: 30,
        fontWeight: 'bold',
        //color: 'rgba(0, 255, 255, 1)',
        //lineHeight: 48,
        textAlign: 'center',
        //backgroundColor: 'red'
    },
    twinContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 50,
    },
    simpleYesButton: {
        marginTop: 20,
        backgroundColor: '#1B9925',
    },
    simpleNoButton: {
        backgroundColor: '#FF0000',
        marginTop: 20,
    },
    loginText:{
        color:'#fff',
        flexDirection: 'row',
        //textAlign:'center',
        fontSize: 50,
        paddingLeft : 20,
        paddingRight : 20
    }
});

