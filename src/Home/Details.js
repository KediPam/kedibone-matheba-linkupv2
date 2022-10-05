
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import Services from './Services';
import { makeRemote } from 'react-native-reanimated/lib/reanimated2/core';
//import Carousel from 'react-native-snap-carousel';



// create a component
const Details = () => {
    const companies = Services
    //const refCarousel = null
    const [currentLocation, setCurrentLocation] = useState(null);
    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setCurrentLocation(location);
            console.log(location);
        })();
    }, []);

    const RenderMarker = () => {
        console.log(Services[0].coord['']);
        return (
            <View>
                {
                    companies.map((marker, index) => {
                        return (
                            <Marker
                                key={index}
                                coordinate={{ latitude: marker.coord['latitude'], longitude: marker.coord['longitude'] }}
                                title={marker.name}
                            />
                        )

                    })
                }

            </View>

        )
    }

    const renderCard = (item, index) => {
        return (

            <View style={{backgroundColor:'white'}}>
                <Text>
                    {item.name}
                </Text>
                <Text>
                    {item.email}
                </Text>
                <Text>
                    {item.contactNumber}
                </Text>
                <Text>
                    {item.rating}
                </Text>
                <TouchableOpacity>
                    <Text>Book</Text>
                </TouchableOpacity>
            </View>


        )
    }

    return (
        <View style={styles.container}>
            {companies != null

                ? <View>
                    <MapView style={styles.map}
                        initialRegion={{
                            latitude: -26.037903,
                            longitude: 28.069633,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        showsUserLocation={true}
                    >

                        <RenderMarker />
                    </MapView>

                  

                </View>


                : <Loader />

            }

        </View>

    );

};



// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
        ...StyleSheet.absoluteFillObject,
        height: '1000%',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    //carousel: {

    //}

})

//make this component available to the app
export default Details;
