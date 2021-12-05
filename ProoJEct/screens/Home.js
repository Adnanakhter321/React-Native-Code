/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
const Home2 = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                Home
            </Text>
            <View style={{ marginTop: 20 }}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Signin');
                }} >
                    <Text style={{
                        color: 'white',
                        backgroundColor: '#f16c23',
                        width: 100,
                        borderRadius: 18,
                        paddingTop: 10,
                        height: 40,
                        textAlign: 'center',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
};

export default Home2;
