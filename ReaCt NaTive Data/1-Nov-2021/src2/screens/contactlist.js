import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import * as Contacts from 'expo-contacts';

export default function ContactList({ route }) {
    useEffect(() => {
        getAllContacts();
    }, []);

    const getAllContacts = async () => {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === 'granted') {
            const { data } = await Contacts.getContactsAsync();

            if (data.length > 0) {
                const contact = data[0];
                console.log(contact, data, data.length);
            }
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text> {route?.params?.favFood || "Beef Pulao"} is my favorite food.</Text>
            <Text>Mom cooks {route?.params?.food || "Bengan"}</Text>
        </View>
    );
}