import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

const Map = () => {
    let data =
        [
            {
                "branch_name": "Aliabad",
                "latitude": 24.9200172,
                "longitude": 67.0612345
            },
            {
                "branch_name": "Numaish chowrangi",
                "latitude": 24.8732834,
                "longitude": 67.0337457
            },
            {
                "branch_name": "Saylani house phase 2",
                "latitude": 24.8278999,
                "longitude": 67.0688257
            },
            {
                "branch_name": "Touheed commercial",
                "latitude": 24.8073692,
                "longitude": 67.0357446
            },
            {
                "branch_name": "Sehar Commercial",
                "latitude": 24.8138924,
                "longitude": 67.0677652
            },
            {
                "branch_name": "Jinnah avenue",
                "latitude": 24.8949528,
                "longitude": 67.1767206
            },
            {
                "branch_name": "Johar chowrangi",
                "latitude": 24.9132328,
                "longitude": 67.1246195
            },
            {
                "branch_name": "Johar chowrangi 2",
                "latitude": 24.9100704,
                "longitude": 67.1208811
            },
            {
                "branch_name": "Hill park",
                "latitude": 24.8673515,
                "longitude": 67.0724497
            }
        ]

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [kilo, setKilo] = useState([])
    const [minKilo, setminKilo] = useState('')
    function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = deg2rad(lat2 - lat1);  // deg2rad below
        var dLon = deg2rad(lon2 - lon1);
        var a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2)
            ;
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    }
    function deg2rad(deg) {
        return deg * (Math.PI / 180)
    }
    useEffect(() => {
        const lat1 = location?.coords.latitude
        const lot1 = location?.coords.longitude
        data.map(({ latitude, longitude ,branch_name }) => {
            let distance = getDistanceFromLatLonInKm(lat1, lot1, latitude, longitude)
            let km = Math.ceil(distance)
            distance ? kilo.push(km) : null
        })
        const min = Math.min(...kilo)
        // const Nearest = {
        //     BranchName: branch_name,
        //     minKilo,
        // }
        // setminKilo(Nearest);
        // console.log(minKilo);
    }, [location, minKilo])

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);
    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    return (
        location ? <MapView style={styles.map}
            initialRegion={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        >
            <Marker
                coordinate={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                }}
                //   image={{uri: 'two.png'}}
                title={"Adnan Home"}


            />
            {data.map(({ branch_name, latitude, longitude }) => {
                return (
                    <Marker
                        coordinate={{
                            latitude: latitude,
                            longitude: longitude,
                        }}
                        title={branch_name}
                        key={latitude}
                    />
                )
            })}
        </MapView>
            : null
    )
}
export default Map;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});