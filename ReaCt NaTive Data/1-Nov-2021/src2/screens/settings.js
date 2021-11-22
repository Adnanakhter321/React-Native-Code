import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

export default function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.view1}><Text>First View</Text></View>
            <View style={styles.view2}><Text>Second View</Text></View>
            <View style={styles.view3}><Text>Third View</Text></View>
        </View>
    );
}
const styles = StyleSheet.create({
    view1: {
        backgroundColor: "blue",
        width: 150
        // flex:2
    },
    view2: {
        backgroundColor: "green",
        width: 150
        // flex:3
    },
    view3: {
        backgroundColor: "yellow",
        width: 150
        // flex:1
    }

})