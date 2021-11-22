import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default function HomeScreen({ route }) {
    // const { favFood, food } = route.params;
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text> {route?.params?.favFood || "Beef Pulao"} is my favorite food.</Text>
            <Text>Mom cooks {route?.params?.food || "Bengan"}</Text>
        </View>
    );
}