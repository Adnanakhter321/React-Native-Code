import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default function Food({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Home", { favFood: 'Biryani', food: "Dal Chawal" });
                }}
                style={{ padding: 25, backgroundColor: 'orange' }}>
                <Text>Food!</Text>
            </TouchableOpacity>
        </View>
    );
}