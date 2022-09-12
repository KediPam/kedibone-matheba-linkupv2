
import React, { Component } from 'react';
import { View, Dimensions, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = ({ navigation }) => {
    return (
        <SafeAreaView>
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
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#c5e1a5",
        padding: 10,
        margin: 20,
        borderRadius: 200
      },
      form:{
        margin: 10,
        paddingTop: 100,

      }
});

//make this component available to the app
export default Login;



