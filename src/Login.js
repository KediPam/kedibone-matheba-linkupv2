
import React, { Component } from 'react';
import { View, Dimensions, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>

        <Text style={{fontWeight:'100', fontSize: 34, marginBottom:10,}}>Hallo Again</Text>
        <Text style={{marginBottom: 10, fontSize: 16, }}>Sign Up to continue</Text>
        <View style={styles.form}>
        <TextInput
                style={styles.input}
                placeholder="User Name"

            />
            <TextInput
                style={styles.input}
                placeholder="Password"
            />

        </View>
            
            <TouchableOpacity
                style={styles.button}
                onPress={()=> navigation.navigate('Home')}
            >
                <Text>Click Here</Text>
            </TouchableOpacity>
            <Text style={{marginBottom: 10, fontSize:13,}}>Click Here to continue</Text>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b7e1e4',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#4c8c4a",
        padding: 10,
        margin: 20,
        borderRadius: 100
      },
      form:{
        margin: 10,
        paddingTop: 100,

      }
});

//make this component available to the app
export default Login;



