import React, { Component } from 'react';
import { View, Button, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, TouchableOpacity } from 'react-native';
import MyCommunityServiceData from './LinkDataSkills';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// create a component
const Home = ({ navigation }) => {
    return (
        <SafeAreaView >
            <FlatList
                data={MyCommunityServiceData}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity 
                        onPress={() => navigation.navigate('Details')}
                        style={{ margin: 20, height: windowHeight * 0.2, backgroundColor:item.bgColor, borderRadius: 10, }}>
                            <View Style={{ backgroundColor: item.bgColor }}>
                                <Text style={styles.name}>
                                    {item.name}
                                </Text>
                                <Text style={styles.Category}>
                                    {item.Category}
                                </Text>
                                <Text>
                                    {item.numberOfClasses}
                                </Text>
                                <Image style={{
                                    height: 80, width: 80, position: 'absolute', right: 0, margin: 10, Button: 0
                                }} source={item.Image} />

                            </View>

                        </TouchableOpacity>
                    )
                }}
            >

            </FlatList>

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
    Category: {
        fontSize: 25,
        fontWeight: "200"

    },
    name: {
        fontSize: 18,
        fontWeight: "200"
    }

});

//make this component available to the app
export default Home;
